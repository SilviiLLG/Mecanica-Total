from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/servicios')
def servicios():
    return render_template('servicios.html')

@app.route('/nosotros')
def nosotros():
    return render_template('nosotros.html')

@app.route('/galeria')
def galeria():
    return render_template('galeria.html')

@app.route('/contacto', methods=['GET', 'POST'])
def contacto():
    if request.method == 'POST':
        nombre = request.form['nombre']
        email = request.form['email']
        mensaje = request.form['mensaje']
        print(f"Mensaje recibido de {nombre} ({email}): {mensaje}")
    return render_template('contacto.html')

if __name__ == '__main__':
    app.run(debug=True)
