import { useEffect } from 'react';

function Alert( {title ='', closeAlert = () => {}} ) {

    useEffect(() => {
        const timerId= setTimeout(closeAlert, 3000)

        return () => {
            clearTimeout(timerId)
        }
    }, [title]);

    return (
        <div id="toast-container">
            <div className='toast'>Продукт "{title}" добавлен в корзину</div>
        </div>
    )
}

export {Alert}