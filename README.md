# TechAttire - Fashion the geek you!

![Screenshot (219)](https://user-images.githubusercontent.com/96344003/197389360-d4e19003-af95-43be-b724-a0bd1709b714.png)

# Participants

Github : @SahilSingh177 @annupriy 

Twitter : @SahilSingh10132 @annupriy_ 

Discord : Darklord616#3240 hope_#1612   


# About

<p> This is a full-fledged eCommerce admin cum storefront website built with Medusa.js, Next.js, Minio, Algolia and Stripe. 
This store is exclucively made for buying and selling tech apparles such as hoodies and Tshirts keeping in mind a user-friendly design and smooth experience</p>

### Storefront :-

The storefront webste includes the following features:
- Authentication & Authorization
- Contact Us page for getting approval to sell products
- Product Listing
- Product Search Functionality
- Product Categorization
- Account information pages
- Product detail
- Adaptive to different country's currency
- Shopping cart
- Discount and Gift Card feature
- Payment with Stripe

### Preview

https://user-images.githubusercontent.com/96344003/197387619-f81e0ee1-a33d-4bdb-bac9-a3daaab5f781.mp4


### Admin :-

The Admin panel includes the following features:
- Authentication & Authorization
- Adding products and categorizing them
- Customer Listing
- Order & Product Details
- Customizable Discount and Gift Cards
- Account information 
- Setting up different market's currency accordingly

### Preview

Admin Panel- [Tutorial on configuring your shop]


https://user-images.githubusercontent.com/96344003/197387352-8d77057b-ec5b-4ef0-9ece-41c4dcf6b03e.mp4


# Some Screenshots-

![Screenshot (204)](https://user-images.githubusercontent.com/96344003/197389397-ad25a641-b01c-4f02-9092-7206228bdf26.png)

![Screenshot (205)](https://user-images.githubusercontent.com/96344003/197389405-cdb0b83e-e8a7-44bb-b047-42b4e531b0b0.png)

![Screenshot (207)](https://user-images.githubusercontent.com/96344003/197389452-45c45f48-cd67-4d3d-8db2-d2e6286178eb.png)

![Screenshot (208)](https://user-images.githubusercontent.com/96344003/197389459-dcb8b946-5b53-460b-8f06-c35b2dee1b92.png)

![Screenshot (209)](https://user-images.githubusercontent.com/96344003/197389464-97c56906-69f8-4fe3-b7c1-aa92ba627344.png)

![Screenshot (210)](https://user-images.githubusercontent.com/96344003/197389468-1ad99191-25ec-4456-b9ed-f00e1fb1aa2f.png)

![Screenshot (211)](https://user-images.githubusercontent.com/96344003/197389472-548eaf93-b8e3-4671-96a5-d3371c44b2e1.png)

![Screenshot (212)](https://user-images.githubusercontent.com/96344003/197389474-951f0550-62b0-4966-a679-613988701440.png)

![Screenshot (213)](https://user-images.githubusercontent.com/96344003/197389478-380db1ee-83e2-4626-bef5-6bf950309d19.png)

![Screenshot (215)](https://user-images.githubusercontent.com/96344003/197389486-e98d0390-72b8-4c75-866d-8f2e6e40b370.png)

![Screenshot (217)](https://user-images.githubusercontent.com/96344003/197389494-ae2df304-94d7-4a90-97c8-9db5dce4cc23.png)

![Screenshot (218)](https://user-images.githubusercontent.com/96344003/197389780-f61cf9b4-3c36-4dda-a857-426c03b1c08e.png)


## Set up Project
### Prerequisites
Before you start with the tutorial make sure you have:

- [Node.js](https://nodejs.org/en/) v14 or greater installed on your machine
- [minIO](https://min.io/docs/minio/windows/index.html)
- [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) or [Linux](https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview)
- [Redis](https://redis.io/docs/getting-started/installation/install-redis-on-windows/)

### Install Project
1. Clone the repository:
```bash
git clone https://github.com/SahilSingh177/TechAttire.git
```
Now open TechAttire in you IDE such as VSCode,etc.

2. Change directory and install dependencies:
```bash
cd Techattire-store
yarn
cd ..
cd Techattire-admin
yarn 
cd ..
cd Techattire-storefront
npm i
```

3. Set up environment variables by refering to the documentation

4. Go to the Techattire folder 

start WSL or linux
```linux
sudo service redis-server start
```
start cmd

Go to the place where minio is located and run

```bash
.\minio.exe server folder_in_which_this_repo_is_saved:\  --console-address :9001 --address :9002 
```

4. Go to minIO page in `127.1.1:9001`:

![image](https://user-images.githubusercontent.com/69108782/194758258-2b41b42f-8b69-4ec3-96bf-30a022120064.png)

5. Login with username and password:
```bash
minioadmin
```
6. Go to manage -> make accsess policy public

7. Go to identitiy -> service account -> create service account -> make the accsess key and the secret key :

Add URL of minio, bucket_name, secret key and access key in the environment variables.

### Running Server

Open cmd and run the following commands to have your server up and running

```bash
cd Techattire-store
yarn start
```

Your server will now be running at port 9090

### Running Admin Panel

Open cmd and run the following commands to connect to the admin panel

```bash
cd Techattire-admin
yarn dev
```

### Running Storefront

Open cmd and run the following commands to see the storefront

```bash
cd Techattire-storefront
yarn dev
```

Finished 

see the storefront on :
```
http://localhost:8000/
```

see the admin on : 
```
http://localhost:7000/
```


## Resources
- [Medusa’s GitHub repository](https://github.com/medusajs/medusa)
- [Medusa Admin Panel](https://github.com/medusajs/admin)
- [Medusa Documentation](https://docs.medusajs.com/)
