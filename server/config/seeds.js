const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Grains" },
    { name: "Beans" },
    { name: "Spices & Herbs" },
    { name: "Flours" },
    { name: "Oils" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "White Rice",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: "rice.jpg",
      category: categories[0]._id,
      price: 9.99,
      quantity: 1,
    },
    {
      name: "Maize",
      description:
        "Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.",
      image: "maize.jpg",
      category: categories[0]._id,
      price: 3.99,
      quantity: 1,
    },
    {
      name: "Millet",
      category: categories[0]._id,
      description:
        "Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.",
      image: "millet.jpg",
      price: 5.99,
      quantity: 1,
    },
    {
      name: "Bulgur",
      category: categories[0]._id,
      description:
        "Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.",
      image: "Bulgur.jpg",
      price: 3.99,
      quantity: 1,
    },
    {
      name: "Black-eye Beans",
      category: categories[1]._id,
      description:
        "Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.",
      image: "black-eyed-beans.jpg",
      price: 2.99,
      quantity: 1,
    },
    {
      name: "Lentils",
      category: categories[1]._id,
      description:
        "Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.",
      image: "lentils.jpg",
      price: 3.99,
      quantity: 1,
    },
    {
      name: "Lima Beans",
      category: categories[1]._id,
      description:
        "In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.",
      image: "lima-beans.jpg",
      price: 2.99,
      quantity: 1,
    },
    {
      name: "Soy Beans",
      category: categories[1]._id,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.",
      image: "soy-beans.jpg",
      price: 9.99,
      quantity: 1,
    },
    {
      name: "Powdered Chicken Stock",
      category: categories[2]._id,
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "spinning-top.jpg",
      price: 6.99,
      quantity: 1,
    },
    {
      name: "Ginder Powder",
      category: categories[2]._id,
      description:
        "Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.",
      image: "plastic-horses.jpg",
      price: 2.99,
      quantity: 1,
    },
    {
      name: "Garlic Powder",
      category: categories[2]._id,
      description:
        "Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.",
      image: "teddy-bear.jpg",
      price: 7.99,
      quantity: 1,
    },
    {
      name: "Suya Spice",
      category: categories[2]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "alphabet-blocks.jpg",
      price: 9.99,
      quantity: 1,
    },
    {
      name: "Wheat Flour",
      category: categories[3]._id,
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "wheat-flour",
      price: 1.99,
      quantity: 1,
    },
    {
      name: "Corn Flour",
      category: categories[3]._id,
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "maize-flour",
      price: 1.99,
      quantity: 1,
    },
    {
      name: "Cassava Flour",
      category: categories[3]._id,
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "cassava-flour",
      price: 1.99,
      quantity: 1,
    },
    {
      name: "plantain Flour",
      category: categories[3]._id,
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "plantain-flour",
      price: 1.99,
      quantity: 1,
    },
    {
      name: "Olive Oil",
      category: categories[4]._id,
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "olive-oil",
      price: 4.99,
      quantity: 1,
    },
    {
      name: "Red Palm Oil",
      category: categories[4]._id,
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "red-palm-oil",
      price: 4.99,
      quantity: 1,
    },
    {
      name: "Coconut Oil",
      category: categories[4]._id,
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "coconut-oil",
      price: 4.99,
      quantity: 1,
    },
    {
      name: "Corn Oil",
      category: categories[4]._id,
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "corn-oil",
      price: 4.99,
      quantity: 1,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
