import { useState } from 'react';
import {
    Button,
    Toggle,
    Grid,
    Text,
    Page,
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
                <Page size="small">
                    <Page.Header>
                        <Header />
                    </Page.Header>
                    <Page.Content>
                        <Grid.Container gap={2} justify="center">
                            <Grid xs={24}>'TESTE'</Grid>
                            <Grid xs={24}><Toggle onClick={switchThemes} /></Grid>
                            <Grid xs={24}><Contador /></Grid>
                        </Grid.Container>
                    </Page.Content>
                    <Page.Footer>
                        <h2>Footer</h2>
                    </Page.Footer>
                </Page>

            </GeistProvider>
    )
}
function Header() {
    const text = 'Single Page Example'

    return <header>
        <Text h1>{text}</Text>
    </header>
}
function Contador() {
    const [contador, setContador] = useState(0)
    function adicionarContador() {
        setContador(contador + 1);
    }
    return <div>
        <div>{contador}</div>
        <Button onClick={adicionarContador}>+</Button>
    </div>
}

export default Home