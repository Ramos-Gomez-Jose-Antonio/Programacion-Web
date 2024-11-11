import React, {useState} from 'react';

function App(){
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    //funciones para mostrar y ocultar el submenú al pasar el mouse
    const handleMouseEnter = () => setIsSubMenuOpen(true);
    const handleMouseLeave = () => setIsSubMenuOpen(false);

    //Estilos CSS
    const styles = {
        app: {
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f3f4f6',
            minHeight: '100vh',
            paddingTop: '60px', //Espacio para oque el contenido no este pegado
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        menuContainer: {
            position: 'flixed', //fijar el menú en la parte superior
            top: 0,
            left: 0,
            right:0,
            backgroundColor: '#333',
            color: '#fff',
            padding: '10px 20px',
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            zIndex: 1000,
        },
        menuItem: {
            position: 'relative',
            padding: '10px 20px',
            cursor: 'pointer',
        },
        subMenu: {
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: '#444',
            padding: '10px 0',
            borderRadius: '5px',
            display: isSubMenuOpen ? 'block' : 'none',
            width: '150px',
        },
        subMenuItem: {
            color: '#fff',
            padding: '10px',
            cursor: 'pointer',
            textAlign: 'center',
        },
    };

    return (
        <div style = {styles.app}>
            <nav style = {styles.menuContainer}>
                <div style = {styles.menuItem} onClick={()=> alert('Iniciar Sesion')}>
                    Inicio
                </div>
                <div style = {styles.menuItem} onClick={()=> alert('Sobre Nosotros')}>
                    Sobre Nosotros
                </div>
                <div
                    style = {styles.menuItem}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Quienes Somos
                    <div style={styles.subMenu}>
                        <div 
                            style={styles.subMenuItem}
                            onClick={() => alert('Blog')}
                        >
                            Blog
                        </div>
                        <div
                            style={styles.subMenuItem}
                            onClick={() => alert('Contacto')}
                        >
                            Contacto
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );

}
export default App;