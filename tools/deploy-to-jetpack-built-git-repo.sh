#!/bin/bash

CURRENT=$(dirname "$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )" )
JETPACK_BUILT="/tmp/jetpack"
CURRENT_BACKUP="/tmp/jetpack2"

cd $CURRENT

# Make sure we don't have uncommitted changes.
if [[ -n $( git status -s --porcelain ) ]]; then
 	echo "Uncommitted changes found."
 	echo "Please deal with them and try again clean."
 	exit 1
fi

read -p "You are about to deploy a new build to the jetpack-built branch. Are you sure? [y/N]" -n 1 -r
if [[ $REPLY != "y" && $REPLY != "Y" ]]
then
    exit 1
fi
echo ""

echo "Building Jetpack"
npm run build
echo "Done"

# Prep a home to drop our new files in. Just make it in /tmp so we can start fresh each time.
rm -rf $JETPACK_BUILT
rm -rf $CURRENT_BACKUP

echo "Rsync'ing everything over from Git except for .git stuffs"
rsync -r --exclude='*.git*' $CURRENT/* $CURRENT_BACKUP
echo "Done!"

echo "Purging .po files"
rm -f $CURRENT_BACKUP/languages/*.po
echo "Done!"

echo "Purging paths included in .svnignore"
# check .svnignore
for file in $( cat "$CURRENT/.svnignore" 2>/dev/null ); do
	rm -rf $CURRENT_BACKUP/$file
done
echo "Done!"

echo "Pulling and checking out to latest build of jetpack-built"
git clone git@github.com:dereksmart/jetpack.git $JETPACK_BUILT
git checkout jetpack-built
echo "Done!"

echo "Rsync'ing everything over remote version"
rsync -r $CURRENT_BACKUP/* $JETPACK_BUILT
echo "Done!"

cd $JETPACK_BUILT

echo "Get the status"
git status
echo "done"

echo "Checkout and Add"
git checkout jetpack-built
git add .
echo "done"

echo "Get the status"
git status
echo "done"

echo "Finally, commit and push"
git commit -am 'New build'
git push
echo "Done!"
