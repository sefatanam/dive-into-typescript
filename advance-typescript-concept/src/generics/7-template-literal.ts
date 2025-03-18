type Direction = 'up' | 'down' | 'left' | 'right'|'center' | 'top'
type Color = 'red' |'green' |'blue'
type Alignment = `${Direction}-${Color}`;

interface Box {
    name:string
}

type BoxAlignment = {[key in Alignment]?: Box}