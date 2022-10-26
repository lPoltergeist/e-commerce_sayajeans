import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { app } from "../../config/Firebaseconfig";

type AuthContext = {
  signWithGoogle: () => void;
  Loged: boolean
  user: any;
  LogOut: () => void;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

  export const AuthProvider =({children}: any) => {
        const [user, setUser] = useState("")
        const provider = new GoogleAuthProvider()

        const Loged = user === "" ? false : true;

        useEffect(() => {
          const loadStoreAuth = () => {
            const sessionToken = sessionStorage.getItem("@AuthFirebase:token");
            const sessionUser = sessionStorage.getItem("@AuthFirebase:user");

            if( sessionToken && sessionUser) {
              setUser(sessionUser);
            }
          }
          loadStoreAuth()
        }, [])
    
        const signWithGoogle = () => {
            const auth = getAuth(app)
            signInWithPopup(auth, provider)
            .then((result) => {
              const credential = GoogleAuthProvider.credentialFromResult(result);
              if (credential === null) {
                toast.error(`error to login, try again.`, {
                  style: {
                    background: '#181818',
                    color: '#fff'
                  }
                })
              } else {
                const token = credential.accessToken
                const user = result.user;
                setUser(user as any)
                sessionStorage.setItem("@AuthFirebase:token", token as string);
                sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
                toast(`logged as ${user.displayName}`, {
                  style: {
                    background: '#181818',
                    color: '#fff'
                  }
                })
              }

            }).catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              const email = error.customData.email;
              const credential = GoogleAuthProvider.credentialFromError(error);
            });
            }

            const LogOut = () => {
              sessionStorage.clear()
              setUser("");
              toast('logged out', {
                style: {
                  background: '#181818',
                  color: '#fff'
                }
              })
            }

            return <AuthContext.Provider value={{LogOut, signWithGoogle, Loged, user}}> {children} </AuthContext.Provider>
}


