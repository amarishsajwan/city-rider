# CityRide - React Native Expo App

CityRide is a React Native application built using Expo that facilitates city travel by allowing users to offer and search for rides within a town. Users can add their ride details, including pickup and drop-off locations, and any tip or charge they want to mention. Other users can then search for these rides and connect with the ride creator to share the journey.

## Features

- **Add Rides**: Users can create a ride listing with pickup and drop-off locations, and optionally mention a tip or charge.
- **Search Rides**: Users can search for available rides based on their pickup and drop-off locations.
- **Connect with Ride Creators**: Users can select a ride from the search results and connect with the ride creator to share the journey.

## Technologies Used

- **React Native**: For building the mobile app.
- **Expo**: For ease of development and deployment.
- **Tailwind CSS**: For styling the components.
- **React Navigation**: For navigation between screens.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/cityride.git
   cd cityride
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Install Expo CLI if not already installed:
   ```sh
   npm install -g expo-cli
   ```

4. Start the Expo development server:
   ```sh
   expo start
   ```

## Configuration

1. **Firebase**:
   - Set up a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Create a Firestore database and obtain your Firebase configuration.
   - Add your Firebase configuration to the `firebaseConfig.js` file.

## Usage

1. **Add a Ride**:
   - Navigate to the "Add Ride" screen.
   - Enter the pickup and drop-off locations.
   - Optionally, mention a tip or charge.
   - Submit the ride details.

2. **Search for a Ride**:
   - Navigate to the "Search Rides" screen.
   - Enter the pickup and drop-off locations.
   - View the list of available rides.
   - Select a ride to view details and connect with the ride creator.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For any questions or inquiries, please contact amarish.sajwan@gmail.com.
