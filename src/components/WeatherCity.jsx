import { React } from "react"
import { 
    Background,
    DivCloud, 
    CloudCenter,
    CloudLeftBottom, 
    H1, 
} from "./ui/WeatherCity/WeatherCity"
import CloudIcon  from '@material-ui/icons/Cloud';



function WeatherCity() {
    return (
        <Background>
            <DivCloud>
                <CloudCenter>
                    <CloudIcon/>
                </CloudCenter>
                <CloudLeftBottom>
                    <CloudIcon/>
                </CloudLeftBottom>
                <H1> 15℃ </H1>
            </DivCloud>
        </Background>
    )
}

export { WeatherCity }