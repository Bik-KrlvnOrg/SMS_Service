# !/usr/bin

mkdir $Home/secrets

gpg --quiet --batch --yes --decrypt --passphrase="$ENV_SECRET" --output .env .env.gpg