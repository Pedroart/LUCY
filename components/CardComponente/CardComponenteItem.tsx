import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface Sensor {
    Nombre: string;
    Lectura: number;
    Unidad: string;
}

interface CardComponenteItem{
    name: string;
    sensores: Sensor[];
    status: string;
}

const CardComponenteItem = ({ name,sensores,status  }:CardComponenteItem  )=>{
    return(
        <div className="flex flex-row flex-wrap rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div id="Estado" className="basis-1/12 flex">
            <div className={clsx('grow m-1',{
                'bg-danger': status == 'alarma',
                'bg-black': status == 'desconetado',
                'bg-meta-3': status == 'enlinea',
            })}></div>
        </div>
        <div className="basis-11/12 h-40">
        <div id="Nombre" className="border-b border-stroke py-2 px-2 dark:border-strokedark">
          <Link href="#">{name}</Link>
        </div>
        <div id="indicador" className="px-2 py-2">
          <ul>
            {sensores.map((sensor, index) => (
              <li key={index} className="flex flex-row justify-between">
                <p>{sensor.Nombre}</p>
                <p>{`${sensor.Lectura} ${sensor.Unidad}`}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    )
}

export default CardComponenteItem;