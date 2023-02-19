set -o errexit

echo "Installing the latest version of poetry..."
export POETRY_HOME="$(pwd)/.poetry"
curl -sSL https://install.python-poetry.org | python3 -
export PATH="$POETRY_HOME/bin:$PATH"
poetry --version

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