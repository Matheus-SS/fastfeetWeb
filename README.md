# fastfeetWeb
backend e frontend web da aplicação fastfeet, que é uma aplicação sobre o controle de uma transportadora.

Você precisará ter instalado na sua máquina o Node.js, o Yarn e o Docker e o Postbird. Feitas as configurações, seguem os passos para executar o backend da aplicação:


Iremos instalar duas imagens de dois bancos de dados: Postgres, para armazenar nossas tabelas; e o Redis, que será utilizado para envio de e-mails com filas e o  editor de código será o VsCode. Abaixo, seguem os respectivos comandos para realizar o download:

Abra a sua pasta no vscode onde contem a pasta backend e frontend. Primeiro iremos resolver o backend.

Clique com o botão direito em cima da pasta backend e depois clique na opção Open in Terminal. Aparecerá um terminal na parte baixo referente a esta pasta.
copie e cole esse trecho abaixo no seu terminal e ele irá baixar a imagem do postgres:

docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

após o download digite docker ps -a e verá algumas informações sobre os containers do docker que estão no seu computador.

Agora para rodar o redis, copie e cole o código abaixo, se você não tiver nenhuma imagem do redis ele irá baixa-la. E após o download você pode digitar a mesma instrução acima e verá que o redis foi instalado e já está em execução

docker run --name redisfeet -p 6379:6379 -d -t redis:alpine

na pasta do backend ainda, crie um arquivo chamado .env e copie tudo do arquivo .env.example para ele, dentro dele está nossa credenciais usadas no desenvolvimento.

Dentro desse nosso arquivo .env terá algumas configurações para o envio de email. Se você quiser configurar, pode entrar no mailtrap.io, criar uma conta e digitar as configurações que estão lá para esse nossos campos de configuração de email

Depois de baixado e instalado o Postbird. Abra-o e aparecerá alguns campos para preenchermos.
Ficará assim:
 Host: localhost
 Port:5432
 Username:postgres
 Password:docker
 
 clique em Test Connection e se tudo deu certo aparecerá uma mensagem dizendo que a conexão foi um sucesso.
 Clique em connect e em Select database clique em Create Database e dê o nome de FastFeet.
 
Digite o comando yarn para fazer o dowload de todas as dependências necessárias para executar o projeto;

Execute yarn queue para que a fila de processamento de emails esteja funcionando.(caso você não tenha adicionado as configs de email em .env irá executar mas não enviará nenhum email)

Execute as migrations para que as tabelas sejam criadas:

yarn sequelize db:migrate
Se quiser, também pode gerar alguns dados, como usuário administrador e planos, executando os seeds:

yarn sequelize db:seed:all
Com isso, você terá um usuário administrador com email admin@fastfeet.com e a senha 123456 para fazer autenticação.

Após isso, execute yarn dev para que o backend esteja funcionando.
