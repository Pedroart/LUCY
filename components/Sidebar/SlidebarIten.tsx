import { constants } from 'buffer';
import Link from 'next/link';
import React, { ReactNode } from 'react';
interface Slidebaritem {
    name: string;
    activeCondition: boolean;
    children: ReactNode;
};

const Slidebaritem = ({name, activeCondition,children,}: Slidebaritem) => {
    return <Link
                  href={`/${name}`}
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    {activeCondition} ? {activeCondition} : "bg-graydark dark:bg-meta-4" 
                  }`}
                >
                  {children}
                  {name}
    </Link>;
};

export default Slidebaritem;
