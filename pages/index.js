import { useState } from 'react';
import {
    Button,
    Toggle,
    Grid,
    Text,
    GeistProvider,
    CssBaseline
} from '@geist-ui/react'



function Home() {
    const [themeType, setThemeType] = useState('light')
    const switchThemes = () => {
        setThemeType(lastThemeType => (lastThemeType === 'dark' ? 'light' : 'dark'))
    }
    return (
        <GeistProvider theme={{ type: themeType }}>
            <CssBaseline />
            <html>

                <Grid.Container gap={2} justify="center">
                    <Grid xs={24}><Header /></Grid>
                    <Grid xs={12}><Toggle onClick={switchThemes} /></Grid>
                    <Grid xs={12}><Contador /></Grid>
                </Grid.Container>


            </html>
        </GeistProvider>
    )
}
function Header() {
    const text = 'Cabeçalho Teste'

    return <header>
        <Text h1>{text}</Text>
    </header>
}
function Contador() {
    const [contador, setContador] = useState(0)
    function adicionarContador() {
        setContador(contador + 1);
        console.log('adicionou')
    }
    return <div>
        <div>{contador}</div>
        <Button onClick={adicionarContador}>Click Me</Button>
    </div>
}

export default Home