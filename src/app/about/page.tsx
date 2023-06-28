export default async function About() {
  return (
    <main className="mt-2 max-w-screen-xl m-auto h-screen p-4 md:p-6 lg:p-8">
      <div className="justify-center text-center pb-16">
        <p className="text-justify pb-4">
          Bem-vindo à tela principal da nossa aplicação dedicada ao seu
          condomínio! A tela inicial da nossa aplicação apresenta uma interface
          simples e intuitiva, projetada para facilitar o acesso às principais
          funcionalidades disponíveis. Aqui, você encontrará as seguintes
          opções:
        </p>
        <ul className="text-justify pb-4">
          <li>
            Cadastrar Sugestão: Esta função permite que você compartilhe suas
            ideias, sugestões e feedbacks para melhorias no condomínio. Ao
            clicar nessa opção, você será redirecionado para uma tela onde
            poderá preencher os detalhes da sua sugestão, como título, descrição
            e categoria relacionada.
          </li>
          <li>
            Listar Sugestões: Ao selecionar essa opção, você terá acesso a uma
            lista de todas as sugestões cadastradas pelos moradores. Você poderá
            visualizar as sugestões, incluindo seus títulos, categorias e status
            de andamento. Além disso, poderá filtrar as sugestões por categoria
            para encontrar informações específicas.
          </li>
          <li>
            Cadastrar Usuário: Caso você seja um novo morador ou precise
            adicionar um novo usuário à aplicação, essa funcionalidade permitirá
            que você cadastre as informações necessárias, como nome, e-mail e
            senha. Dessa forma, você poderá ter acesso completo às
            funcionalidades da aplicação.
          </li>
          <li>
            Recuperar Categorias: Essa opção permite que você obtenha uma lista
            de todas as categorias disponíveis para as sugestões. As categorias
            podem incluir áreas como infraestrutura, segurança, lazer, entre
            outras. Essa lista será útil ao cadastrar uma nova sugestão, pois
            você poderá selecionar a categoria mais adequada para a sua ideia.
          </li>
          <li>
            Listar Categorias: Ao selecionar essa opção, você poderá visualizar
            todas as categorias disponíveis no condomínio. Isso é útil para
            conhecer as áreas temáticas abrangidas pelas sugestões e facilitar a
            navegação pelos registros.
          </li>
        </ul>
        <p className="text-justify">
          Nosso sistema foi projetado para simplificar a interação e promover a
          participação ativa dos moradores no desenvolvimento do condomínio.
          Acreditamos que a colaboração e o engajamento são fundamentais para um
          ambiente harmonioso e próspero. Aproveite todas as funcionalidades
          disponíveis e faça bom uso delas! Estamos aqui para tornar a sua
          experiência no condomínio ainda mais agradável.
        </p>
      </div>
    </main>
  );
}
