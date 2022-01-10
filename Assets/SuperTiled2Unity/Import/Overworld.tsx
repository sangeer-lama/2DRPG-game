<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.5" tiledversion="1.7.0" name="Overworld" tilewidth="16" tileheight="16" tilecount="1440" columns="40">
 <image source="Overworld.png" width="640" height="576"/>
 <wangsets>
  <wangset name="Corner" type="corner" tile="-1">
   <wangcolor name="" color="#ff0000" tile="-1" probability="1"/>
   <wangtile tileid="1201" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="1280" wangid="0,0,0,1,0,0,0,0"/>
   <wangtile tileid="1281" wangid="0,0,0,0,0,1,0,0"/>
   <wangtile tileid="1320" wangid="0,1,0,0,0,0,0,0"/>
   <wangtile tileid="1321" wangid="0,0,0,0,0,0,0,1"/>
  </wangset>
  <wangset name="Edge" type="edge" tile="-1">
   <wangcolor name="" color="#ff0000" tile="-1" probability="1"/>
   <wangtile tileid="0" wangid="0,0,1,0,0,0,1,0"/>
  </wangset>
  <wangset name="Mixed" type="mixed" tile="-1">
   <wangcolor name="" color="#ff0000" tile="-1" probability="1"/>
   <wangtile tileid="1201" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="1280" wangid="0,0,1,0,1,0,0,0"/>
   <wangtile tileid="1281" wangid="0,0,0,0,1,0,1,0"/>
   <wangtile tileid="1320" wangid="1,0,1,0,0,0,0,0"/>
   <wangtile tileid="1321" wangid="1,0,0,0,0,0,1,0"/>
  </wangset>
 </wangsets>
</tileset>
