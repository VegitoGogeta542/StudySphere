from flask import Flask, request, jsonify
from flask_cors import CORS
from dbmodels import User, Class, Assignment, Schedule, session
import bcrypt
import uuid  # For generating unique user IDs
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity



app = Flask(__name__)

app.config['JWT_SECRET_KEY'] = '2d2b41cb07d678262105681df33c2a94450eca5d29c7eeb481253a31835eec87'  # Change this to a strong, random key
jwt = JWTManager(app)  # Add this line to initialize JWTManager

CORS(app, resources={r"/*": {
    "origins": "http://localhost:3000",
    "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    "allow_headers": ["Content-Type", "Authorization"]
}})

@app.route('/')
def home():
    return {"message": "Welcome to StudySphere Backend!"}

@app.route('/register', methods=['POST', 'OPTIONS'])
def register_user():
    if request.method == 'OPTIONS':
        return '', 200

    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')


    if not name or not email:
        return jsonify({'error': 'Name and email are required'}), 400

    # Check if the email is already registered
    if session.query(User).filter_by(email=email).first():
        return jsonify({'error': 'Email already registered'}), 400
    
    # Hash the password
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    # Create a new user with a random UUID as the ID
    new_user = User(
        id=str(uuid.uuid4()),  # Generate a random UUID
        name=name,
        email=email,
        password=hashed_password.decode('utf-8')
    )

    session.add(new_user)
    session.commit()

    

    return jsonify({'message': 'User registered successfully!', 'user_id': new_user.id}), 201

@app.route('/add_class', methods=['POST', 'OPTIONS'])
@jwt_required()
def add_class():
    if request.method == 'OPTIONS':
        return '', 200
    classesdata = request.json
    classname = classesdata.get('classname')
    if not classname:
        return jsonify({'error': 'Classname is required'}), 400

    current_user_id = get_jwt_identity()
    current_user = session.query(User).filter_by(id=current_user_id).first()

    if not current_user:
        return jsonify({'error': 'User not found'}), 404


    new_class = Class(
        classname=classname,
        user_id=current_user.id  # Associate the class with the logged-in user
    )
  
    session.add(new_class)
    session.commit()

    return jsonify({'message': 'Class added successfully!'}), 201

@app.route('/login', methods=['POST', 'OPTIONS'])
def login():
    if request.method == 'OPTIONS':
        return '', 200
    data = request.json
    email = data.get('email')
    password = data.get('password')
    name = data.get('name')

    user = session.query(User).filter_by(email=email).first()

    print("User Found:", user.email)  # Debugging line
    print("Stored Password:", user.password)  # Debugging line


    if user and bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
        access_token = create_access_token(identity={
            "id": user.id,
            "email": user.email,
            "name": user.name  # Add this if your user model has it
        })
        return jsonify({'token': access_token, 'message': 'Login successful!'}), 200

    return jsonify({'error': 'Invalid email or password'}), 401



if __name__ == '__main__':
    app.run(debug=True)