import React from 'react';

interface CardComponenteProps {
    children: JSX.Element | JSX.Element[];
}

const CardComponente: React.FC<CardComponenteProps> = ({ children }: CardComponenteProps) => {
    return (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {children}
        </div>
    );
}

export default CardComponente;
