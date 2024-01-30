import React from 'react';
import CardComponenteProps from './CardComponenteProps';
import CardComponenteItem from './CardComponenteItem'
import data from './data.json'; // Importa el archivo JSON de datos


const CardComponentes = ()=>{
    return(
        <CardComponenteProps >
            
            {data.map((item, index) => (
                <CardComponenteItem key={index} name={item.name} sensores={item.sensores} status={item.status} />
            ))}
        </CardComponenteProps>
    )
}

export default CardComponentes;