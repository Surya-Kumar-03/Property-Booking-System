set -o errexit

echo "Setting up python venv"
pip install -r requirements.txt

echo "Collect Static"
python manage.py collectstatic --no-input
echo "Migrate DataBase"
python manage.py migrate

echo "Building Frontend"
cd frontend
npm i
npm prune
npm run build