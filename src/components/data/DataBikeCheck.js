import imageBikeMountain from '../../images/bikeMountain.jpg'
import imageBikeKids from '../../images/bikeKids.jpg'
import imageBikeRoad from '../../images/bikeRoad.jpg'
import imageBikeAllTerrain from '../../images/bikeAllTerrain.jpg'

const dataBikeCheck = [
    {
        id: 'bikeMountain',
        title: 'Mountain Bike',
        value: '500',
        selectId: 'bikeMountainCount',
        text: 'Are you ready for some rough terrain?',
        image: imageBikeMountain
    },
    {
        id: 'bikeKids',
        title: 'Kids Bike',
        value: '200',
        selectId: 'bikeKidsCount',
        text: 'Kids will love this!',
        image: imageBikeKids
    },
    {
        id: 'bikeRoad',
        title: 'Road Bike',
        value: '1500',
        selectId: 'bikeRoadCount',
        text: 'Fast is not fast enough?',
        image: imageBikeRoad
    },
    {
        id: 'bikeAllTerrain',
        title: 'All-Terrain Bike',
        value: '2500',
        selectId: 'bikeATCount',
        text: 'Tested in every part of the Earth',
        image: imageBikeAllTerrain
    }
]

export default dataBikeCheck;