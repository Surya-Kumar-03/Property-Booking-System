set -o errexit

poetry install

python manage.py collectstatic --no-input
python manage.py migrate
cd frontend
npm i
npm prune
npm run build