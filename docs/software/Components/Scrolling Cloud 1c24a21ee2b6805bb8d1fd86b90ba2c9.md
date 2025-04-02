---
tags:
  - Shader Graph
  - Unity
---

# Scrolling Cloud

![Screen Recording 2025-03-26 at 4.32.10 PM.gif](Scrolling%20Cloud%201c24a21ee2b6805bb8d1fd86b90ba2c9/Screen_Recording_2025-03-26_at_4.32.10_PM.gif)

Making the scrolling effect with sprites with alpha channel.

The sprite renderer require a _MainTex, which is connected with its sprite field. However, if the main texture is set to a sprite with alpha cutouts, the paintable surface will only contain the parts that originally has color. 

![ComEd_Electrification_Clouds.png](Scrolling%20Cloud%201c24a21ee2b6805bb8d1fd86b90ba2c9/ComEd_Electrification_Clouds.png)

![Screenshot 2025-03-26 at 4.51.22 PM.png](Scrolling%20Cloud%201c24a21ee2b6805bb8d1fd86b90ba2c9/Screenshot_2025-03-26_at_4.51.22_PM.png)

So assign a fully opaque sprite (e.g. the default square sprite) as _MainTex and don’t use it (or not have this variable at all, but there will be a warning on sprite renderer, which is annoying), and use the desired sprite as usual. 

![Screenshot 2025-03-26 at 5.09.12 PM.png](Scrolling%20Cloud%201c24a21ee2b6805bb8d1fd86b90ba2c9/Screenshot_2025-03-26_at_5.09.12_PM.png)

Also, to use the color in sprite renderer, use the vertex color node instead of a general color node. And 

![Screenshot 2025-03-27 at 11.30.13 AM.png](Scrolling%20Cloud%201c24a21ee2b6805bb8d1fd86b90ba2c9/Screenshot_2025-03-27_at_11.30.13_AM.png)