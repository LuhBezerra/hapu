interface IRegisterNewlleter {
  name: string;
  email: string;
}

export async function registerUserOnNewslleter(pars: IRegisterNewlleter) {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(pars),
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }),
  };

  const response = await fetch('https://api.jungledevs.com/api/v1/challenge-newsletter/ ', requestOptions);
  return response?.json();
}