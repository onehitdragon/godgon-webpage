import { cookies } from 'next/headers'
import Auth from './Auth';

function AuthWrap(){
    const cookieStore = cookies();
    const authCookie = cookieStore.get("auth_info")

    if(authCookie){
        return <Auth auth={JSON.parse(authCookie.value)}/>
    }

    return <></>
}

export default AuthWrap;