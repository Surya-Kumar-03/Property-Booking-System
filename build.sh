set -o errexit

echo "Removing poetry"
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python3 - --uninstall
echo "Installing poetry"
curl -sSL https://install.python-poetry.org | python3 -

echo "Updating poetry"
poetry self update

echo "Setting up python venv"
poetry install

echo "Collect Static"
python manage.py collectstatic --no-input
echo "Migrate DataBase"
python manage.py migrate

echo "Building Frontend"
cd frontend
npm i
npm prune
npm run build