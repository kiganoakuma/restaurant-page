from flask import Flask, jsonify, request
from flask_cors import CORS
from forms.reservations import reservations_bp

app = Flask(__name__)
CORS(app)

# Register the Blueprint
app.register_blueprint(reservations_bp)


def index():
    return "Welcome to the Reservation Backend"


if __name__ == "__main__":
    app.run(debug=True)
