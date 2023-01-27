import '../styles/globals.css'
import  AuthProvider from '../src/AuthProvider';

function MyApp({Component, pageProps})
{
return(
    <AuthProvider>
        <Component {...pageProps} />
    </AuthProvider>
);

}

export default MyApp;