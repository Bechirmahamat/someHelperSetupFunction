// have install the following package
// npm install expo-location
// 

import * as Location from 'expo-location'
// creating a state to control if access is granted or not
 const [hasPermission, setHasPermission] = useState(false)


useEffect(() => {
    const requestLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status === 'granted') {
        setHasPermission(false)
        return
      }
      let location = await Location.getCurrentPositionAsync()
      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords?.latitude!,
        longitude: location.coords?.longitude!,
      })

      // setting it up to a state management
      setUserLocation({
        latitude: location.coords?.latitude!,
        longitude: location.coords?.longitude!,
        address: `${address[0].name},${address[0].region}`,
      })
    }
    
    requestLocation()
  }, [])
