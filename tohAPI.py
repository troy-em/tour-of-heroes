from flask import jsonify, request, Flask
from flask_cors import CORS

app = Flask(__name__)
app.config["DEBUG"] = True
CORS(app)

all_heroes = [
  { 'id': 12, 'name': 'Dr. Nice' },
  { 'id': 13, 'name': 'Bombasto' },
  { 'id': 14, 'name': 'Celeritas' },
  { 'id': 15, 'name': 'Magneta' },
  { 'id': 16, 'name': 'RubberMan' },
  { 'id': 17, 'name': 'Dynama' },
  { 'id': 18, 'name': 'Dr. IQ' },
  { 'id': 19, 'name': 'Magma' },
  { 'id': 20, 'name': 'Tornado' }
]

@app.route('/heroes', methods=[ 'GET'])
def heroes():
    return jsonify(all_heroes)

@app.route('/detail/<id>', methods=['GET'])
def detail(id):
  for x in all_heroes:
    if int(x['id']) == int(id):
      return jsonify(x)
  return "Record not found", 400

@app.route('/update', methods=['POST'])
def update():
  data = request.data
  data_string = data.decode('UTF-8')
  data = eval(data_string)
  print("Posted Data" +str(data))

  for x in all_heroes:
    if x['id'] == data['id']:
      x['name'] = data['name']
      return x
  return "Not Found", 400

app.run()
