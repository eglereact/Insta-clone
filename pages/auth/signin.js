import { getProviders, signIn } from 'next-auth/react';
import Header from './../../components/Header';

function signin({ providers }) {
  return (
    <>
      <Header />

      <div className="-mt-8  flex min-h-screen flex-col items-center justify-center py-2 px-14 text-center">
        <img className="w-80" src="/images/insta.png" alt="" />
        <p className="font-xs italic">
          This is not a real app, it is built for educational purpuses.
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-blue-500 p-3 text-white"
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Server side render
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default signin;
