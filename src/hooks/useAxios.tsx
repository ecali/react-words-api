import axios from "axios"
import { useState } from "react";

export interface DictionaryResponse {
    meanings: [{
        definitions: DefinitionResponse[]
        partOfSpeech: string,
        synonyms: string[]
    }]
}

export interface DefinitionResponse {
    definition: string,
    example: string
}

export const UseAxios = () => {
    const [response, setResponse] = useState<DictionaryResponse>();
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(false);

    const operation = async(word: string) => {
        const options = {
            method: 'GET',
            url: 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word,
          };
        try {
            setLoading(true)
            setError(undefined);
            setResponse(undefined);
            const result = await axios.request(options);
            setResponse(result.data[0]);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { response, error, loading, operation };
}