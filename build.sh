set -o errexit

poetry self update
poetry install

python manage.py collectstatic --no-input
python manage.py migrate
cd frontend
npm i
npm prune
npm run build