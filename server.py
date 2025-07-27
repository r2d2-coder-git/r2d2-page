from flask import Flask, jsonify
from flask_cors import CORS
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import time

app = Flask(__name__)
CORS(app)

# Lista de cursos Udemy por slug (último fragmento de la URL)
COURSES = [
    'aws-para-analistas-de-datos-total-en-7-dias',
    'analisis-de-datos-con-python-total-en-7-dias',
    'python-desde-cero-hasta-nivel-experto'
]

def get_course_data(course_slug):
    url = f'https://www.udemy.com/course/{course_slug}/'

    options = Options()
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')
    options.add_argument('--window-size=1920x1080')
    options.add_argument('--disable-dev-shm-usage')

    driver = webdriver.Chrome(options=options)

    try:
        driver.get(url)
        time.sleep(3)  # Esperar a que cargue completamente

        title = driver.find_element(By.TAG_NAME, 'h1').text


        try:
            # Alternativa por clase CSS
            rating = wait.until(EC.presence_of_element_located(
                (By.CSS_SELECTOR, 'span.star-rating-module--rating-number--2-qA2')
            )).text
        except:
            rating = None

        #num_reviews = driver.find_element(By.CSS_SELECTOR, '[data-purpose="rating"]').text
        #um_students = driver.find_element(By.CSS_SELECTOR, '[data-purpose="enrollment"]').text

        return {
            'title': title,
            'rating': rating,
            #'num_reviews': num_reviews,
            #'num_students': num_students,
            'url': url
        }
    except Exception as e:
        print(f"Error con {course_slug}: {e}")
        return {'title': course_slug, 'error': str(e)}
    finally:
        driver.quit()

@app.route('/api/udemy-ratings')
def get_all_courses():
    results = [get_course_data(slug) for slug in COURSES]
    return jsonify(results)

if __name__ == '__main__':
    app.run(port=4000)
