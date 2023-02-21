set -o errexit

echo "Building Frontend"
cd frontend
npm i
npm prune
npm run build


echo "Setting up python venv"
cd ..
pip install -r requirements.txt

echo "Collect Static"
python manage.py collectstatic --no-input
echo "Migrate DataBase"
python manage.py migrate
echo "setting up database"
python setup_db.py 