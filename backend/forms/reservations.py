from flask import Blueprint, jsonify, request

reservations_bp = Blueprint("reservations", __name__)


@reservations_bp.route("/reserve", methods=["POST"])
def reserve():
    data = request.json
    name = data.get("name")
    phone = data.get("phone")
    email = data.get("email")

    # Here you would normally save this data to a database
    # For now, we'll just return a success message
    return (
        jsonify({"message": f"Reservation for {name} at {phone} on {email} received."}),
        200,
    )
