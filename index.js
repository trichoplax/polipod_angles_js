export const squareAngle = angle => {
    angle += Math.floor(Math.random() * 2)
    
    angle %= 360

    return angle
}

