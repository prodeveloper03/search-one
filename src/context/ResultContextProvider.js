import React, {createContext,useContext,useState} from 'React';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
  const [result,setResult] = useState([]);
  const [isLoading , setIsLoading] = useContext(false);
  const [searchTerm, setSearchTerm] = useState('');


  const getResult = async (type) => {
      setIsLoading(true);

      const response   =  await fetch(`${baseurl}${type}`,{method: 'GET',
      headers: {
        'x-user-agent': 'desktop',
        'x-proxy-location': 'US',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': '03fde0013dmsh912d0b8ab0adb3ep12cbebjsn425418418f1c'
      }
    });
    const data  = await response.json();

    setResult(data);
    setIsLoading(false);
  }
  return (
    <ResultContext.Provider value = {{getResult,results,searchTerm , setSearchTerm , isLoading}}>
      {children}
    </ResultContext.Provider>
  )
}
export const useResultContext = () => useContext(ResultContext);