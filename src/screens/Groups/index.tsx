import { useState } from 'react'
import { FlatList } from 'react-native'
import { Header } from '@components/Header'
import { Highligth } from '@components/hightlight'
import { GroupCard } from '@components/GroupCards'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/button'
import { Container } from './styles'

export function Groups() {
    const [groups, setGroups] = useState<string[]>([])

    return (
    <Container>
        <Header />
            <Highligth 
            title="Turmas" 
            subtitle="Jogue com a sua turma" 
            />
            <FlatList
                    data={groups}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
            <GroupCard 
            title={item} 
            />
        )}

        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (
            <ListEmpty 
            message="Vamos cadastrar a primeira Turma?" 
            />
        )}
        />

        <Button
        
        title='Adicionar Turma'
        />
    </Container>
    )
}
