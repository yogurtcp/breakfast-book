# 🍳 Breakfast Book · ספר ארוחות בוקר

A small, installable web app with healthy breakfast recipes in **English and Hebrew**.

**Live app:** https://yogurtcp.github.io/breakfast-book/

## What it does
- **Recipes:** 21 healthy breakfasts from seven cuisines, filterable by cuisine. Each comes with steps and a short "why it's healthy" note.
  - 🫒 **Mediterranean:** boiled eggs with Israeli salad, shakshuka, green shakshuka, ful, labneh, omelette, avocado and egg toast, scrambled eggs, overnight oats, oatmeal and a yogurt bowl
  - 🇯🇵 **Japanese:** grilled fish with miso soup and rice, natto rice, tamagoyaki
  - 🇨🇳 **Chinese:** millet congee, tomato and egg stir-fry
  - 🇰🇷 **Korean:** gyeran-jjim (steamed egg)
  - 🇮🇳 **Indian:** besan chilla (chickpea-flour pancakes)
  - 🇹🇷 **Turkish:** menemen, çılbır (poached eggs on garlic yogurt)
  - 🇻🇳 **Vietnamese:** quick phở gà (chicken noodle soup)
- **Favorites:** tap ♡ on any recipe, filter by ♥ Favorites, and use 🎲 *Pick one for me* if you can't decide.
- **At home:** tap the ingredients you have. Recipes then sort by what you can make now and show what's missing.
- **Shopping list:** add a recipe's missing ingredients with one tap, check items off, then move bought items into "At home". You can also share the list.
- **English ⇄ עברית** with a full right-to-left layout.
- **Installable (PWA)** and works offline after the first visit. Your data stays in your browser (localStorage).

## Install on your phone
- **Android / Chrome:** open the link, then tap **Install** (or menu → *Install app*).
- **iPhone:** open the link in Safari, then Share → *Add to Home Screen*.

## Editing recipes
All recipe and ingredient data lives in [`data.js`](data.js). Each recipe ingredient row is
`[ingredientId, quantityEN, quantityHE, optional?]`. When you change files, bump `VERSION` in `sw.js` and the `?v=` numbers in `index.html` so browsers and installed copies pick up the change.

## Photo credits
Photos are hotlinked from **Wikimedia Commons** under their free licenses (CC0 / CC BY / CC BY-SA). The author of each photo is credited on its recipe page and in the app's ⓘ About screen, with a link to the original file page:

| Recipe | Photo | Author |
|---|---|---|
| Boiled eggs & Israeli salad | [Commons file](https://commons.wikimedia.org/wiki/File:Liat_Portal_for_Foodie_Disorder_-_Healthy_Breakfast_with_Boiled_Egg,_Avocado,_and_Israeli_Salad.jpg) | Liat Portal |
| Shakshuka | [Commons file](https://commons.wikimedia.org/wiki/File:Shakshuka_(Unsplash).jpg) | Jarosław Ceborski (CC0) |
| Green shakshuka | [Commons file](https://commons.wikimedia.org/wiki/File:Liat_Portal_for_Foodie_Disorder_-_Green_shakshuka_with_spinach_and_egg.jpg) | Liat Portal |
| Ful medames | [Commons file](https://commons.wikimedia.org/wiki/File:Ful_medames.jpg) | Zachbe (CC BY-SA 3.0) |
| Labneh plate | [Commons file](https://commons.wikimedia.org/wiki/File:Labneh_(5196911587).jpg) | Leslie Seaton (CC BY 2.0) |
| Omelette | [Commons file](https://commons.wikimedia.org/wiki/File:Omelett.jpg) | Kobako (CC BY-SA 2.5) |
| Avocado & egg toast | [Commons file](https://commons.wikimedia.org/wiki/File:Avocado_toast_with_eggs_(28508171495).jpg) | Luca Nebuloni (CC BY 2.0) |
| Scrambled eggs on toast | [Commons file](https://commons.wikimedia.org/wiki/File:Liat_Portal_for_Foodie_Disorder_-_Scrambled_Eggs_on_Whole_Grain_Toast_with_Yellow_Tomatoes.jpg) | Liat Portal |
| Overnight oats | [Commons file](https://commons.wikimedia.org/wiki/File:Protein_overnight_oats.jpg) | Nervy8924 (CC BY-SA 4.0) |
| Warm oatmeal | [Commons file](https://commons.wikimedia.org/wiki/File:Cooked_oatmeal_in_bowl_(low_angle).jpg) | Bodhi Peace (CC BY-SA 4.0) |
| Yogurt bowl | [Commons file](https://commons.wikimedia.org/wiki/File:Yogurt_fruit_bowl.jpg) | Jumbocombo0811 (CC BY-SA 4.0) |
| Japanese breakfast | [Commons file](https://commons.wikimedia.org/wiki/File:Breakfast_at_Tamahan_Ryokan,_Kyoto.jpg) | MichaelMaggs (CC BY-SA 3.0) |
| Natto rice | [Commons file](https://commons.wikimedia.org/wiki/File:Natto_and_negi_on_rice.jpg) | Dllu (CC BY-SA 4.0) |
| Tamagoyaki | [Commons file](https://commons.wikimedia.org/wiki/File:Tamagoyaki_(3099935773).jpg) | Jessica Spengler (CC BY 2.0) |
| Millet congee | [Commons file](https://commons.wikimedia.org/wiki/File:A_BOWL_OF_FOXTAIL_MILLET_CONGEE.jpg) | Dinkun Chen (CC BY-SA 4.0) |
| Tomato & egg stir-fry | [Commons file](https://commons.wikimedia.org/wiki/File:Tomato_and_eggs.JPG) | Godofnanjing (CC BY-SA 3.0) |
| Gyeran-jjim | [Commons file](https://commons.wikimedia.org/wiki/File:Gyeran-jjim.jpg) | stu_spivack (CC BY-SA 2.0) |
| Besan chilla | [Commons file](https://commons.wikimedia.org/wiki/File:Besan_chilla.jpg) | Patelaahil (CC BY-SA 4.0) |
| Menemen | [Commons file](https://commons.wikimedia.org/wiki/File:Menemen_in_pan.jpg) | FakirNL (CC BY-SA 4.0) |
| Çılbır | [Commons file](https://commons.wikimedia.org/wiki/File:%C3%87%C4%B1lb%C4%B1r_-_Cafe_Rust_2025-03-31.jpg) | Andy Li (CC0) |
| Phở gà | [Commons file](https://commons.wikimedia.org/wiki/File:Vietnamese_Pho.jpg) | Nowforever (CC BY-SA 4.0) |

The nutrition notes are general information, not medical advice.
