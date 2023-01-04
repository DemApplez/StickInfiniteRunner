var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["platform","42dda32b-2c42-44e8-a6df-fd7758ec30d4","32bcef29-79aa-4b7d-81f9-52f67bd454a7","e41e6eda-e58e-4dbf-9a0e-c12ab4783815","34fd6d61-22da-40da-8914-f5e5e3dfe5de","83b1cdae-0762-4110-8173-b83e0647ece4","485e4ef6-2ada-42e8-9cb1-44d097cbf544","3bb6bfbe-0b8c-41e3-b8fa-16e9c737b9f6","08e5072a-3158-4c42-b29d-d65d57a47646","2c12fe0c-4377-4af9-871e-b6f922d3837e","dc7d4787-e38f-4705-b0db-7b74bb5a40a2","cadfe296-dc7f-405b-ae06-8ff777bd31e4","4f6c846c-8f58-433c-bbe0-b863e580521e","star","0434ebc9-b343-41d4-b02e-658196cdd650","ce41cd9c-b307-4539-bd9c-8a0bc6d2d080","0685c618-e5ac-42a9-8b3f-911ddc77faf5","4078f4cd-779c-4685-8ead-4c84e7c846cc","2aa8c2eb-e4c7-4933-b34a-9ee4dbafc09f","69cbf9f1-b29a-4d7e-aa56-13968a8e1129","93e43753-e296-4f9e-90a3-4ae12746f095","465879a4-4707-4464-863e-3a1345493ccb","68edc2d3-c196-43f2-95cb-1ca5b65a7e20","45f50615-ac83-4500-847d-fb66fdfe34b6","26199761-9682-4ad2-ab8c-387757ceddf4","362ed82e-3ae3-45c2-b647-8203d8cd33b7","0a1a612f-ae41-4275-8c82-b800cfae387e","66118117-2b95-43dc-add6-92910ed9e0d2","7f4410ab-6af0-417d-ba88-d8dd5d876517","cfa96954-892c-4ed3-a3d3-f7eb78330e87","b1ea5352-a968-4c43-8900-73ddc61cb2fd","6995ee4d-592f-4b09-8204-b9550fbdda56","a0cf17e8-00ef-417f-bff3-797ca4d7642c","8a45c3cf-003e-44c3-97a6-9f672444c919","12939683-f496-4fda-af6f-6e4f77fda3ea","bb1342f3-6b62-469c-9b23-1cd99a0476a6","6ea420cf-9680-4565-937b-d4b90dd4cf4f","e8681016-89d1-4f7a-9554-23bb00607a65","b14544ea-4e0b-44c0-bd55-d2eed5a5247f","de0792ef-6853-41b5-a352-780623cc4722","7f69b8cc-584f-4a57-9c68-9a825d593cb8","0a2faaea-15c7-420c-8f30-27634632be2b","2416ee0c-73c7-40ed-8e30-cc56c20f195d","2e342ec2-8996-44b1-a564-fbe6eec5ae80","a5434c3e-983c-4f5b-9b5d-464982193076","d720ddf1-068a-4fb9-b677-3b2ccbc661f5","5fc070d2-29b1-4d73-bdc1-965435b9902d","0bdac755-d86f-4ae8-ad31-925c7c0233d9","38c094ed-755b-4a67-96d1-e4921123bc61","d2e7ff23-c19b-4f08-acd5-3a8cd686a1b6","8beb2c62-cb84-4b40-9b86-ccc3f72e48b3","3305eafa-3e03-4ba6-9801-d4cb7326a95c","1bc5e245-78c1-4f68-a72b-4caf7572f491","13e402df-7006-44b3-bf8b-5cb9223f449f","46b9fce8-6a80-473d-be5c-10ece5a3a56b","600e70f2-0440-48ea-9814-0f9dd827f3a1","be959314-252d-42b5-944c-ae370909ee8a","a99ac7f3-cf9a-4bdc-815f-5fdba87d74be","a10ec294-5b2d-4f8c-84a6-6022f239a43c","c25de883-f846-4188-a613-99f6da217d59","c3f08f1f-02d1-4fa2-bc0a-6b22ef4df16a","7c48f823-c689-454b-a07d-686078cb630e","1a794790-c3c4-4068-98d4-408c7050fa5f","c70a1350-983a-4272-ab1b-794a8832ebbf","042cf864-3e85-4ab4-90b5-bd8a98a5cdc2","878c7357-298b-4a1f-bbfa-9add5d268e26","25643a1b-d3f3-4a78-be0c-e5b38c1abccf","7b3e3f85-4a50-4eb9-95e8-7875455d3f00","6f2c8a48-fb2f-458f-9b11-cf9d3352300b","ec05f808-74a4-4a64-a68e-87264d0efcc8","5930f055-43c0-4921-aefa-b62d80026dd9","82a60caf-279e-4e7f-b451-77217ce64f93","3fe9bfcd-fb36-4b0e-b293-b7c61fed4433","65570d17-06e7-4476-b418-6d632618274c","e1c61dbf-5f8d-470c-afd5-4aeb0a76056b","8703d521-f897-4490-b9b5-1b5461fcb3a3","308814dc-27e0-49ae-a33f-60d0d5f6d2f1","4f0a94c2-9310-49f3-8229-8b3a6cd38760","c79bfad7-2da4-47d7-982c-c8bf4d2c0eeb","02e5ad2c-cc6d-4328-b37f-da2ec87a8183","5564dad4-4950-43b7-a104-1dc724762aa5","1e51873b-ea76-4dd5-8d50-1a4d1aab3e60","f36405a2-ea66-4cbc-a3a6-ee6694e7bcda","6b5d96c0-d99c-4d4a-87d6-94c759d07121","b19bdce4-07b6-48f8-8e36-7d102d96ec6d","015e6dab-fb15-4bb4-b49c-44465ebe3502","10bdfe60-d640-4a9c-be55-b134cb92d543","2279bdc1-88e6-4113-a5ae-942cdfe22785","61e69a6f-3661-4045-bf7a-0935ae5c0954","927467df-d768-4ae2-bdae-1ecb13a7b952","889cf96b-d3f4-43ef-9d12-5f774a1ce518","44a92ce5-ab75-4ad4-8fbe-b1f42f512429","9e20efa0-35ae-48bd-ba34-451831b0d90f","58b571b5-77b4-4802-8017-8d34f55a1792","93d82663-cdff-47ce-a0a2-9e04701a9b02","d9dd8b54-17ac-425e-8278-dd7259c3be29","1815e1b1-d408-46ba-9077-3afe4723b61f","9a18a540-6acb-45c7-acbd-bef492c349ef","e7f128aa-7cdb-441f-ba04-2bdfdeb742a2","db548238-6bff-479f-8d10-868fad48c104","cbc4b8a2-7438-4f25-b3eb-1f12e39699f4","c00d55ff-3b8c-44ff-b15e-b1fb0456aa44","3da37e8e-8431-4e1b-8dc8-7e900dddd836","f8d10153-c11c-4f52-bf37-1d512cd1b378","64dd5238-45b5-4cac-b916-586a38a119ba","dd70a6ec-91e6-4132-9dd0-e2a84512be1e","1bc088ee-5058-4267-9bb7-794cddc84691","941b9d40-c051-44c5-baf0-eaa30a5e0acb","d2ed2b38-8313-4096-840d-df1749aa2515","573459a4-dcda-4c05-b596-43496618def7","cd62a665-d18d-4e9f-b61b-f85673f67dcf","d24e8b78-61d9-4c4a-9ccc-3aace7558358","cf9f03a6-6c78-4e10-a576-0ee43e43434b","1c637e5a-983c-4bbe-80ab-f4a683cca497","9c4b283f-b0fb-4c00-8127-428c99e75992","7d095ddd-f4d3-4ab1-8486-29c186d832a8","f410964f-35a8-4666-b172-0f6eb8ace94b"],"propsByKey":{"platform":{"name":"platformoriginal","sourceUrl":null,"frameSize":{"x":150,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"mtuqHX50cvRFjY2fwIUygVLZwD1x9ThO","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":20},"rootRelativePath":"assets/platform.png"},"42dda32b-2c42-44e8-a6df-fd7758ec30d4":{"name":"platform_2","sourceUrl":null,"frameSize":{"x":150,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"AVqnhDB0gD2vt4s21GqKxxAvWWO39rdA","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":20},"rootRelativePath":"assets/42dda32b-2c42-44e8-a6df-fd7758ec30d4.png"},"32bcef29-79aa-4b7d-81f9-52f67bd454a7":{"name":"platform_2_ice","sourceUrl":null,"frameSize":{"x":150,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"EEd8uIyhhsn0Gjlz4hzLK82Do1KB3cAb","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":20},"rootRelativePath":"assets/32bcef29-79aa-4b7d-81f9-52f67bd454a7.png"},"e41e6eda-e58e-4dbf-9a0e-c12ab4783815":{"name":"platform_1_ice","sourceUrl":null,"frameSize":{"x":150,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"wnT0tWgK3vPSRFsttNbagK.Fh8p6dUu7","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":20},"rootRelativePath":"assets/e41e6eda-e58e-4dbf-9a0e-c12ab4783815.png"},"34fd6d61-22da-40da-8914-f5e5e3dfe5de":{"name":"platform_3_ice","sourceUrl":null,"frameSize":{"x":150,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"RB4Y4NOq_89VrF6.8IFE.40g.DkwTLat","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":20},"rootRelativePath":"assets/34fd6d61-22da-40da-8914-f5e5e3dfe5de.png"},"83b1cdae-0762-4110-8173-b83e0647ece4":{"name":"platformoriginal_ice","sourceUrl":null,"frameSize":{"x":150,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"xZH0ijfG1OO7WkdTBotMbvKBZPW6tpNK","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":20},"rootRelativePath":"assets/83b1cdae-0762-4110-8173-b83e0647ece4.png"},"485e4ef6-2ada-42e8-9cb1-44d097cbf544":{"name":"platformicehitbox","sourceUrl":null,"frameSize":{"x":160,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"pqExq2Pgh4lL4USdCsLrAWZXAYG_xYi7","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":30},"rootRelativePath":"assets/485e4ef6-2ada-42e8-9cb1-44d097cbf544.png"},"3bb6bfbe-0b8c-41e3-b8fa-16e9c737b9f6":{"name":"platform","sourceUrl":null,"frameSize":{"x":150,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"3DtxAz.R_ONYxZ3d5YfWx2_vzO8YOit1","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":20},"rootRelativePath":"assets/3bb6bfbe-0b8c-41e3-b8fa-16e9c737b9f6.png"},"08e5072a-3158-4c42-b29d-d65d57a47646":{"name":"platform_3","sourceUrl":null,"frameSize":{"x":150,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"78K6HV3bU4oF.rR8b6LGVRUPaZRFkcoK","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":20},"rootRelativePath":"assets/08e5072a-3158-4c42-b29d-d65d57a47646.png"},"2c12fe0c-4377-4af9-871e-b6f922d3837e":{"name":"platform_4","sourceUrl":null,"frameSize":{"x":150,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"wdBS_kpyAm2le8tzsbppuBfqL41xt_.N","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":20},"rootRelativePath":"assets/2c12fe0c-4377-4af9-871e-b6f922d3837e.png"},"dc7d4787-e38f-4705-b0db-7b74bb5a40a2":{"name":"platform_5","sourceUrl":null,"frameSize":{"x":150,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"THiEif94Apcnf0ecF_tmPkF4Xd_eOaun","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":20},"rootRelativePath":"assets/dc7d4787-e38f-4705-b0db-7b74bb5a40a2.png"},"cadfe296-dc7f-405b-ae06-8ff777bd31e4":{"name":"platform_6","sourceUrl":null,"frameSize":{"x":150,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"SrTaiBcQU_m8fm5r_nE50pXtjJix8K_7","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":20},"rootRelativePath":"assets/cadfe296-dc7f-405b-ae06-8ff777bd31e4.png"},"4f6c846c-8f58-433c-bbe0-b863e580521e":{"name":"platform_7","sourceUrl":null,"frameSize":{"x":150,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"Kw7LxEwWXot3CS5ew1q_KPglDoEgDjzf","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":20},"rootRelativePath":"assets/4f6c846c-8f58-433c-bbe0-b863e580521e.png"},"star":{"name":"coin_spin","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":6,"looping":true,"frameDelay":5,"version":"5I9NX.WInrHLY0IdYfDTzyrHXT3Fhn5Z","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":180},"rootRelativePath":"assets/star.png"},"0434ebc9-b343-41d4-b02e-658196cdd650":{"name":"coin_still","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"XHk3L12D5bbyphRBmHfiSXt__IHc1aPa","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/0434ebc9-b343-41d4-b02e-658196cdd650.png"},"ce41cd9c-b307-4539-bd9c-8a0bc6d2d080":{"name":"coin_big","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":6,"looping":true,"frameDelay":4,"version":"aZlYOoU5gQuQ6GHn.gp3cScnkUet4e3c","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":180},"rootRelativePath":"assets/ce41cd9c-b307-4539-bd9c-8a0bc6d2d080.png"},"0685c618-e5ac-42a9-8b3f-911ddc77faf5":{"name":"coin_2","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":10,"looping":true,"frameDelay":3,"version":"zxEybFU9Wv9buSpke3dKWZTs6d1nFmCZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":240},"rootRelativePath":"assets/0685c618-e5ac-42a9-8b3f-911ddc77faf5.png"},"4078f4cd-779c-4685-8ead-4c84e7c846cc":{"name":"coin_2_still","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"5cypp15PCO2omF7mPkXl0joEtYiGMS7w","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/4078f4cd-779c-4685-8ead-4c84e7c846cc.png"},"2aa8c2eb-e4c7-4933-b34a-9ee4dbafc09f":{"name":"coin_2_big","sourceUrl":null,"frameSize":{"x":480,"y":480},"frameCount":10,"looping":true,"frameDelay":2,"version":"3JLDRs.tpS1msi0JZLpEYQj4QNhfuf2Z","loadedFromSource":true,"saved":true,"sourceSize":{"x":1440,"y":1920},"rootRelativePath":"assets/2aa8c2eb-e4c7-4933-b34a-9ee4dbafc09f.png"},"69cbf9f1-b29a-4d7e-aa56-13968a8e1129":{"name":"stick_still","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"0nwTa4_qbHIM1rB3vQ5dBxRBzTTPAXUP","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/69cbf9f1-b29a-4d7e-aa56-13968a8e1129.png"},"93e43753-e296-4f9e-90a3-4ae12746f095":{"name":"stick_still_re","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"C_Jx3eDFAmlPlrO.z6EwXRfKPBC4dn9b","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/93e43753-e296-4f9e-90a3-4ae12746f095.png"},"465879a4-4707-4464-863e-3a1345493ccb":{"name":"stick_run_re","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"R.INrZe1AVLkn4vrEK9VzbfmgvE3bNBG","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/465879a4-4707-4464-863e-3a1345493ccb.png"},"68edc2d3-c196-43f2-95cb-1ca5b65a7e20":{"name":"stick_run_re_copy_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":5,"looping":true,"frameDelay":12,"version":"XKzuaHdd3GTAaYcpm9Pi0xj85vucIf_p","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/68edc2d3-c196-43f2-95cb-1ca5b65a7e20.png"},"45f50615-ac83-4500-847d-fb66fdfe34b6":{"name":"stick_up_re","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"noEhHLt7F_VS3T9uB0ZUyuvpOz5kJF.N","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/45f50615-ac83-4500-847d-fb66fdfe34b6.png"},"26199761-9682-4ad2-ab8c-387757ceddf4":{"name":"stick_up","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"U4wbTwKLTu01VYj58l_Seth4ANlgKm2Y","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/26199761-9682-4ad2-ab8c-387757ceddf4.png"},"362ed82e-3ae3-45c2-b647-8203d8cd33b7":{"name":"stick_duck","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"n9z5KO0YkcxjLQlgUuTO.W_17bt790GZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/362ed82e-3ae3-45c2-b647-8203d8cd33b7.png"},"0a1a612f-ae41-4275-8c82-b800cfae387e":{"name":"stick_duck_re","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"TmLKLCXHeLia9sPQVZltc8gIqsBkWxth","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/0a1a612f-ae41-4275-8c82-b800cfae387e.png"},"66118117-2b95-43dc-add6-92910ed9e0d2":{"name":"stick_duck_re2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"3NHrkEDvRUG0UBBdlPE3Wx4UF0_NRVxq","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/66118117-2b95-43dc-add6-92910ed9e0d2.png"},"7f4410ab-6af0-417d-ba88-d8dd5d876517":{"name":"stick_game_over","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"fu_5_h_rnqxd1SnnHgcueq2dc1RaWQ74","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/7f4410ab-6af0-417d-ba88-d8dd5d876517.png"},"cfa96954-892c-4ed3-a3d3-f7eb78330e87":{"name":"stick_jump","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"OwN3JctyKrxLkQsH6Ajca.VqNeHsy0A4","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/cfa96954-892c-4ed3-a3d3-f7eb78330e87.png"},"b1ea5352-a968-4c43-8900-73ddc61cb2fd":{"name":"stick_jump_re","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"MN.ac8JU9rgSOfGtjf0zD9dOG0LwL4rP","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b1ea5352-a968-4c43-8900-73ddc61cb2fd.png"},"6995ee4d-592f-4b09-8204-b9550fbdda56":{"name":"stick_jump_re2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"xyFQTEi7cJRVz1Os.wzi8HhY0QaAcg3X","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/6995ee4d-592f-4b09-8204-b9550fbdda56.png"},"a0cf17e8-00ef-417f-bff3-797ca4d7642c":{"name":"stick_jump2","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"d_GuPIn_zrcdUxwVIChBVrrv2DTF.CQ.","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/a0cf17e8-00ef-417f-bff3-797ca4d7642c.png"},"8a45c3cf-003e-44c3-97a6-9f672444c919":{"name":"stick_run","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":12,"looping":true,"frameDelay":4,"version":"m1rwoIvlW9cLxuIIm4aqQDywDPVFq9w1","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":800},"rootRelativePath":"assets/8a45c3cf-003e-44c3-97a6-9f672444c919.png"},"12939683-f496-4fda-af6f-6e4f77fda3ea":{"name":"stick_run3","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":12,"looping":true,"frameDelay":3,"version":"fA4H6U.ixC3PSFw9xk2MXqqx4EIzNQ1Q","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":800},"rootRelativePath":"assets/12939683-f496-4fda-af6f-6e4f77fda3ea.png"},"bb1342f3-6b62-469c-9b23-1cd99a0476a6":{"name":"stick_run4","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":12,"looping":true,"frameDelay":3,"version":"Xn9INkUmFR0zgWBAZztRkadjtJsPTKy0","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":800},"rootRelativePath":"assets/bb1342f3-6b62-469c-9b23-1cd99a0476a6.png"},"6ea420cf-9680-4565-937b-d4b90dd4cf4f":{"name":"stick_run2","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":12,"looping":true,"frameDelay":5,"version":"msFYyrx_6XHd6eQFhXqADgVtPq1HdEFV","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":800},"rootRelativePath":"assets/6ea420cf-9680-4565-937b-d4b90dd4cf4f.png"},"e8681016-89d1-4f7a-9554-23bb00607a65":{"name":"stick_look","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":21,"looping":true,"frameDelay":3,"version":"I1A_Jul6aPz5o99V8aY3cGHDk.m012Wh","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":500},"rootRelativePath":"assets/e8681016-89d1-4f7a-9554-23bb00607a65.png"},"b14544ea-4e0b-44c0-bd55-d2eed5a5247f":{"name":"stick_look_still","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"zkEqJy5IbKyzKzNZ6rK.svb1oovOUG_n","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b14544ea-4e0b-44c0-bd55-d2eed5a5247f.png"},"de0792ef-6853-41b5-a352-780623cc4722":{"name":"stick_hurt","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"5Me3Y5RT1_Je_IRwqYFeG0YQLHq1hCrH","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/de0792ef-6853-41b5-a352-780623cc4722.png"},"7f69b8cc-584f-4a57-9c68-9a825d593cb8":{"name":"cloud_1","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"C8pz1Z03n2brKE8TnEZ2rEYR30JyTYfC","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/7f69b8cc-584f-4a57-9c68-9a825d593cb8.png"},"0a2faaea-15c7-420c-8f30-27634632be2b":{"name":"Stick_Gameover","sourceUrl":null,"frameSize":{"x":236,"y":104},"frameCount":15,"looping":true,"frameDelay":3,"version":"W.Tk2.qFbizooCsdMlOMTZElKc3L783P","loadedFromSource":true,"saved":true,"sourceSize":{"x":708,"y":520},"rootRelativePath":"assets/0a2faaea-15c7-420c-8f30-27634632be2b.png"},"2416ee0c-73c7-40ed-8e30-cc56c20f195d":{"name":"restart_text","sourceUrl":null,"frameSize":{"x":130,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"fQx0pwLdxlwnxKqYpkyeJQcQP2j9MCwm","loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":22},"rootRelativePath":"assets/2416ee0c-73c7-40ed-8e30-cc56c20f195d.png"},"2e342ec2-8996-44b1-a564-fbe6eec5ae80":{"name":"restart_text_hover","sourceUrl":null,"frameSize":{"x":142,"y":34},"frameCount":1,"looping":true,"frameDelay":12,"version":"KCajNxNjlse0f4TvpRV0E8s._S.iliEt","loadedFromSource":true,"saved":true,"sourceSize":{"x":142,"y":34},"rootRelativePath":"assets/2e342ec2-8996-44b1-a564-fbe6eec5ae80.png"},"a5434c3e-983c-4f5b-9b5d-464982193076":{"name":"store_text","sourceUrl":null,"frameSize":{"x":90,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"W58uFByXZNIZP_64eVvY2F0ZOQg_NMja","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":22},"rootRelativePath":"assets/a5434c3e-983c-4f5b-9b5d-464982193076.png"},"d720ddf1-068a-4fb9-b677-3b2ccbc661f5":{"name":"control_text","sourceUrl":null,"frameSize":{"x":148,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"0yZV0oBu6V1C2lqLR5t8PYQd3NgNy_XL","loadedFromSource":true,"saved":true,"sourceSize":{"x":148,"y":22},"rootRelativePath":"assets/d720ddf1-068a-4fb9-b677-3b2ccbc661f5.png"},"5fc070d2-29b1-4d73-bdc1-965435b9902d":{"name":"control_text_hover","sourceUrl":null,"frameSize":{"x":160,"y":34},"frameCount":1,"looping":true,"frameDelay":12,"version":"fZr_9EIma56nH0.uCyDE.bZs8OERvckp","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":34},"rootRelativePath":"assets/5fc070d2-29b1-4d73-bdc1-965435b9902d.png"},"0bdac755-d86f-4ae8-ad31-925c7c0233d9":{"name":"start_text","sourceUrl":null,"frameSize":{"x":94,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"IuGqC8kRvO6s7_FudSFlMaN.OD0tPz5m","loadedFromSource":true,"saved":true,"sourceSize":{"x":94,"y":22},"rootRelativePath":"assets/0bdac755-d86f-4ae8-ad31-925c7c0233d9.png"},"38c094ed-755b-4a67-96d1-e4921123bc61":{"name":"start_text_hover","sourceUrl":null,"frameSize":{"x":106,"y":34},"frameCount":1,"looping":true,"frameDelay":12,"version":"ITlrObR8r1kR5UepacAQg_SzlH.o.FJA","loadedFromSource":true,"saved":true,"sourceSize":{"x":106,"y":34},"rootRelativePath":"assets/38c094ed-755b-4a67-96d1-e4921123bc61.png"},"d2e7ff23-c19b-4f08-acd5-3a8cd686a1b6":{"name":"pause_title_text","sourceUrl":null,"frameSize":{"x":160,"y":66},"frameCount":1,"looping":true,"frameDelay":12,"version":"2mr5DHWrcPdQnJB_QYlzHWzyiN6s7huV","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":66},"rootRelativePath":"assets/d2e7ff23-c19b-4f08-acd5-3a8cd686a1b6.png"},"8beb2c62-cb84-4b40-9b86-ccc3f72e48b3":{"name":"back_text","sourceUrl":null,"frameSize":{"x":70,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"GdKXO8SJCAP0qktepH8M0bUtZZ4yOoYU","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":22},"rootRelativePath":"assets/8beb2c62-cb84-4b40-9b86-ccc3f72e48b3.png"},"3305eafa-3e03-4ba6-9801-d4cb7326a95c":{"name":"textGameOver_1","sourceUrl":null,"frameSize":{"x":320,"y":44},"frameCount":1,"looping":true,"frameDelay":12,"version":"mXspEBGel2B_hWgJS1_C0Bre08u_9ZvA","loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":44},"rootRelativePath":"assets/3305eafa-3e03-4ba6-9801-d4cb7326a95c.png"},"1bc5e245-78c1-4f68-a72b-4caf7572f491":{"name":"menu_text","sourceUrl":null,"frameSize":{"x":78,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"CU6eN.y9CmbDzjnhLUp_qWpy1bOeLzil","loadedFromSource":true,"saved":true,"sourceSize":{"x":78,"y":22},"rootRelativePath":"assets/1bc5e245-78c1-4f68-a72b-4caf7572f491.png"},"13e402df-7006-44b3-bf8b-5cb9223f449f":{"name":"title_text","sourceUrl":null,"frameSize":{"x":198,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"WbAxP7MBegZQIXByBtIlQBe4rl4WtLkW","loadedFromSource":true,"saved":true,"sourceSize":{"x":198,"y":50},"rootRelativePath":"assets/13e402df-7006-44b3-bf8b-5cb9223f449f.png"},"46b9fce8-6a80-473d-be5c-10ece5a3a56b":{"name":"title_character","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"g4zJmd5AYZ_UFRLfUkn9rCciQz1XDFUb","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/46b9fce8-6a80-473d-be5c-10ece5a3a56b.png"},"600e70f2-0440-48ea-9814-0f9dd827f3a1":{"name":"title_picture_ob","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"NiBXh77po_4RVQ67Oab5k8_eC4DuvRk_","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/600e70f2-0440-48ea-9814-0f9dd827f3a1.png"},"be959314-252d-42b5-944c-ae370909ee8a":{"name":"store_item_1_notbought","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"N4qjLIERKbcEQV5HvNiLbyRWuNaDMYwh","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/be959314-252d-42b5-944c-ae370909ee8a.png"},"a99ac7f3-cf9a-4bdc-815f-5fdba87d74be":{"name":"store_item_2_notbought","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"cqxOXKQVEzeYYtgm1g53pJWQinMPSUAA","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a99ac7f3-cf9a-4bdc-815f-5fdba87d74be.png"},"a10ec294-5b2d-4f8c-84a6-6022f239a43c":{"name":"store_item_1_bought","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"77XuL5Soqf8pntEtN8bxZb92M5HpdWuo","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a10ec294-5b2d-4f8c-84a6-6022f239a43c.png"},"c25de883-f846-4188-a613-99f6da217d59":{"name":"enemy_still","sourceUrl":null,"frameSize":{"x":56,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"RLwWwYJuXdTmNteqCCur7TjClNOdoAwC","loadedFromSource":true,"saved":true,"sourceSize":{"x":56,"y":60},"rootRelativePath":"assets/c25de883-f846-4188-a613-99f6da217d59.png"},"c3f08f1f-02d1-4fa2-bc0a-6b22ef4df16a":{"name":"enemy_jump","sourceUrl":null,"frameSize":{"x":56,"y":60},"frameCount":5,"looping":true,"frameDelay":10,"version":"d4jzOTyTJab44OXxHqTytIW6NrwtPLK8","loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":180},"rootRelativePath":"assets/c3f08f1f-02d1-4fa2-bc0a-6b22ef4df16a.png"},"7c48f823-c689-454b-a07d-686078cb630e":{"name":"control_layout","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"V5gCXM6ciNCRaztKJfUPxbPEYn2IQCVs","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/7c48f823-c689-454b-a07d-686078cb630e.png"},"1a794790-c3c4-4068-98d4-408c7050fa5f":{"name":"BackgroundAnimationold","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":18,"looping":true,"frameDelay":4,"version":"i92j7sclSEQRrTAGOaf448brWz4g7e58","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":1500},"rootRelativePath":"assets/1a794790-c3c4-4068-98d4-408c7050fa5f.png"},"c70a1350-983a-4272-ab1b-794a8832ebbf":{"name":"BackgroundAnimation","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":18,"looping":true,"frameDelay":4,"version":"n3WW8ej.NtgcG5OuXR0JMVYIiPTq496U","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":1500},"rootRelativePath":"assets/c70a1350-983a-4272-ab1b-794a8832ebbf.png"},"042cf864-3e85-4ab4-90b5-bd8a98a5cdc2":{"name":"BackgroundAnimation_copy_1","sourceUrl":null,"frameSize":{"x":600,"y":600},"frameCount":18,"looping":true,"frameDelay":4,"version":"gOl7nlDmHZ8xYUdDsdGo6oE9YYcGUVkT","loadedFromSource":true,"saved":true,"sourceSize":{"x":2400,"y":3000},"rootRelativePath":"assets/042cf864-3e85-4ab4-90b5-bd8a98a5cdc2.png"},"878c7357-298b-4a1f-bbfa-9add5d268e26":{"name":"BackgroundAnimation_sm","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":18,"looping":true,"frameDelay":4,"version":"XgIrQnXeTc5Js6jXXPHlz0QLSL6n6zqU","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":1000},"rootRelativePath":"assets/878c7357-298b-4a1f-bbfa-9add5d268e26.png"},"25643a1b-d3f3-4a78-be0c-e5b38c1abccf":{"name":"Sun","sourceUrl":null,"frameSize":{"x":74,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"3FQmS6kxuisWiB0bEKLjG.od6LYHVFl0","loadedFromSource":true,"saved":true,"sourceSize":{"x":74,"y":74},"rootRelativePath":"assets/25643a1b-d3f3-4a78-be0c-e5b38c1abccf.png"},"7b3e3f85-4a50-4eb9-95e8-7875455d3f00":{"name":"Sunset","sourceUrl":null,"frameSize":{"x":74,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"acu9MlYN.YmcCGgwgKmru5rT2_bwDzWL","loadedFromSource":true,"saved":true,"sourceSize":{"x":74,"y":74},"rootRelativePath":"assets/7b3e3f85-4a50-4eb9-95e8-7875455d3f00.png"},"6f2c8a48-fb2f-458f-9b11-cf9d3352300b":{"name":"moon","sourceUrl":null,"frameSize":{"x":74,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"n9fitMjL0AxYGtDImeYJ7M6cbZsOD1rT","loadedFromSource":true,"saved":true,"sourceSize":{"x":74,"y":74},"rootRelativePath":"assets/6f2c8a48-fb2f-458f-9b11-cf9d3352300b.png"},"ec05f808-74a4-4a64-a68e-87264d0efcc8":{"name":"onceinabluemoon","sourceUrl":null,"frameSize":{"x":74,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"JZEZpyuaY_FCMhUK6gGWVFkMFYpjsDvg","loadedFromSource":true,"saved":true,"sourceSize":{"x":74,"y":74},"rootRelativePath":"assets/ec05f808-74a4-4a64-a68e-87264d0efcc8.png"},"5930f055-43c0-4921-aefa-b62d80026dd9":{"name":"Achievement1","sourceUrl":null,"frameSize":{"x":102,"y":90},"frameCount":1,"looping":true,"frameDelay":12,"version":"iMtYM8bU2fQgtJrKY3H3XtOyDGRdsgHF","loadedFromSource":true,"saved":true,"sourceSize":{"x":102,"y":90},"rootRelativePath":"assets/5930f055-43c0-4921-aefa-b62d80026dd9.png"},"82a60caf-279e-4e7f-b451-77217ce64f93":{"name":"Achievement1_complete","sourceUrl":null,"frameSize":{"x":102,"y":90},"frameCount":1,"looping":true,"frameDelay":12,"version":"smLEqHrPtClpgdUbqxt5HGRS_xLqz5uP","loadedFromSource":true,"saved":true,"sourceSize":{"x":102,"y":90},"rootRelativePath":"assets/82a60caf-279e-4e7f-b451-77217ce64f93.png"},"3fe9bfcd-fb36-4b0e-b293-b7c61fed4433":{"name":"Achievement2","sourceUrl":null,"frameSize":{"x":102,"y":90},"frameCount":1,"looping":true,"frameDelay":12,"version":"37BsO_RnUH6O2omgNYSVi3RY1boZvjtT","loadedFromSource":true,"saved":true,"sourceSize":{"x":102,"y":90},"rootRelativePath":"assets/3fe9bfcd-fb36-4b0e-b293-b7c61fed4433.png"},"65570d17-06e7-4476-b418-6d632618274c":{"name":"Achievement2_complete","sourceUrl":null,"frameSize":{"x":102,"y":90},"frameCount":1,"looping":true,"frameDelay":12,"version":"h08gTvuiWnnMuYJhZUkLYRdEbQcbbINt","loadedFromSource":true,"saved":true,"sourceSize":{"x":102,"y":90},"rootRelativePath":"assets/65570d17-06e7-4476-b418-6d632618274c.png"},"e1c61dbf-5f8d-470c-afd5-4aeb0a76056b":{"name":"Achievement3","sourceUrl":null,"frameSize":{"x":102,"y":90},"frameCount":1,"looping":true,"frameDelay":12,"version":"nWoWs61W1CHEvfHQ3.R2dI3KZ1n.yy5g","loadedFromSource":true,"saved":true,"sourceSize":{"x":102,"y":90},"rootRelativePath":"assets/e1c61dbf-5f8d-470c-afd5-4aeb0a76056b.png"},"8703d521-f897-4490-b9b5-1b5461fcb3a3":{"name":"Achievement3_complete","sourceUrl":null,"frameSize":{"x":102,"y":90},"frameCount":1,"looping":true,"frameDelay":12,"version":"kwy6zBJPg6kMxzMFQ.oYyRXegwoek65V","loadedFromSource":true,"saved":true,"sourceSize":{"x":102,"y":90},"rootRelativePath":"assets/8703d521-f897-4490-b9b5-1b5461fcb3a3.png"},"308814dc-27e0-49ae-a33f-60d0d5f6d2f1":{"name":"Achievement4","sourceUrl":null,"frameSize":{"x":102,"y":90},"frameCount":6,"looping":true,"frameDelay":3,"version":"Tb6H7v1s8p5eVE4Fg_JPyo7BiU8h1pZ7","loadedFromSource":true,"saved":true,"sourceSize":{"x":204,"y":270},"rootRelativePath":"assets/308814dc-27e0-49ae-a33f-60d0d5f6d2f1.png"},"4f0a94c2-9310-49f3-8229-8b3a6cd38760":{"name":"backgroundtest","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":52,"looping":true,"frameDelay":1,"version":"j.HuTe3HX3pyVTsLRJ4dcgwervTE2C77","loadedFromSource":true,"saved":true,"sourceSize":{"x":700,"y":800},"rootRelativePath":"assets/4f0a94c2-9310-49f3-8229-8b3a6cd38760.png"},"c79bfad7-2da4-47d7-982c-c8bf4d2c0eeb":{"name":"background_achievements","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":52,"looping":true,"frameDelay":1,"version":"nyuWli_IybeB3IhadAF339MKdBGB9uD1","loadedFromSource":true,"saved":true,"sourceSize":{"x":2800,"y":3200},"rootRelativePath":"assets/c79bfad7-2da4-47d7-982c-c8bf4d2c0eeb.png"},"02e5ad2c-cc6d-4328-b37f-da2ec87a8183":{"name":"gridtest","sourceUrl":null,"frameSize":{"x":800,"y":800},"frameCount":1,"looping":true,"frameDelay":1,"version":"Hb0qCZI0ysTsoo1pchWLPOXHs3HDqQoA","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/02e5ad2c-cc6d-4328-b37f-da2ec87a8183.png"},"5564dad4-4950-43b7-a104-1dc724762aa5":{"name":"gridtest_copy_1","sourceUrl":null,"frameSize":{"x":800,"y":800},"frameCount":2,"looping":true,"frameDelay":1,"version":"75ozWPiVegcHQaFJbshRW4dfhrfd6JOb","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":1600},"rootRelativePath":"assets/5564dad4-4950-43b7-a104-1dc724762aa5.png"},"1e51873b-ea76-4dd5-8d50-1a4d1aab3e60":{"name":"water","sourceUrl":null,"frameSize":{"x":800,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"Cp9k8YBZ4vudLBqp7.Kb59ef5MZ1ou13","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":400},"rootRelativePath":"assets/1e51873b-ea76-4dd5-8d50-1a4d1aab3e60.png"},"f36405a2-ea66-4cbc-a3a6-ee6694e7bcda":{"name":"logo_startup_current","sourceUrl":null,"frameSize":{"x":100,"y":130},"frameCount":1,"looping":true,"frameDelay":12,"version":"Wk5DUxGbNNmRbAwpR4fDnLM05puGFxSs","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":130},"rootRelativePath":"assets/f36405a2-ea66-4cbc-a3a6-ee6694e7bcda.png"},"6b5d96c0-d99c-4d4a-87d6-94c759d07121":{"name":"logo_startup","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"uuqAYMZcGeo6fvmFhaMOw8IzIzzkT0Vl","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/6b5d96c0-d99c-4d4a-87d6-94c759d07121.png"},"b19bdce4-07b6-48f8-8e36-7d102d96ec6d":{"name":"runs_on_pe2","sourceUrl":null,"frameSize":{"x":200,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"jVSXuqtBly7r31wgnGuzP7h9C44Dqked","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":100},"rootRelativePath":"assets/b19bdce4-07b6-48f8-8e36-7d102d96ec6d.png"},"015e6dab-fb15-4bb4-b49c-44465ebe3502":{"name":"save_icon","sourceUrl":null,"frameSize":{"x":237,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"_WnwVX7z10tmu64GvukHGY8bsqUiQbsH","loadedFromSource":true,"saved":true,"sourceSize":{"x":237,"y":100},"rootRelativePath":"assets/015e6dab-fb15-4bb4-b49c-44465ebe3502.png"},"10bdfe60-d640-4a9c-be55-b134cb92d543":{"name":"save_icon_cloud","sourceUrl":null,"frameSize":{"x":237,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"LqPS5SE3QyK3dPH.NWDd27R3EBQIihUE","loadedFromSource":true,"saved":true,"sourceSize":{"x":237,"y":100},"rootRelativePath":"assets/10bdfe60-d640-4a9c-be55-b134cb92d543.png"},"2279bdc1-88e6-4113-a5ae-942cdfe22785":{"name":"load_icon_cloud","sourceUrl":null,"frameSize":{"x":237,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"I_xaKjQKyEQJtkO_VE0UBAhHeqMpq8uF","loadedFromSource":true,"saved":true,"sourceSize":{"x":237,"y":100},"rootRelativePath":"assets/2279bdc1-88e6-4113-a5ae-942cdfe22785.png"},"61e69a6f-3661-4045-bf7a-0935ae5c0954":{"name":"load_icon","sourceUrl":null,"frameSize":{"x":237,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"mfzG8_C5Kci3MDnIvl7VZH_gkizDWeDa","loadedFromSource":true,"saved":true,"sourceSize":{"x":237,"y":100},"rootRelativePath":"assets/61e69a6f-3661-4045-bf7a-0935ae5c0954.png"},"927467df-d768-4ae2-bdae-1ecb13a7b952":{"name":"fadeaway_test","sourceUrl":null,"frameSize":{"x":400,"y":800},"frameCount":1,"looping":true,"frameDelay":12,"version":"5VMAj8LCfAk0ygppUheHzgOSkbSL15Zr","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":800},"rootRelativePath":"assets/927467df-d768-4ae2-bdae-1ecb13a7b952.png"},"889cf96b-d3f4-43ef-9d12-5f774a1ce518":{"name":"stick_drown","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":4,"looping":true,"frameDelay":5,"version":"HE8c38Hq9W_jLXz3KlT3DACCvtsUMTdw","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/889cf96b-d3f4-43ef-9d12-5f774a1ce518.png"},"44a92ce5-ab75-4ad4-8fbe-b1f42f512429":{"name":"options_text","sourceUrl":null,"frameSize":{"x":130,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"ttvFYkX7k2kRFPiKu22Uy0hope4eLV2.","loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":22},"rootRelativePath":"assets/44a92ce5-ab75-4ad4-8fbe-b1f42f512429.png"},"9e20efa0-35ae-48bd-ba34-451831b0d90f":{"name":"options_text_hover","sourceUrl":null,"frameSize":{"x":142,"y":34},"frameCount":1,"looping":true,"frameDelay":12,"version":"WRxdO7y2thIrCC.CvDB0s6SRnG5jLW0t","loadedFromSource":true,"saved":true,"sourceSize":{"x":142,"y":34},"rootRelativePath":"assets/9e20efa0-35ae-48bd-ba34-451831b0d90f.png"},"58b571b5-77b4-4802-8017-8d34f55a1792":{"name":"switch_off","sourceUrl":null,"frameSize":{"x":122,"y":76},"frameCount":1,"looping":true,"frameDelay":12,"version":"HXe.1lv_FPPfsnidubeSWHtvO729uv5z","loadedFromSource":true,"saved":true,"sourceSize":{"x":122,"y":76},"rootRelativePath":"assets/58b571b5-77b4-4802-8017-8d34f55a1792.png"},"93d82663-cdff-47ce-a0a2-9e04701a9b02":{"name":"switch_on","sourceUrl":null,"frameSize":{"x":122,"y":76},"frameCount":1,"looping":true,"frameDelay":12,"version":"irsC1QxujC51Cz874rd_VqKf60MJoTYZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":122,"y":76},"rootRelativePath":"assets/93d82663-cdff-47ce-a0a2-9e04701a9b02.png"},"d9dd8b54-17ac-425e-8278-dd7259c3be29":{"name":"loadonly_text","sourceUrl":null,"frameSize":{"x":70,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"gLiUElnVVUzZrbPdApY0m0Ts9AehzLmC","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":22},"rootRelativePath":"assets/d9dd8b54-17ac-425e-8278-dd7259c3be29.png"},"1815e1b1-d408-46ba-9077-3afe4723b61f":{"name":"save_text","sourceUrl":null,"frameSize":{"x":178,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"nTURH90q3lKBb1yBZB5nYK2d8TdPvO88","loadedFromSource":true,"saved":true,"sourceSize":{"x":178,"y":22},"rootRelativePath":"assets/1815e1b1-d408-46ba-9077-3afe4723b61f.png"},"9a18a540-6acb-45c7-acbd-bef492c349ef":{"name":"save_text_hover","sourceUrl":null,"frameSize":{"x":190,"y":34},"frameCount":1,"looping":true,"frameDelay":12,"version":"oOtS2T6cOzED7rdUoPLYjhPCVA6UtTEz","loadedFromSource":true,"saved":true,"sourceSize":{"x":190,"y":34},"rootRelativePath":"assets/9a18a540-6acb-45c7-acbd-bef492c349ef.png"},"e7f128aa-7cdb-441f-ba04-2bdfdeb742a2":{"name":"saveonly_text","sourceUrl":null,"frameSize":{"x":76,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"yeYC786NSDteQS_wkPPXpM3btJtXjjHn","loadedFromSource":true,"saved":true,"sourceSize":{"x":76,"y":22},"rootRelativePath":"assets/e7f128aa-7cdb-441f-ba04-2bdfdeb742a2.png"},"db548238-6bff-479f-8d10-868fad48c104":{"name":"cloudsave_text","sourceUrl":null,"frameSize":{"x":170,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"ARANFTZWtrft2ZIix7qHMinYY.sS1_vC","loadedFromSource":true,"saved":true,"sourceSize":{"x":170,"y":22},"rootRelativePath":"assets/db548238-6bff-479f-8d10-868fad48c104.png"},"cbc4b8a2-7438-4f25-b3eb-1f12e39699f4":{"name":"cloudload_text","sourceUrl":null,"frameSize":{"x":164,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"_3IgI7yIM1nG2Q_SOksybw8oafKVDUJo","loadedFromSource":true,"saved":true,"sourceSize":{"x":164,"y":22},"rootRelativePath":"assets/cbc4b8a2-7438-4f25-b3eb-1f12e39699f4.png"},"c00d55ff-3b8c-44ff-b15e-b1fb0456aa44":{"name":"achievement1_text","sourceUrl":null,"frameSize":{"x":274,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"39uXnuiH7Jtw4jE6EiqQp77ByRKbP72H","loadedFromSource":true,"saved":true,"sourceSize":{"x":274,"y":22},"rootRelativePath":"assets/c00d55ff-3b8c-44ff-b15e-b1fb0456aa44.png"},"3da37e8e-8431-4e1b-8dc8-7e900dddd836":{"name":"updates_text","sourceUrl":null,"frameSize":{"x":128,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"c9i5UqVCDEdv6bLI_7as4S4hs_dmS6KE","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":22},"rootRelativePath":"assets/3da37e8e-8431-4e1b-8dc8-7e900dddd836.png"},"f8d10153-c11c-4f52-bf37-1d512cd1b378":{"name":"updates_text_hover","sourceUrl":null,"frameSize":{"x":140,"y":34},"frameCount":1,"looping":true,"frameDelay":12,"version":"OB0HepBDCezURMwudkGxbqLnUTabnA_a","loadedFromSource":true,"saved":true,"sourceSize":{"x":140,"y":34},"rootRelativePath":"assets/f8d10153-c11c-4f52-bf37-1d512cd1b378.png"},"64dd5238-45b5-4cac-b916-586a38a119ba":{"name":"achievement_text","sourceUrl":null,"frameSize":{"x":236,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"JN.iA3kRcc6tkR1xjPYpKwNIKT57qBOd","loadedFromSource":true,"saved":true,"sourceSize":{"x":236,"y":22},"rootRelativePath":"assets/64dd5238-45b5-4cac-b916-586a38a119ba.png"},"dd70a6ec-91e6-4132-9dd0-e2a84512be1e":{"name":"achievement_text_hover","sourceUrl":null,"frameSize":{"x":248,"y":34},"frameCount":1,"looping":true,"frameDelay":12,"version":"oY0klz5N0.g0X.GkiUhrEl.Zvl2sduc5","loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":34},"rootRelativePath":"assets/dd70a6ec-91e6-4132-9dd0-e2a84512be1e.png"},"1bc088ee-5058-4267-9bb7-794cddc84691":{"name":"gear","sourceUrl":"assets/v3/animations/R0Z_I10WAH2btnkFtaSIW5h5HGGoGzKX1ghda9KBWhE/1bc088ee-5058-4267-9bb7-794cddc84691.png","frameSize":{"x":58,"y":58},"frameCount":1,"looping":true,"frameDelay":4,"version":"c6f20fItW8rt8MYGsdgg1IDyWLpK6koP","loadedFromSource":true,"saved":true,"sourceSize":{"x":58,"y":58},"rootRelativePath":"assets/v3/animations/R0Z_I10WAH2btnkFtaSIW5h5HGGoGzKX1ghda9KBWhE/1bc088ee-5058-4267-9bb7-794cddc84691.png"},"941b9d40-c051-44c5-baf0-eaa30a5e0acb":{"name":"leave_text","sourceUrl":null,"frameSize":{"x":92,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"X2hsJxH_wEOiCtiRIHPJ2CAr6nkkhmy9","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":22},"rootRelativePath":"assets/941b9d40-c051-44c5-baf0-eaa30a5e0acb.png"},"d2ed2b38-8313-4096-840d-df1749aa2515":{"name":"danger","sourceUrl":null,"frameSize":{"x":20,"y":92},"frameCount":12,"looping":true,"frameDelay":2,"version":"Cm5zB7fLy_4CqotdBo6E6dkJnoj.xvtu","loadedFromSource":true,"saved":true,"sourceSize":{"x":140,"y":184},"rootRelativePath":"assets/d2ed2b38-8313-4096-840d-df1749aa2515.png"},"573459a4-dcda-4c05-b596-43496618def7":{"name":"danger_still","sourceUrl":null,"frameSize":{"x":20,"y":68},"frameCount":1,"looping":true,"frameDelay":12,"version":"1wxcwG9V4h4B4TM8X279COvzVlMLC8wx","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":68},"rootRelativePath":"assets/573459a4-dcda-4c05-b596-43496618def7.png"},"cd62a665-d18d-4e9f-b61b-f85673f67dcf":{"name":"axe","sourceUrl":null,"frameSize":{"x":62,"y":56},"frameCount":1,"looping":true,"frameDelay":12,"version":"8Qvw4pu9V8MJtcWjMBRjdQs52G2DOOmb","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":62,"y":56},"rootRelativePath":"assets/cd62a665-d18d-4e9f-b61b-f85673f67dcf.png"},"d24e8b78-61d9-4c4a-9ccc-3aace7558358":{"name":"axe_copy1","sourceUrl":null,"frameSize":{"x":55,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"ntrQTgzdsnEVp3WFanFVFaff4HZKGVBn","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":55,"y":48},"rootRelativePath":"assets/d24e8b78-61d9-4c4a-9ccc-3aace7558358.png"},"cf9f03a6-6c78-4e10-a576-0ee43e43434b":{"name":"arrow_right","sourceUrl":null,"frameSize":{"x":23,"y":24},"frameCount":12,"looping":true,"frameDelay":3,"version":"cBOlwrnKorYBP1gC58SdlcIGSOUL_fOl","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":72},"rootRelativePath":"assets/cf9f03a6-6c78-4e10-a576-0ee43e43434b.png"},"1c637e5a-983c-4bbe-80ab-f4a683cca497":{"name":"arrow_left","sourceUrl":null,"frameSize":{"x":23,"y":24},"frameCount":12,"looping":true,"frameDelay":3,"version":"e0HbkNlVlRGA2EuCs3VAe9bmzIefx1D5","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":72},"rootRelativePath":"assets/1c637e5a-983c-4bbe-80ab-f4a683cca497.png"},"9c4b283f-b0fb-4c00-8127-428c99e75992":{"name":"black_cloud_test","sourceUrl":"assets/v3/animations/CNx3Tk2IYIT0Rb0gYcDKumbqsVEEZ8Xnp38_7kr6xsY/9c4b283f-b0fb-4c00-8127-428c99e75992.png","frameSize":{"x":260,"y":134},"frameCount":1,"looping":true,"frameDelay":4,"version":"W5y0DeMXYD.njodSlVdiSY_zR7OtHK9V","loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":134},"rootRelativePath":"assets/v3/animations/CNx3Tk2IYIT0Rb0gYcDKumbqsVEEZ8Xnp38_7kr6xsY/9c4b283f-b0fb-4c00-8127-428c99e75992.png"},"7d095ddd-f4d3-4ab1-8486-29c186d832a8":{"name":"game_over_test","sourceUrl":null,"frameSize":{"x":260,"y":49},"frameCount":1,"looping":true,"frameDelay":12,"version":"kY6mZ7KsjkVyjczLrBCt72D6t4NYaynk","loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":49},"rootRelativePath":"assets/7d095ddd-f4d3-4ab1-8486-29c186d832a8.png"},"f410964f-35a8-4666-b172-0f6eb8ace94b":{"name":"star_test","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":4,"looping":true,"frameDelay":12,"version":"qG1YDGprSmpCj3pPaEG4FNTYLrveagZt","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/f410964f-35a8-4666-b172-0f6eb8ace94b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Before Starting Game Make Sure
//currentStep = "RunIntro1"
//debugvar = 0
//Otherwise Game Will Run In Compatibility Mode

World.frameRate = 50;

//Creates Sprites

//PE2 & PE1 Compatibility Sprites

//Ice01-05 Are Used To Check If Player Should Have Slippery Physics
//Ice01-04 Are Used In PE1 And Ice01-05 Are (Planned To Be) Used In PE2
var ice01 = createSprite(500, 500, 100, 100);
var ice02 = createSprite(200, 200);
var ice03 = createSprite(200, 200);
var ice04 = createSprite(200, 200);
var ice05 = createSprite(200, 200);

//Part Of An Unfinished Store Menu
//Used In PE1 Mode
var storeitem01 = createSprite(200, 200);

//Currently Unused Sprite For Sun And Moon
//Intended For PE2 Mode
var sunandmoon = createSprite(200, 50);

//Sun Sprite In The Corner Of The Screen Of PE1 Mode's Game
//Used In PE1 Mode
var sunspr = createSprite(350, 50);

//For The Player Sprite. The Main Stick Figure Character On Screen
//Used In Both PE1 And PE2 Modes
var player = createSprite(200, 200);

//Platforms For Jumping Onto
//Platform01-04 Are Used In PE1 Mode And Platform 01-05 Are Used In PE2 Mode
var platform01 = createSprite(100, 105);
var platform02 = createSprite(300, 210);
var platform03 = createSprite(200, 315);
var platform04 = createSprite(200, -105);
var platform05 = createSprite(200, 0);

//Coin That Counts Up Your Score When You Collect It
//Used In Both PE1 And PE2 Modes
var coin = createSprite(200, -500);

//The Main Obstacle In The Game
//Name Is Self Explanatory
//Used In PE2 Mode
var water = createSprite(200, 550);

//These Sprites Used To Be Black Clouds And Then Eventually Turned Into
//The Blue Cube Things/"Water" You See In Game Now
//Used In PE1 Mode
var black_cloud01 = createSprite(100, 450);
var black_cloud02 = createSprite(300, 450);

//The TBE Logo Sprite On The Firs tScreen You See At Startup
//Used In PE2 Mode
var startupspr = createSprite(200, 200);

//The Little PE2 Logo On The Startup Screen
//Used In PE2 Mode
var runsonpe2 = createSprite(55, 370);

//The Infinite Runner Text On The Title Screen
//Used In Both PE1 And PE2
var titletext = createSprite(110, 50);

//Background Sprite For The Title Screen
//Used In Both PE1 And PE2
var titlebackground = createSprite(200, 200);

//Background Sprite For Achievements
//Used In PE1
var titlebackground02 = createSprite(200, 200);

//The Yellow Stick Figure Character On The Title Screen
//Used In Both PE1 And PE2
var titlechr = createSprite(60, 375);

//The Start Button On The Main Menu
//Used In PE2
var startbutton = createSprite(344, 160);

//The Controls Button On The Main Menu
//Used In Both PE1 And PE2
var controlsbutton = createSprite(316, 220);

//The Options Button On The Main Menu
//Used In PE2
var optionsbutton = createSprite(326, 190);

//The Back Button Used For Multiple Menu Interfaces
//Used In Both PE1 And PE2
var backbutton = createSprite(200, 200);

//The Leave Buton On The Main Menu
//Used In PE1
var leavebutton = createSprite(350, 290);

//The Menu Showing Basic Controls For The Character
//Used In Both PE1 And PE2
var controlsmenu = createSprite(200, 200);

//Both Of these Are The Switches Used On The Options Screen
//Used In PE2
var optionstoggle01 = createSprite(350, 20);
var optionstoggle02 = createSprite(350, 70);

//The Danger Icon Used To Warn The Play Of Oncoming Obstacles
//Used In PE2
var dangericon = createSprite(200, 200);

//The Throwing Axe Thats Meant To Be One Of The New Obstacles In Game
//Used In PE2
var throwingaxe = createSprite(200, 200);

//The Grayed Out Background For The Pause Screen
//Used In Both PE1 And PE2
var pausescreenbackground = createSprite(200, 200);

//Restart Button Used On Pause Menu and Game Over Screen
//Used In Both PE1 And PE2
var restartbutton = createSprite(200, 300);

//Menu Button Also Used On Pause Menu And Game Over Screen
//Used In Both PE1 And PE2
var menubutton = createSprite(200, 275);

//Pause Icon Shown Above Restart And Menu Button On The Pause Screen
//Used In Both PE1 And PE2
var pauseicon = createSprite(200, 150);

//Text The Appears After You Die That Says GameOver
//Used In Both PE1 And PE2
var gameovertext = createSprite(200, 200);

//Button On Main Menu That When Pressed, Shows Achievements
//Used In PE2
var achievementsbutton = createSprite(272, 250);

//Achievement Icons In Achievements Menu
//Used In PE2
var achievement01 = createSprite(55, 50);
var achievement02 = createSprite(55, 200);
var achievement03 = createSprite(55, 350);
var achievement04 = createSprite(55, 500);

//Prevents Player From Walking Off Screen
//Used In Both PE1 And PE2
var edge01 = createSprite(200, -100, 500);
var edge02 = createSprite(-50, 200, 100, 5000);
var edge03 = createSprite(450, 200, 100, 5000);

//Achievement Animation Sprite
//Used In PE2
var achievementanimspr = createSprite(450, 50);

//Save And Load Button On Main Menu
//Used In PE2
var saveloadbutton = createSprite(300, 280);

//Save Button On Save And Load Menu
//Used In PE2
var savebutton = createSprite(200, 75);

//Load Button On Save And Load Menu
//Used In PE2
var loadbutton = createSprite(200, 275);

//Save Sprite Used On Save And Load Menu
//Used In PE2
var saveicon = createSprite(200, 150);

//Load Sprite Used On Save And Load Menu
//Used In PE2
var loadicon = createSprite(200, 350);

//Save Cloud Button On Save And Load Menu
//Used In PE2
var savebuttoncloud = createSprite(200, 75);

//Load Cloud Button On Save And Load Menu
//Used In PE2
var loadbuttoncloud = createSprite(200, 275);

//Save Cloud Sprite Used On Save And Load Menu
//Used In PE2
var saveiconcloud = createSprite(200, 150);

//Load Cloud Sprite Used On Save And Load Menu
//Used In PE2
var loadiconcloud = createSprite(200, 350);

//Save Button On Save And Load Menu
//Used In PE2
var updatesbutton = createSprite(326, 310);

//Variables

//RGB Background Variables
var rgbVal1 = 170;
var rgbVal2 = 216;
var rgbVal3 = 250;
var rgbTimerVal1 = 0;
var rgbTimerVal2 = 0;
var rgbTimerVal3 = 0;
var currentTime = 0;
var rgbTimeTracker = 0;

//Gameplay Variables
var score = 0;
var level = 1;
var usingOtherAnimation = 0;
var usingOtherAnimation2 = 0;
var isRunning = 0;
var isTouchingPlatform = 0;
var hasJumped = 0;
var pushWater = 0;
var usingJumpAnimation = 0;
var currentDirection = 1;
var platformChanger = 0;
var gameOver = 0;
var playerCurrentGravity;
var achievement1tracker = 0;
var achievement2tracker = 0;
var achievement3tracker = 0;
var highScore = 0;
var waterMoveSTS = 0;
var waterCurrentSpeed;
var dangerIconSpeed;
var gameplayStep = 0;
var obstacleTimer = 0;
var stopMovement = 0;
var jumpCount = 0;
var isDucking = 0;

//Menu Variables
var currentMenu = "Intro";
var currentStep = "RunIntro1";
var titletextturn = 0;
var paused = 0;
var achievementAnimStep = 0;
var achievementAnimStep2 = 0;
var saveFile = 0;
var saveFileNonLocal;
var saveMenuState = 0;
var versionNumber = "Stick Infinite Runner V1.0.0";
getKeyValue(encodeURIComponent(getUserId()), function(saveFileCloud) {
  saveFileNonLocal = saveFileCloud;
});

//Misc Variables
var buildn = 3011;
var debugvar = 0;
var isMuted = 0;

//Animations
player.setAnimation("stick_still");
platform01.setAnimation("platform");
platform02.setAnimation("platform");
platform03.setAnimation("platform");
platform04.setAnimation("platform");
platform05.setAnimation("platform");
water.setAnimation("water");
coin.setAnimation("coin_spin");
titletext.setAnimation("title_text");
titlebackground.setAnimation("BackgroundAnimation_sm");
titlechr.setAnimation("title_character");
startbutton.setAnimation("start_text");
controlsbutton.setAnimation("control_text");
backbutton.setAnimation("back_text");
controlsmenu.setAnimation("control_layout");
pausescreenbackground.setAnimation("gridtest_copy_1");
restartbutton.setAnimation("restart_text");
menubutton.setAnimation("menu_text");
pauseicon.setAnimation("pause_title_text");
optionsbutton.setAnimation("options_text");
optionstoggle01.setAnimation("switch_off");
optionstoggle02.setAnimation("switch_off");
runsonpe2.setAnimation("runs_on_pe2");
gameovertext.setAnimation("textGameOver_1");
achievementsbutton.setAnimation("achievement_text");
achievement01.setAnimation("Achievement1");
achievement02.setAnimation("Achievement2");
achievement03.setAnimation("Achievement3");
achievement04.setAnimation("Achievement4");
titlebackground02.setAnimation("background_achievements");
achievementanimspr.setAnimation("Achievement1_complete");
saveloadbutton.setAnimation("save_text");
savebutton.setAnimation("saveonly_text");
loadbutton.setAnimation("loadonly_text");
saveicon.setAnimation("save_icon");
loadicon.setAnimation("load_icon");
sunandmoon.setAnimation("Sun");
dangericon.setAnimation("danger");
throwingaxe.setAnimation("axe");
savebuttoncloud.setAnimation("cloudsave_text");
loadbuttoncloud.setAnimation("cloudload_text");
saveiconcloud.setAnimation("save_icon_cloud");
loadiconcloud.setAnimation("load_icon_cloud");
updatesbutton.setAnimation("updates_text");

//Visibility, Scaling, and Other Stuff
player.setCollider("rectangle", -4, -8, 50, 151);
player.scale = 0.5;
coin.scale = 0.5;
titlebackground.scale = 1;
pausescreenbackground.scale = 0.5;
optionstoggle01.scale = 0.35;
optionstoggle02.scale = 0.35;
runsonpe2.scale = 0.5;
achievementanimspr.scale = 0.75;
loadicon.scale = 0.75;
saveicon.scale = 0.75;
loadiconcloud.scale = 0.75;
saveiconcloud.scale = 0.75;
player.visible = 0;
platform01.visible = 0;
platform02.visible = 0;
platform03.visible = 0;
platform04.visible = 0;
platform05.visible = 0;
water.visible = 0;
coin.visible = 0;
titletext.visible = 0;
titlebackground.visible = 0;
startbutton.visible = 0;
titlechr.visible = 0;
controlsbutton.visible = 0;
controlsmenu.visible = 0;
backbutton.visible = 0;
pausescreenbackground.visible = 0;
restartbutton.visible = 0;
menubutton.visible = 0;
pauseicon.visible = 0;
optionsbutton.visible = 0;
optionstoggle01.visible = 0;
optionstoggle02.visible = 0;
gameovertext.visible = 0;
achievementsbutton.visible = 0;
achievement01.visible = 0;
achievement02.visible = 0;
achievement03.visible = 0;
achievement04.visible = 0;
titlebackground02.visible = 0;
saveloadbutton.visible = 0;
savebutton.visible = 0;
loadbutton.visible = 0;
sunandmoon.visible = 0;
saveicon.visible = 0;
loadicon.visible = 0;
dangericon.visible = 0;
throwingaxe.visible = 0;
savebuttoncloud.visible = 0;
loadbuttoncloud.visible = 0;
saveiconcloud.visible = 0;
loadiconcloud.visible = 0;
updatesbutton.visible = 0;

//PE1 Backwards Compatibility Layer

//Old PE1 Dependencies - Variables

var pausetimerset = 0;
var pausebutton = 0;
var pausetimer2 = 0;
var pausetimer = 0;
var backgroundchanger = 1;
var pointcounter = 0;
var backgroundrandomnumber = 0;
var arrowcounter = 0;
var pausebuttoncounter = 0;
var playerresume = 0;
var playerresumevelocity = 0;
var startbuttonmenutracker = 0;
var storeAnimationTracker = 0;
var backbuttonPressed = 0;
var arrowcounter2 = 0;
var score = 0;
var controlmove = 0;
var game_over = 0;
var backgroundvar = 0;
var startvar = 0;
var platformvar = 0;
var debugcamerazoom = 0;
var original = 0;

//Old PE1 Dependencies - Visibility

pausescreenbackground.visible = 0;
gameovertext.visible = 0;
sunspr.visible = 0;
edge01.visible = 0;
edge02.visible = 0;
edge03.visible = 0;
storeitem01.visible = 0;
black_cloud01.visible = 0;
black_cloud02.visible = 0;
leavebutton.visible = 0;
ice01.visible = 0;
ice02.visible = 0;
ice03.visible = 0;
ice04.visible = 0;
ice05.visible = 0;

//Old PE1 Dependencies - Animations

black_cloud01.setAnimation("cloud_1");
black_cloud02.setAnimation("cloud_1");
ice01.setAnimation("platformicehitbox");
ice02.setAnimation("platformicehitbox");
ice03.setAnimation("platformicehitbox");
ice04.setAnimation("platformicehitbox");
ice05.setAnimation("platformicehitbox");
storeitem01.setAnimation("store_item_1_notbought");
sunspr.setAnimation("Sun");
leavebutton.setAnimation("leave_text");

//Allows Direct Startup Into SIRv1 Mode
//If Debugvar == 5 and
//currentMenu == 4 From Start

if (currentMenu == "V1 Comp") {
  runsonpe2.visible = 0;
  coin.visible = 1;
  water.visible = 0;
  startupspr.visible = 0;
  optionsbutton.visible = 0;
  saveloadbutton.visible = 0;
  sunandmoon.visible = 0;
  platform01.visible = 1;
  platform02.visible = 1;
  platform03.visible = 1;
  platform04.visible = 1;
  black_cloud01.visible = 1;
  black_cloud02.visible = 1;
  black_cloud01.setAnimation("black_cloud_test");
  black_cloud02.setAnimation("black_cloud_test");
  gameovertext.setAnimation("game_over_test");
  platform01.setAnimation("platformoriginal");
  platform02.setAnimation("platformoriginal");
  platform03.setAnimation("platformoriginal");
  platform04.setAnimation("platformoriginal");
  gameovertext.scale = 1.5;
  platform01.x = 100;
  platform01.y = 100;
  platform02.x = 300;
  platform02.y = 200;
  platform03.x = 200;
  platform03.y = 300;
  platform04.x = 200;
  platform04.y = 400;
  player.visible = 1;
}

//Functions

function draw() {
  //CurrentMenu Keeps Track Of What Segment Of The Game
  //Your Currently Using
  //Example: PE1 Mode Is Considered A Different Segment
  //PE1 Mode Is CurrentMenu 3
  
  //Runs Startup Screen When Game First Boots Up
  //This Shows All The Logos At The Beginning
  if (currentMenu == "Intro") {
    Startup1();
  }
  //Runs The Main Menu Where You Can Start the Game From
  if (currentMenu == "MainMenu") {
    MainMenu();
  }
  //Runs The Actual Game Itself
  if (currentMenu == "Game") {
    //If Game Isnt Over And Game Isnt Paused
    //Calculate Collisions, Animations, Payer Movement
    //Coin Movement, Gameplay Changing, And Change The
    //Background In RealTime
    if (gameOver == 0) {
      if (paused == 0) {
        //Detects Collision With Platforms
        Collision();
        //StopMovement Is For When Player Is Hit By
        //The Axe, Or Obstacle
        //This Checks If You've Been Hit First Before
        //Calculating Player Movement
        if (stopMovement == 0) {
          //Changes Player Animations Based On What
          //Keys Are Being Pressed
          PlayerAnimationChanger();
          //Moves Player Based On What Keys Are Being Pressed
          MovePlayer();
        } else {
          stopMovement--;
          player.setAnimation("stick_hurt");
          //Gravity For The Player Is Calculated In
          //The MovePlayer Function So Because Its
          //Not Being Called Anymore, Gravity Has To
          //Be Calculated Here Instead
          if (player.y <= 125) {
            player.velocityY = player.velocityY + 0.4;
          } else {
            player.velocityY = player.velocityY + 0.25;
          }
          if(stopMovement == 0){
            player.setAnimation("stick_still");
          }
        }
        //Moves Coin From Top To Bottom And Checks For
        //Collision With Player. If Collision Happens,
        //Add A Point To The Score
        MoveCoin();
        //The Actual Code Behind Changing The Background
        BackgroundChanger();
        //Unused Function For Old Sun And Moon
        SunAndMoonSetPosition();
        //Changes Parts Of The Gameplay Based On Score
        //Example: The Axe Appearing At A Certain Point
        GameplayChanger();
      }
      //This Is Used To Pause The Game
      if (keyWentDown("enter")) {
        pauseFunction();
      }
    }
    //Put Outside Of The GameOver Check So That
    //They Can Continue To Move Even After The Game Is Over
    if (paused == 0) {
      //Moves Platforms From The Top To The Bottom
      MovePlatforms();
      //Moves Water From Side To Side And Also Gradually
      //Moves It Upwards Towards The Player
      MoveWater();
    }
    //If the Game Is Paused, Check If Player Has Clicked
    //Menu Or Restart Buttons
    if (paused == 1) {
      whenPaused();
    }
    //Checks For Game Over And If There Is A Game Over,
    //Show The Game Over Menu
    GameOver();
    //Part Of The Code For The Realtime Changing Background
    background(rgb(rgbVal1, rgbVal2, rgbVal3));
    //Keeps The Axe Moving After The Game Is Over
    if(gameplayStep == 3 && gameOver == 1){
      throwingaxe.rotation = throwingaxe.rotation - 7.5;
    }
    //Debug Menu Which Shows All Sorts Of Info
    if (debugvar == 5) {
      fill("grey");
      textFont("Arial");
      textSize(12);
      text("Score: " + score, 5, 15);
      text("Level: " + level, 5, 30);
      text("Red: " + Math.round(rgbVal1), 5, 45);
      text("Green: " + Math.round(rgbVal2), 5, 60);
      text("Blue: " + Math.round(rgbVal3), 5, 75);
      text("Water X Pos: " + Math.round(water.x), 5, 90);
      text("Achievement Step2: " + achievementAnimStep2, 5, 105);
      text("High Score: " + highScore, 5, 120);
      text("Obstacle Timer: " + obstacleTimer, 5, 135);
      //2 minutes 10 seconds
    } else {
      fill("white");
      textSize(20);
      text("Level: " + level,10, 10, 120, 55);
      text("Score: " + score, 10, 35, 120, 55);
    }
  }
  //Runs Backwards Compatible Build (PE1 Mode)
  if (currentMenu == "V6 Comp") {
    BackwardsCompatibleBuildv065();
  }
  if(currentMenu == "V1 Comp"){
    BackwardsCompatibleBuildv1();
  }
  //If Not In Compatibility Mode (PE1 Mode
  //Check Achievement Progress And If You've Earned Any
  //New Ones Yet
  if(currentMenu != "V1 Comp" && currentMenu != "V6 Comp"){
    AchievementTracker();
  }
  //Other Part Of the Debug Menu
  if(debugvar == 5 && currentMenu != "V6 Comp"){
    fill("grey");
    textFont("Arial");
    textSize(12);
    text("Platform Engine 2 V0.7, SIR 1.0.0", 218, 15);
    text("Build Number " + buildn, 218, 30);
    text("Current Framerate: " + Math.round(World.frameRate), 218, 45);
    text("Step: " + currentStep, 218, 60);
    text("Current Save File: " + (10000000002 + (highScore * 10) + (achievement1tracker * 1000000) + (achievement2tracker * 10000000) + (achievement3tracker * 100000000) + (isMuted * 1000000000)), 218, 75);
    text("Cloud Save File: " + saveFileNonLocal, 218, 90);
  }
  //Camera Controls While In Debug Mode
  if (debugvar == 5) {
    if (keyDown("w")) {
      camera.y = camera.y + -2;
    }
    if (keyDown("s")) {
      camera.y = camera.y + 2;
    }
    if (keyDown("a")) {
      camera.x = camera.x + -2;
    }
    if (keyDown("d")) {
      camera.x = camera.x + 2;
    }
    if (keyDown("1")) {
      camera.zoom = camera.zoom + -0.05;
    }
    if (keyDown("2")) {
      camera.zoom = camera.zoom + 0.05;
    }
    if (keyWentDown("r")) {
      camera.zoom = 1;
      camera.x = 200;
      camera.y = 200;
    }
  }
  drawSprites();
}

//Changes Animation For The Player Based on
//The Function Moveplayer

function PlayerAnimationChanger() {
  if (keyWentUp("left")) {
    usingOtherAnimation = 0;
    usingOtherAnimation2 = 1;
    player.setAnimation("stick_still");
  }
  if (keyWentUp("right")) {
    usingOtherAnimation = 0;
    usingOtherAnimation2 = 1;
    player.setAnimation("stick_still");
  }
  if (keyWentUp("up")) {
    if (usingOtherAnimation == 0) {
      usingOtherAnimation2 = 0;
      player.setAnimation("stick_still");
    }
  }
  if(keyWentUp("down")){
    if(usingOtherAnimation == 0){
      player.setAnimation("stick_still");
      usingOtherAnimation2 = 0;
      isDucking = 0;
    }
  }
  if (keyDown("up")) {
    if (usingOtherAnimation == 0) {
      usingOtherAnimation2 = 1;
      player.setAnimation("stick_up");
    }
  }
  if(keyDown("down")){
    if(usingOtherAnimation == 0){
      usingOtherAnimation2 = 1;
      player.setAnimation("stick_duck");
      isDucking = 1;
    } else {
      isDucking = 0;
    }
  }
  if (hasJumped == 1 && isTouchingPlatform == 0) {
    usingJumpAnimation = 1;
    usingOtherAnimation2 = 0;
    if (currentDirection == 0) {
      player.setAnimation("stick_jump");
    }
    if (currentDirection == 1) {
      player.setAnimation("stick_jump2");
    }
  } else {
    if (hasJumped == 0 && isTouchingPlatform == 1) {
      usingJumpAnimation = 0;
    }
  }
  if (usingJumpAnimation == 0) {
    if (usingOtherAnimation2 == 0) {
      player.setAnimation("stick_still");
    }
  }
  if (keyDown("left")) {
    usingOtherAnimation = 1;
    usingOtherAnimation2 = 1;
    currentDirection = 1;
    if (hasJumped == 0) {
      if (isRunning == 1) {
        player.setAnimation("stick_run4");
      } else {
        player.setAnimation("stick_run2");
      }
    }
  }
  if (keyDown("right")) {
    usingOtherAnimation = 1;
    usingOtherAnimation2 = 1;
    currentDirection = 0;
    if (hasJumped == 0) {
      if (isRunning == 1) {
        player.setAnimation("stick_run3");
      } else {
        player.setAnimation("stick_run");
      }
    }
  }
  if (keyDown("left") && keyDown("right")) {
    usingOtherAnimation = 1;
    usingOtherAnimation2 = 1;
    currentDirection = 0;
    if (hasJumped == 0) {
      player.setAnimation("stick_still");
    }
  }
}

//Handles Player Movement

function MovePlayer() {
  if (keyWentUp("shift")) {
    isRunning = 0;
  }
  if (keyDown("shift")) {
    isRunning = 1;
  }
  if (player.y <= 125) {
    player.velocityY = player.velocityY + 0.4;
  } else {
    player.velocityY = player.velocityY + 0.25;
  }
  if (keyWentDown("space")){
    if(jumpCount < 2){
      hasJumped = 1;
      jumpCount++;
      isTouchingPlatform = 0;
      player.velocityY = -7;
    }
  }
  if (keyDown("left")) {
    if (isRunning == 1) {
      player.x = player.x + -4;
    } else {
      player.x = player.x + -2;
    }
  }
  if (keyDown("right")) {
    if (isRunning == 1) {
      player.x = player.x + 4;
    } else {
      player.x = player.x + 2;
    }
  }
  if(keyWentUp("down")){
    player.setCollider("rectangle", -4, -8, 50, 151);
  }
  if(keyDown("down")){
    if(isDucking == 1){
      player.setCollider("rectangle", -4, 30, 50, 70);
    } else {
      player.setCollider("rectangle", -4, -8, 50, 151);
    }
  }
}

//Collision With Objects

function Collision() {
  //Collision Check to make sure the Player Doesnt
  //Phase Right through a Platform
  if(player.isTouching(platform01) && player.velocityY > 10){
    player.collide(platform01);
    isTouchingPlatform = 1;
    hasJumped = 0;
    jumpCount = 0;
    usingJumpAnimation = 0;
    player.velocityY = 0;
  }
  if(player.isTouching(platform02) && player.velocityY > 10){
    player.collide(platform02);
    isTouchingPlatform = 1;
    hasJumped = 0;
    jumpCount = 0;
    usingJumpAnimation = 0;
    player.velocityY = 0;
  }
  if(player.isTouching(platform03) && player.velocityY > 10){
    player.collide(platform03);
    isTouchingPlatform = 1;
    hasJumped = 0;
    jumpCount = 0;
    usingJumpAnimation = 0;
    player.velocityY = 0;
  }
  if(player.isTouching(platform04) && player.velocityY > 10){
    player.collide(platform04);
    isTouchingPlatform = 1;
    hasJumped = 0;
    jumpCount = 0;
    usingJumpAnimation = 0;
    player.velocityY = 0;
  }
  if(player.isTouching(platform05) && player.velocityY > 10){
    player.collide(platform05);
    isTouchingPlatform = 1;
    hasJumped = 0;
    jumpCount = 0;
    usingJumpAnimation = 0;
    player.velocityY = 0;
  }
  //Basic Platform Collision
  if (player.y + 36 <= platform01.y) {
    if (player.collide(platform01)) {
      isTouchingPlatform = 1;
      hasJumped = 0;
      jumpCount = 0;
      usingJumpAnimation = 0;
    }
  }
  if (player.y + 36 <= platform02.y) {
    if (player.collide(platform02)) {
      isTouchingPlatform = 1;
      hasJumped = 0;
      jumpCount = 0;
      usingJumpAnimation = 0;
    }
  }
  if (player.y + 36 <= platform03.y) {
    if (player.collide(platform03)) {
      isTouchingPlatform = 1;
      hasJumped = 0;
      jumpCount = 0;
      usingJumpAnimation = 0;
    }
  }
  if (player.y + 36 <= platform04.y) {
    if (player.collide(platform04)) {
      isTouchingPlatform = 1;
      hasJumped = 0;
      jumpCount = 0;
      usingJumpAnimation = 0;
    }
  }
  if (player.y + 36 <= platform05.y) {
    if (player.collide(platform05)) {
      isTouchingPlatform = 1;
      hasJumped = 0;
      jumpCount = 0;
      usingJumpAnimation = 0;
    }
  }
  //Old Platform Collision Code
  /*
  if (player.collide(platform02)) {
    isTouchingPlatform = 1;
    hasJumped = 0;
    usingJumpAnimation = 0;
  }
  if (player.collide(platform03)) {
    isTouchingPlatform = 1;
    hasJumped = 0;
    usingJumpAnimation = 0;
  }
  if (player.collide(platform04)) {
    isTouchingPlatform = 1;
    hasJumped = 0;
    usingJumpAnimation = 0;
  }
  */
  player.collide(edge01);
  player.collide(edge02);
  player.collide(edge03);
}

//Moves Platforms Along the Screen
//Adjusts Position Based on How Off Center a Platform Is
//Meaning the Platform Offset Bug Is Fixed From PE1

function MovePlatforms() {
  if (gameOver == 0) {
    //If Game Isn't Over Then Move Platforms Based On
    //Height The Player Is At
    if (player.y <= 125) {
      platform01.velocityY = 2;
      platform02.velocityY = 2;
      platform03.velocityY = 2;
      platform04.velocityY = 2;
      platform05.velocityY = 2;
    } else {
      platform01.velocityY = 0.25;
      platform02.velocityY = 0.25;
      platform03.velocityY = 0.25;
      platform04.velocityY = 0.25;
      platform05.velocityY = 0.25;
    }
  } else {
    //Keeps Platforms Moving During Game Over Screen
    platform01.velocityY = 0.25;
    platform02.velocityY = 0.25;
    platform03.velocityY = 0.25;
    platform04.velocityY = 0.25;
    platform05.velocityY = 0.25;
  }
  //Respawns Platforms Back To The Top
  if (platform01.y >= 420) {
    var platform01Distance = platform01.y - 420;
    platform01.y = -105 + platform01Distance;
    platform01.x = randomNumber(50, 350);
    if (platformChanger == 0) {
      platform01.setAnimation("platform");
    }
    if (platformChanger == 1) {
      platform01.setAnimation("platform_2");
    }
    if (platformChanger == 2) {
      platform01.setAnimation("platform_3");
    }
    if (platformChanger == 3) {
      platform01.setAnimation("platform_4");
    }
    if (platformChanger == 4) {
      platform01.setAnimation("platform_5");
    }
    if (platformChanger == 5) {
      platform01.setAnimation("platform_6");
    }
    if (platformChanger == 6) {
      platform01.setAnimation("platform_7");
    }
  }
  if (platform02.y >= 420) {
    var platform02Distance = platform02.y - 420;
    platform02.y = -105 + platform02Distance;
    platform02.x = randomNumber(50, 350);
    if (platformChanger == 0) {
      platform02.setAnimation("platform");
    }
    if (platformChanger == 1) {
      platform02.setAnimation("platform_2");
    }
    if (platformChanger == 2) {
      platform02.setAnimation("platform_3");
    }
    if (platformChanger == 3) {
      platform02.setAnimation("platform_4");
    }
    if (platformChanger == 4) {
      platform02.setAnimation("platform_5");
    }
    if (platformChanger == 5) {
      platform02.setAnimation("platform_6");
    }
    if (platformChanger == 6) {
      platform02.setAnimation("platform_7");
    }
  }
  if (platform03.y >= 420) {
    var platform03Distance = platform03.y - 420;
    platform03.y = -105 + platform03Distance;
    platform03.x = randomNumber(50, 350);
    if (platformChanger == 0) {
      platform03.setAnimation("platform");
    }
    if (platformChanger == 1) {
      platform03.setAnimation("platform_2");
    }
    if (platformChanger == 2) {
      platform03.setAnimation("platform_3");
    }
    if (platformChanger == 3) {
      platform03.setAnimation("platform_4");
    }
    if (platformChanger == 4) {
      platform03.setAnimation("platform_5");
    }
    if (platformChanger == 5) {
      platform03.setAnimation("platform_6");
    }
    if (platformChanger == 6) {
      platform03.setAnimation("platform_7");
    }
  }
  if (platform04.y >= 420) {
    var platform04Distance = platform04.y - 420;
    platform04.y = -105 + platform04Distance;
    platform04.x = randomNumber(50, 350);
    if (platformChanger == 0) {
      platform04.setAnimation("platform");
    }
    if (platformChanger == 1) {
      platform04.setAnimation("platform_2");
    }
    if (platformChanger == 2) {
      platform04.setAnimation("platform_3");
    }
    if (platformChanger == 3) {
      platform04.setAnimation("platform_4");
    }
    if (platformChanger == 4) {
      platform04.setAnimation("platform_5");
    }
    if (platformChanger == 5) {
      platform04.setAnimation("platform_6");
    }
    if (platformChanger == 6) {
      platform04.setAnimation("platform_7");
    }
  }
  if (platform05.y >= 420) {
    var platform05Distance = platform05.y - 420;
    platform05.y = -105 + platform05Distance;
    platform05.x = randomNumber(50, 350);
    if (platformChanger == 0) {
      platform05.setAnimation("platform");
    }
    if (platformChanger == 1) {
      platform05.setAnimation("platform_2");
    }
    if (platformChanger == 2) {
      platform05.setAnimation("platform_3");
    }
    if (platformChanger == 3) {
      platform05.setAnimation("platform_4");
    }
    if (platformChanger == 4) {
      platform05.setAnimation("platform_5");
    }
    if (platformChanger == 5) {
      platform05.setAnimation("platform_6");
    }
    if (platformChanger == 6) {
      platform05.setAnimation("platform_7");
    }
  }
}

//By Changing the rgb Values, We Can Show a Day and Night Time
//Cycle and Slowly change it Instead of Randomly Changing
//It Like Before

function BackgroundChanger() {
  rgbTimeTracker = rgbTimeTracker + 1;
  if (rgbTimeTracker == 1) {
    rgbTimeTracker = 0;
    if (currentTime == 0) {
      rgbVal1 = rgbVal1 - 0.025;
      if (rgbVal1 <= 80) {
        currentTime = 1;
      }
    }
    if (currentTime == 1) {
      rgbVal2 = rgbVal2 - 0.3;
      rgbVal1 = rgbVal1 + 0.5;
      rgbVal3 = rgbVal3 - 0.5;
      if(rgbVal2 < 146){
        rgbVal2 = 146;
        rgbTimerVal2 = 1;
      }
      if(rgbVal1 > 236){
        rgbVal1 = 236;
        rgbTimerVal1 = 1;
      }
      if(rgbVal3 < 52){
        rgbVal3 = 52;
        rgbTimerVal3 = 1;
      }
      if (rgbTimerVal1 == 1 && rgbTimerVal2 == 1 && rgbTimerVal3 == 1) {
        currentTime = 2;
        rgbTimerVal1 = 0;
        rgbTimerVal2 = 0;
        rgbTimerVal3 = 0;
      }
    }
    if (currentTime == 2) {
      rgbVal1 = rgbVal1 - 1;
      rgbVal2 = rgbVal2 - 0.5;
      rgbVal3 = rgbVal3 + 0.01;
      if (rgbVal1 <= 0) {
        rgbVal1 = 0;
        rgbTimerVal1 = 1;
      }
      if (rgbVal2 <= 10) {
        rgbVal2 = 10;
        rgbTimerVal2 = 1;
      }
      if (rgbVal3 >= 70) {
        rgbVal3 = 70;
        rgbTimerVal3 = 1;
      }
      if (rgbTimerVal1 == 1 && rgbTimerVal2 == 1 && rgbTimerVal3 == 1) {
        currentTime = 3;
        rgbTimerVal1 = 0;
        rgbTimerVal2 = 0;
        rgbTimerVal3 = 0;
      }
    }
    if (currentTime == 3) {
      rgbVal1 = rgbVal1 + 0.1;
      rgbVal2 = rgbVal2 + 0.1;
      rgbVal3 = rgbVal3 + 0.1;
      if(rgbVal1 >= 170){
        rgbVal1 = 170;
        rgbTimerVal1 = 1;
      }
      if(rgbVal2 >= 216){
        rgbVal2 = 216;
        rgbTimerVal2 = 1;
      }
      if(rgbVal3 >= 250){
        rgbVal3 = 250;
        rgbTimerVal3 = 1;
      }
      if (rgbTimerVal1 == 1 && rgbTimerVal2 == 1 && rgbTimerVal3 == 1) {
        currentTime = 0;
        rgbTimerVal1 = 0;
        rgbTimerVal2 = 0;
        rgbTimerVal3 = 0;
      }
    }
  }
}

//Moves The Water On Screen
//Also Detects if Player is in The Water and
//If Found in Water, Gameover

function MoveWater() {
  if (gameOver == 0) {
    water.y = water.y - 0.05;
  }
  if (waterMoveSTS == 0) {
    water.velocityX = water.velocityX - 0.05;
    if (water.x > 362.75) {
      water.x = 362;
    }
    if (water.velocityX <= -4) {
      water.velocityX = -4;
      waterMoveSTS = 1;
    }
  }
  if (waterMoveSTS == 1) {
    water.velocityX = water.velocityX + 0.05;
    if (water.x < 41.5) {
      water.x = 41.5;
    }
    if (water.velocityX >= 4) {
      water.velocityX = 4;
      waterMoveSTS = 0;
    }
  }
  if (player.y >= water.y - 180) {
    gameOver = 1;
    player.velocityY = 0;
    player.setAnimation("stick_drown");
    player.y = water.y - 180;
  }
}

//Ends Game Based on Win or Lose Scenario

function GameOver() {
  //If gameOver = 1 Then Begin GameOver Animation
  if (gameOver == 1) {
    //If currentStep = Gameplay Then Set Position For
    //GameOverText And Set Velocity For Animation
    //Set HighScore For SaveFile
    //Stop DangerIcon Movement
    if(currentStep == "Gameplay"){
      dangericon.velocityY = 0;
      gameovertext.visible = 1;
      gameovertext.x = 200;
      gameovertext.y = -200;
      gameovertext.velocityY = 10;
      if(score > highScore){
        highScore = score;
      }
      currentStep = "GameOverAnimation1";
    }
    //If currentStep = GameOVerAnimation1 Then Complete Animation By
    //Decreasing Speed Of GameOverText 
    if(currentStep == "GameOverAnimation1"){
      gameovertext.velocityY = gameovertext.velocityY - 0.13;
      if(gameovertext.velocityY <= 0){
        gameovertext.velocityY = 0;
        currentStep = "GameOver";
        restartbutton.visible = 1;
        menubutton.visible = 1;
      }
    }
    //If currentStep = GameOver Then Display Restart And Menu Buttons
    if(currentStep == "GameOver"){
      if (mousePressedOver(restartbutton)) {
        restartbutton.visible = 0;
        menubutton.visible = 0;
        player.x = 200;
        player.y = 200;
        ResetGameState();
      }
      if (mousePressedOver(menubutton)) {
        currentMenu = "MainMenu";
        ResetGameState();
        ResetMenuVisibilityState(1);
        ResetMenuState();
      }
    }
  }
}

//Moves Star Across Screen and Gives Points to Add
//To Total Score

function MoveCoin() {
  if (player.y <= 125) {
    coin.velocityY = 4;
  } else {
    coin.velocityY = 1;
  }
  if (player.isTouching(coin)) {
    if (isMuted == 0) {
      playSound("assets/category_alerts/airy_bell_notification.mp3", false);
    }
    pushWater = pushWater + 1;
    score = score + 1;
    coin.y = -500;
    coin.x = randomNumber(50, 350);
    if (pushWater == 9) {
      coin.setAnimation("coin_2");
    }
    if (pushWater == 10) {
      if (isMuted == 0) {
        playSound("assets/category_bell/choose_background.mp3", false);
      }
      coin.setAnimation("coin_spin");
      water.y = 550;
      pushWater = 0;
      level = level + 1;
      var platChangeCheck = platformChanger;
      platformChanger = randomNumber(0, 6);
      while(platformChanger == platChangeCheck){
        platformChanger = randomNumber(0, 6);
      }
    }
  }
  if (coin.y > 425) {
    coin.y = -500;
  }
}

//Function to Reset Everything in the Game

function ResetGameState() {
  if(score > highScore){
    highScore = score;
  }
  player.setAnimation("stick_still");
  coin.setAnimation("coin_spin");
  coin.x = 200;
  coin.y = -500;
  player.visible = 1;
  platform01.visible = 1;
  platform02.visible = 1;
  platform03.visible = 1;
  platform04.visible = 1;
  platform05.visible = 1;
  water.visible = 1;
  coin.visible = 1;
  gameovertext.visible = 0;
  platform01.x = 100;
  platform02.x = 300;
  platform03.x = 200;
  platform04.x = 200;
  platform05.x = 200;
  platform01.y = 105;
  platform02.y = 210;
  platform03.y = 315;
  platform04.y = 420;
  platform05.y = 0;
  platform01.velocityY = 0;
  platform02.velocityY = 0;
  platform03.velocityY = 0;
  platform04.velocityY = 0;
  platform05.velocityY = 0;
  water.velocityX = 4;
  water.x = 200;
  water.y = 550;
  player.velocityY = 0;
  coin.velocityY = 0;
  rgbVal1 = 170;
  rgbVal2 = 216;
  rgbVal3 = 250;
  rgbTimerVal1 = 0;
  rgbTimerVal2 = 0;
  rgbTimerVal3 = 0;
  currentTime = 0;
  score = 0;
  pushWater = 0;
  player.x = 200;
  player.y = 200;
  paused = 0;
  usingOtherAnimation = 0;
  usingOtherAnimation2 = 0;
  hasJumped = 0;
  usingJumpAnimation = 0;
  currentDirection = 1;
  isRunning = 0;
  isDucking = 0;
  player.setCollider("rectangle", -4, -8, 50, 151);
  gameOver = 0;
  if(currentMenu == "MainMenu"){
    currentStep = "MainMenu";
  } else {
    currentStep = "Gameplay";
  }
  dangerIconSpeed = 0;
  gameplayStep = 0;
  obstacleTimer = 0;
  stopMovement = 0;
  throwingaxe.y = dangericon.y;
  throwingaxe.x = dangericon.x + 75;
  throwingaxe.visible = 0;
  dangericon.visible = 0;
  level = 1;
  coin.x = randomNumber(50, 350);
}

//When Called, Resets Menu Back To Normal
//Used On Pause Menu And Gameover Screen

function ResetMenuState() {
  startbutton.visible = 1;
  controlsbutton.visible = 1;
  optionsbutton.visible = 1;
  saveloadbutton.visible = 1;
  achievementsbutton.visible = 1;
  updatesbutton.visible = 1;
  titlebackground.visible = 1;
  titletext.visible = 1;
  titlechr.visible = 1;
  player.visible = 0;
  platform01.visible = 0;
  platform02.visible = 0;
  platform03.visible = 0;
  platform04.visible = 0;
  platform05.visible = 0;
  pausescreenbackground.visible = 0;
  pauseicon.visible = 0;
  restartbutton.visible = 0;
  menubutton.visible = 0;
  water.visible = 0;
  coin.visible = 0;
  gameovertext.visible = 0;
  dangericon.visible = 0;
  throwingaxe.visible = 0;
  titletext.rotation = 0;
  backbutton.velocityX = 0;
  backbutton.velocityY = 0;
}

//Function For Resetting Visibility Of Everything In Menus

function ResetMenuVisibilityState(resetstate){
  if(resetstate == 0){
    titletext.visible = 0;
    titlechr.visible = 0;
    startbutton.visible = 0;
    controlsbutton.visible = 0;
    optionsbutton.visible = 0;
    saveloadbutton.visible = 0;
    achievementsbutton.visible = 0;
    titlebackground.visible = 0;
    updatesbutton.visible = 0;
  }
  if(resetstate == 1){
    startbutton.visible = 1;
    titletext.visible = 1;
    titlechr.visible = 1;
    controlsbutton.visible = 1;
    optionsbutton.visible = 1;
    achievementsbutton.visible = 1;
    saveloadbutton.visible = 1;
    titlebackground.visible = 1;
    updatesbutton.visible = 1;
  }
}

//Loading Game Function Used On Save & Load Menu

function loadGame(loadFile){
  var loading;
  loadFile = loadFile * 2;
  if(loadFile < 20000000000 && loadFile > 10000000000){
    loading = loadFile - 10000000000;
    loading = loading - 2;
    if(Math.round(loading / 1000000000) >= 1){
      isMuted = 1;
      loading = loading - 1000000000;
      optionstoggle01.setAnimation("switch_on");
    } else {
      isMuted = 0;
      optionstoggle01.setAnimation("switch_off");
    }
    if(Math.round(loading / 100000000) >= 2){
      achievement3tracker = 2;
      loading = loading - 200000000;
      achievement03.setAnimation("Achievement3_complete");
    } else {
      achievement3tracker = 0;
      achievement03.setAnimation("Achievement3");
    }
    if(Math.round(loading / 10000000) >= 2){
      achievement2tracker = 2;
      loading = loading - 20000000;
      achievement02.setAnimation("Achievement2_complete");
    } else {
      achievement2tracker = 0;
      achievement02.setAnimation("Achievement2");
    }
    if(Math.round(loading / 1000000) >= 2){
      achievement1tracker = 2;
      loading = loading - 2000000;
      achievement01.setAnimation("Achievement1_complete");
    } else {
      achievement1tracker = 0;
      achievement01.setAnimation("Achievement1");
    }
    highScore = loading / 10;
  }
}

//Functon that Shows Startup Logo

function Startup1() {
  if (currentStep == "RunIntro1") {
    background("grey");
    startupspr.setAnimation("logo_startup_current");
    startupspr.alpha = 0;
    runsonpe2.alpha = 0;
    currentStep = "RunIntro2";
  }
  if (currentStep == "RunIntro2") {
    background("grey");
    startupspr.alpha = startupspr.alpha + 0.01;
    startupspr.scale = startupspr.scale + 0.0015;
    runsonpe2.alpha = runsonpe2.alpha + 0.02;
    if (startupspr.alpha >= 1) {
      currentStep = "RunIntro3";
    }
  }
  if(currentStep == "RunIntro3"){
    background("grey");
    startupspr.scale = startupspr.scale + 0.0015;
    runsonpe2.alpha = runsonpe2.alpha - 0.06;
    startupspr.alpha = startupspr.alpha - 0.03;
    if(startupspr.alpha <= -0.5){
      currentStep = "RunIntro4";
    }
  }
  if (currentStep == "RunIntro4") {
    background("grey");
    startupspr.destroy();
    runsonpe2.destroy();
    ResetMenuVisibilityState(1);
    currentMenu = "MainMenu";
    currentStep = "MainMenu";
  }
}

//Runs Main Menu, Some Of It Is Ported Over From PE1

function MainMenu() {
  background(rgb(100, 98, 255));
  
  //This Step Means Its Running The Title Screen/Main Menu
  //In Here, You Can Click One Of The Buttons To Go To A
  //Different Menu
  //Example: Clicking The Start Button Will Transition Into
  //The Actual Game (currentMenu == "Game")
  if (currentStep == "MainMenu") {
    //This Section Is To Handle The Hover Over Text Sprite
    //Variant Of Every Text Sprite On The Menu
    if(mouseIsOver(startbutton)){
      startbutton.setAnimation("start_text_hover");
    } else {
      startbutton.setAnimation("start_text");
    }
    if(mouseIsOver(controlsbutton)){
      controlsbutton.setAnimation("control_text_hover");
    } else {
      controlsbutton.setAnimation("control_text");
    }
    if(mouseIsOver(achievementsbutton)){
      achievementsbutton.setAnimation("achievement_text_hover");
    } else {
      achievementsbutton.setAnimation("achievement_text");
    }
    if(mouseIsOver(optionsbutton)){
      optionsbutton.setAnimation("options_text_hover");
    } else {
      optionsbutton.setAnimation("options_text");
    }
    if(mouseIsOver(updatesbutton)){
      updatesbutton.setAnimation("updates_text_hover");
    } else {
      updatesbutton.setAnimation("updates_text");
    }
    if(mouseIsOver(saveloadbutton)){
      saveloadbutton.setAnimation("save_text_hover");
    } else {
      saveloadbutton.setAnimation("save_text");
    }
    
    //Here's The Code For Transitioning To The Next Step
    if (mouseWentDown() && mousePressedOver(startbutton)) {
      startbutton.velocityX = -4;
      startbutton.setAnimation("start_text");
      currentStep = "GameStartTransition";
    }
    if (mouseWentDown() && mousePressedOver(controlsbutton)) {
      controlsbutton.velocityX = -4;
      controlsbutton.setAnimation("control_text");
      currentStep = "ControlsMenuTransition";
    }
    if (mouseWentDown() && mousePressedOver(optionsbutton)) {
      optionsbutton.velocityX = -4;
      optionsbutton.setAnimation("options_text");
      currentStep = "OptionsMenuTransition";
    }
    if (mouseWentDown() && mousePressedOver(achievementsbutton)) {
      achievementsbutton.velocityX = -4;
      achievementsbutton.setAnimation("achievement_text");
      currentStep = "AchievementsMenuTransition";
    }
    if (mouseWentDown() && mousePressedOver(saveloadbutton)) {
      saveloadbutton.velocityX = -4;
      saveloadbutton.setAnimation("save_text");
      currentStep = "SaveLoadMenuTransition";
    }
    if (mouseWentDown() && mousePressedOver(updatesbutton)){
      updatesbutton.velocityX = -4;
      updatesbutton.setAnimation("updates_text");
      currentStep = "UpdatesMenuTransition";
    }
    
    
    //Checks To See If Current Step Has Been Updated
    //If It Has, Don't Display Version Text In Corner So
    //The Text Isnt Duplicated On Accident
    if(currentStep == "MainMenu"){
      fill("white");
      textSize(16);
      text(versionNumber, 200, 390);
    }
  }
  
  //Transition Steps Are Related To Transitioning From 
  //One Menu To Another
  
  //GameStartTransition Lets The Start Text Move And 
  //Transition Into Gameplay
  if (currentStep == "GameStartTransition") {
    fill("white");
    textSize(16);
    text(versionNumber, 200, 390);
    startbutton.velocityX = startbutton.velocityX + 0.2;
    if (startbutton.x >= 520) {
      startbutton.velocityX = 0;
      startbutton.visible = 0;
      startbutton.x = 344;
      ResetMenuVisibilityState(0);
      ResetGameState();
      currentMenu = "Game";
      currentStep = "Gameplay";
    }
  }
  
  //ControlsMenuTransition Lets The Controls Text Move And 
  //Transition To ControlsMenuAnimation1
  if (currentStep == "ControlsMenuTransition") {
    fill("white");
    textSize(16);
    text(versionNumber, 200, 390);
    controlsbutton.velocityX = controlsbutton.velocityX + 0.2;
    if (controlsbutton.x >= 520) {
      controlsbutton.velocityX = 0;
      controlsbutton.x = 316;
      ResetMenuVisibilityState(0);
      titlebackground.visible = 1;
      controlsmenu.x = -200;
      controlsmenu.velocityX = 18;
      controlsmenu.visible = 1;
      backbutton.visible = 1;
      backbutton.x = 435;
      backbutton.y = 330;
      currentStep = "ControlsMenuAnimation1";
    }
  }
  
  //OptionsMenuTransition Lets The Options Text Move And 
  //Transition To OptionsMenuAnimation1
  if(currentStep == "OptionsMenuTransition"){
    fill("white");
    textSize(16);
    text(versionNumber, 200, 390);
    optionsbutton.velocityX = optionsbutton.velocityX + 0.2;
    if (optionsbutton.x >= 520) {
      optionsbutton.velocityX = 0;
      optionsbutton.x = 326;
      ResetMenuVisibilityState(0);
      titlebackground.visible = 1;
      backbutton.visible = 1;
      optionstoggle01.visible = 1;
      optionstoggle02.visible = 1;
      backbutton.y = 350;
      if(isMuted == 0){
        optionstoggle01.setAnimation("switch_off");
      }
      if(isMuted == 1){
        optionstoggle01.setAnimation("switch_on");
      }
      backbutton.x = 475;
      backbutton.velocityX = -7.5;
      currentStep = "OptionsMenuAnimation1";
    }
  }
  
  //AchievementsMenuTransition Lets The Achievements Text Move And 
  //Transition To AchievementsMenuAnimation1
  if(currentStep == "AchievementsMenuTransition"){
    fill("white");
    textSize(16);
    text(versionNumber, 200, 390);
    achievementsbutton.velocityX = achievementsbutton.velocityX + 0.2;
    if(achievementsbutton.x >= 520){
      achievementsbutton.x = 272;
      achievementsbutton.velocityX = 0;
      ResetMenuVisibilityState(0);
      titlebackground02.visible = 1;
      achievement01.visible = 1;
      achievement02.visible = 1;
      achievement03.visible = 1;
      achievement04.visible = 1;
      backbutton.visible = 1;
      backbutton.x = 470;
      backbutton.y = 350;
      backbutton.velocityX = -7;
      currentStep = "AchievementsMenuAnimation1";
    }
  }
  
  //SaveLoadMenuTransition Lets The Save N Load Text Move And 
  //Transition To SaveLoadMenuAnimation1
  if(currentStep == "SaveLoadMenuTransition"){
    fill("white");
    textSize(16);
    text(versionNumber, 200, 390);
    saveloadbutton.velocityX = saveloadbutton.velocityX + 0.2;
    if(saveloadbutton.x >= 520){
      ResetMenuVisibilityState(0);
      savebutton.visible = 1;
      loadbutton.visible = 1;
      savebuttoncloud.visible = 1;
      loadbuttoncloud.visible = 1;
      backbutton.visible = 1;
      saveicon.visible = 1;
      loadicon.visible = 1;
      saveiconcloud.visible = 1;
      loadiconcloud.visible = 1;
      backbutton.x = 200;
      backbutton.y = -80;
      savebutton.x = -20;
      loadbutton.x = -20;
      savebuttoncloud.x = 420;
      loadbuttoncloud.x = 420;
      saveicon.x = -110;
      loadicon.x = -110;
      saveiconcloud.x = 510;
      loadiconcloud.x = 510;
      saveicon.velocityX = 10;
      loadicon.velocityX = 10;
      savebutton.velocityX = 7;
      loadbutton.velocityX = 7;
      saveiconcloud.velocityX = -10;
      loadiconcloud.velocityX = -10;
      savebuttoncloud.velocityX = -7;
      loadbuttoncloud.velocityX = -7;
      backbutton.velocityY = 7;
      saveloadbutton.velocityX = 0;
      saveloadbutton.x = 300;
      currentStep = "SaveLoadMenuAnimation1";
    }
  }
  
  //UpdatesTransition Lets The Updates Text Move And 
  //Transition To UpdatesMenuAnimation1
  if(currentStep == "UpdatesMenuTransition"){
    fill("white");
    textSize(16);
    text(versionNumber, 200, 390);
    updatesbutton.velocityX = updatesbutton.velocityX + 0.2;
    if(updatesbutton.x >= 520){
      updatesbutton.x = 326;
      updatesbutton.velocityX = 0;
      ResetMenuVisibilityState(0);
      backbutton.visible = 1;
      backbutton.x = -70;
      backbutton.y = 350;
      backbutton.velocityX = 7;
      currentStep = "UpdatesMenuAnimation1";
      }
    }
  
  //Menu Animations Are The Animations That Happen Before
  //Menu Displays And Works
  //Example: Back Button Moving Into Corner Of Screen
  if (currentStep == "ControlsMenuAnimation1") {
    controlsmenu.velocityX = controlsmenu.velocityX - 0.4;
    if(controlsmenu.velocityX <= 0){
      controlsmenu.velocityX = 0;
      backbutton.velocityX = -7.5;
      currentStep = "ControlsMenuAnimation2";
    }
  }
  if (currentStep == "ControlsMenuAnimation2") {
    backbutton.velocityX = backbutton.velocityX + 0.2;
    if(backbutton.velocityX >= 0){
      backbutton.velocityX = 0;
      backbutton.velocityY = 0;
      currentStep = "ControlsMenu";
    }
  }
  if(currentStep == "ControlsMenu"){
    if(mousePressedOver(backbutton)){
      currentStep = "ControlsMenuAnimation3";
    }
  }
  if(currentStep == "ControlsMenuAnimation3"){
    backbutton.velocityX = backbutton.velocityX + 0.25;
    controlsmenu.velocityX = controlsmenu.velocityX - 0.4;
    if(controlsmenu.x <= -400 && backbutton.x >= 430){
      controlsmenu.x = -50;
      backbutton.x = 435;
      controlsmenu.velocityX = 0;
      backbutton.velocityX = 0;
      backbutton.velocityY = 0;
      backbutton.visible = 0;
      controlsmenu.visible = 0;
      ResetMenuVisibilityState(1);
      ResetMenuState();
      currentStep = "MainMenu";
    }
  }
  
  
  if(currentStep == "OptionsMenuAnimation1"){
    fill("black");
    textSize(20);
    text("Mute All In Game Audio?", 12, 25);
    text("Play Game In PE 1 Mode?", 12, 75);
    text("", 12, 125);
    text("", 12, 175);
    text("", 12, 225);
    text("", 12, 275);
    backbutton.velocityX = backbutton.velocityX + 0.2;
    if(backbutton.velocityX >= 0){
      backbutton.velocityX = 0;
      backbutton.velocityY = 0;
      currentStep = "OptionsMenu";
    }
  }
  if(currentStep == "OptionsMenu"){
    fill("black");
    textSize(20);
    text("Mute All In Game Audio?", 12, 25);
    text("Play Game In PE 1 Mode?", 12, 75);
    text("", 12, 125);
    text("", 12, 175);
    text("", 12, 225);
    text("", 12, 275);
    if(mousePressedOver(backbutton)){
      currentStep = "OptionsMenuAnimation2";
    }
    if(mouseWentDown() && mousePressedOver(optionstoggle01)){
      if (isMuted == 0) {
        isMuted = 1;
        optionstoggle01.setAnimation("switch_on");
      } else {
        isMuted = 0;
        optionstoggle01.setAnimation("switch_off");
      }
      
    }
    if(mouseWentDown() && mousePressedOver(optionstoggle02)){
      optionstoggle02.setAnimation("switch_on");
      pausescreenbackground.visible = 1;
      currentStep = "OptionsMenuConfirmPE1";
    }
  }
  
  if(currentStep == "OptionsMenuAnimation2"){
    fill("black");
    textSize(20);
    text("Mute All In Game Audio?", 12, 25);
    text("Play Game In PE 1 Mode?", 12, 75);
    text("", 12, 125);
    text("", 12, 175);
    text("", 12, 225);
    text("", 12, 275);
    backbutton.velocityX = backbutton.velocityX + 0.2;
    if(backbutton.x >= 500){
      ResetMenuVisibilityState(1);
      ResetMenuState();
      backbutton.visible = 0;
      optionstoggle01.visible = 0;
      optionstoggle02.visible = 0;
      currentStep = "MainMenu";
    }
  }
  
  if(currentStep == "OptionsMenuConfirmPE1"){
    fill("black");
    textSize(20);
    text("Mute All In Game Audio?", 12, 25);
    text("Play Game In PE 1 Mode?", 12, 75);
    textSize(14);
    text("Are you sure you wanna start the game in PE1 Mode?", 30, 200);
    text("Press Enter To Confirm", 120, 225);
    text("Press Backpace To Exit", 120, 250);
    if(keyWentDown("backspace")){
      pausescreenbackground.visible = 0;
      optionstoggle02.setAnimation("switch_off");
      currentStep = "OptionsMenu";
    }
    if(keyWentDown("enter")){
      optionstoggle01.visible = 0;
      optionstoggle02.visible = 0;
      titlechr.visible = 1;
      titletext.visible = 1;
      restartbutton.visible = 1;
      controlsbutton.visible = 1;
      menubutton.visible = 1;
      leavebutton.visible = 1;
      debugvar = 0;
      startvar = 0;
      currentMenu = "V6 Comp";
    }
  }
  
  if(currentStep == "AchievementsMenuAnimation1"){
    fill("black");
    textSize(20);
    text("The Original 10", 110, 40);
    text("An Adventurer", 110, 190);
    text("A True Platformer", 110, 340);
    textSize(12);
    text("You Are Not A Warrior, You Are A Beginner", 110, 60);
    text("You Seem To Like Exploring Quite A Bit", 110, 210);
    text("A True Platformer Indeed", 110, 360);
    textSize(14);
    text("Get To A Score Of 10 Or More", 110, 80);
    text("Get To A Score Of 50 Or More", 110, 230);
    text("Get To A Score Of 100 Or More", 110, 380);
    backbutton.velocityX = backbutton.velocityX + 0.2;
    if(backbutton.velocityX >= 0){
      backbutton.velocityX = 0;
      backbutton.velocityY = 0;
      currentStep = "AchievementsMenu";
    }
  }
  if(currentStep == "AchievementsMenu"){
    fill("black");
    textSize(20);
    text("The Original 10", 110, 40);
    text("An Adventurer", 110, 190);
    text("A True Platformer", 110, 340);
    textSize(12);
    text("You Are Not A Warrior, You Are A Beginner", 110, 60);
    text("You Seem To Like Exploring Quite A Bit", 110, 210);
    text("A True Platformer Indeed", 110, 360);
    textSize(14);
    text("Get To A Score Of 10 Or More", 110, 80);
    text("Get To A Score Of 50 Or More", 110, 230);
    text("Get To A Score Of 100 Or More", 110, 380);
    if(mousePressedOver(backbutton)){
      currentStep = "AchievementsMenuAnimation2";
    }
  }
  if(currentStep == "AchievementsMenuAnimation2"){
    backbutton.velocityX = backbutton.velocityX + 0.2;
    fill("black");
    textSize(20);
    text("The Original 10", 110, 40);
    text("An Adventurer", 110, 190);
    text("A True Platformer", 110, 340);
    textSize(12);
    text("You Are Not A Warrior, You Are A Beginner", 110, 60);
    text("You Seem To Like Exploring Quite A Bit", 110, 210);
    text("A True Platformer Indeed", 110, 360);
    textSize(14);
    text("Get To A Score Of 10 Or More", 110, 80);
    text("Get To A Score Of 50 Or More", 110, 230);
    text("Get To A Score Of 100 Or More", 110, 380);
    if(backbutton.x >= 500){
      titlebackground02.visible = 0;
      achievement01.visible = 0;
      achievement02.visible = 0;
      achievement03.visible = 0;
      achievement04.visible = 0;
      backbutton.visible = 0;
      ResetMenuVisibilityState(1);
      ResetMenuState();
      backbutton.velocityX = 0;
      backbutton.velocityY = 0;
      currentStep = "MainMenu";
    }
  }
  
  if(currentStep == "SaveLoadMenuAnimation1"){
    saveicon.velocityX = saveicon.velocityX - 0.24;
    loadicon.velocityX = loadicon.velocityX - 0.24;
    savebutton.velocityX = savebutton.velocityX - 0.2;
    loadbutton.velocityX = loadbutton.velocityX - 0.2;
    saveiconcloud.velocityX = saveiconcloud.velocityX + 0.24;
    loadiconcloud.velocityX = loadiconcloud.velocityX + 0.24;
    savebuttoncloud.velocityX = savebuttoncloud.velocityX + 0.2;
    loadbuttoncloud.velocityX = loadbuttoncloud.velocityX + 0.2;
    backbutton.velocityY = backbutton.velocityY - 0.2;
    if(loadbutton.velocityX <= 0 && savebutton.velocityX <= 0){
      savebutton.velocityX = 0;
      loadbutton.velocityX = 0;
      savebuttoncloud.velocityX = 0;
      loadbuttoncloud.velocityX = 0;
      backbutton.velocityY = 0;
      if(saveicon.velocityX <= 0 && loadicon.velocityX <= 0){
        saveicon.velocityX = 0;
        loadicon.velocityX = 0;
        saveiconcloud.velocityX = 0;
        loadiconcloud.velocityX = 0;
        currentStep = "SaveLoadMenu";
      }
    }
  }
  if(currentStep == "SaveLoadMenu"){
    if(saveMenuState != 1){
      if(mousePressedOver(savebutton)){
        saveFile = 2;
        saveFile = saveFile + (highScore * 10);
        saveFile = saveFile + (achievement1tracker * 1000000);
        saveFile = saveFile + (achievement2tracker * 10000000);
        saveFile = saveFile + (achievement3tracker * 100000000);
        saveFile = saveFile + (isMuted * 1000000000);
        saveFile = saveFile + 10000000000;
        saveFile = saveFile / 2;
        saveMenuState = 1;
        //5111001056
        //5511000461
      }
    }
    if(saveMenuState == 1){
      textFont("Arial");
      textSize(14);
      fill("black");
      text("Your Current Save Code Is: " + saveFile, 10, 20);
    }
    if(saveMenuState != 2){
      if(mousePressedOver(loadbutton)){
        var load = prompt("Enter Loading Code: ");
        loadGame(load);
        saveMenuState = 2;
      }
    }
    
    if(saveMenuState == 2){
      textFont("Arial");
      textSize(14);
      fill("black");
      text("Save File Loaded Successfully", 10, 20);
    }
    if(mousePressedOver(backbutton)){
      saveMenuState = 0;
      currentStep = "SaveLoadMenuAnimation2";
    }
    if(saveMenuState != 3){
      if(mousePressedOver(savebuttoncloud)){
        saveFile = 2;
        saveFile = saveFile + (highScore * 10);
        saveFile = saveFile + (achievement1tracker * 1000000);
        saveFile = saveFile + (achievement2tracker * 10000000);
        saveFile = saveFile + (achievement3tracker * 100000000);
        saveFile = saveFile + (isMuted * 1000000000);
        saveFile = saveFile + 10000000000;
        saveFile = saveFile / 2;
        setKeyValue(encodeURIComponent(getUserId()), saveFile * 2);
        saveFileNonLocal = saveFile * 2;
        saveMenuState = 3;
      }
    }
    if(saveMenuState == 3){
      textFont("Arial");
      textSize(14);
      fill("black");
      text("Saved All Data To Cloud", 10, 20);
    }
    if(saveMenuState != 4){
      if(mousePressedOver(loadbuttoncloud)){
        getKeyValue(encodeURIComponent(getUserId()), function(loadFileCloud){
          loadFileCloud = loadFileCloud / 2;
          loadGame(loadFileCloud);
        });
        saveMenuState = 4;
      }
    }
    if(saveMenuState == 4){
      textFont("Arial");
      textSize(14);
      fill("black");
      text("Cloud File Loaded Successfully", 10, 20);
    }
  }
  if(currentStep == "SaveLoadMenuAnimation2"){
    savebutton.velocityX = savebutton.velocityX - 0.2;
    loadbutton.velocityX = loadbutton.velocityX - 0.2;
    saveicon.velocityX = saveicon.velocityX - 0.35;
    loadicon.velocityX = loadicon.velocityX - 0.35;
    savebuttoncloud.velocityX = savebuttoncloud.velocityX + 0.2;
    loadbuttoncloud.velocityX = loadbuttoncloud.velocityX + 0.2;
    saveiconcloud.velocityX = saveiconcloud.velocityX + 0.35;
    loadiconcloud.velocityX = loadiconcloud.velocityX + 0.35;
    backbutton.velocityY = backbutton.velocityY - 0.2;
    if(backbutton.y < -150 && loadbutton.x <= -50 && saveicon.x <= -100){
      ResetMenuVisibilityState(1);
      ResetMenuState();
      backbutton.visible = 0;
      savebutton.visible = 0;
      loadbutton.visible = 0;
      saveicon.visible = 0;
      loadicon.visible = 0;
      savebuttoncloud.visible = 0;
      loadbuttoncloud.visible = 0;
      saveiconcloud.visible = 0;
      loadiconcloud.visible = 0;
      loadbutton.velocityX = 0;
      savebutton.velocityX = 0;
      saveicon.velocityX = 0;
      loadicon.velocityX = 0;
      loadbuttoncloud.velocityX = 0;
      savebuttoncloud.velocityX = 0;
      saveiconcloud.velocityX = 0;
      loadiconcloud.velocityX = 0;
      backbutton.velocityX = 0;
      backbutton.velocityY = 0;
      currentStep = "MainMenu";                                          
    }
  }
  if(currentStep == "UpdatesMenuAnimation1"){
    backbutton.velocityX = backbutton.velocityX - 0.2;
    textSize(16);
    fill("black");
    text("Current Version: 1.0.0", 5, 20);
    textSize(14);
    text("Hello New Players!", 5, 50);
    text("Welcome To Stick Infinite Runner.", 5, 70);
    text("This Is The Release Version Of The Game,", 5, 90);
    text("Therefore There Are No Updates To Talk About Yet.", 5, 110);
    text("I Hope You Have Fun Playing Though.", 5, 130);
    text("", 5, 150);
    text("", 5, 170);
    text("", 5, 190);
    text("", 5, 210);
    text("", 5, 230);
    text(" - Dem Apples, The Creator Of The Game", 130, 390);
    if(backbutton.velocityX <= 0){
      currentStep = "UpdatesMenuAnimation2";
    }
  }
  if(currentStep == "UpdatesMenuAnimation2"){
    textSize(16);
    fill("black");
    text("Current Version: 1.0.0", 5, 20);
    textSize(14);
    text("Hello New Players!", 5, 50);
    text("Welcome To Stick Infinite Runner.", 5, 70);
    text("This Is The Release Version Of The Game,", 5, 90);
    text("Therefore There Are No Updates To Talk About Yet.", 5, 110);
    text("I Hope You Have Fun Playing Though.", 5, 130);
    text("", 5, 150);
    text("", 5, 170);
    text("", 5, 190);
    text("", 5, 210);
    text("", 5, 230);
    text(" - Dem Apples, The Creator Of The Game", 130, 390);
    if(mousePressedOver(backbutton)){
      ResetMenuVisibilityState();
      ResetMenuState();
      backbutton.visible = 0;
      currentStep = "MainMenu";
    }
  }
}

//Gives the Ability to Pause the Game

function pauseFunction() {
  if (paused == 0) {
    //Plays Sound For Pause Screen
    stopSound("assets/category_achievements/vibrant_game_postive_achievement_2.mp3");
    if (isMuted == 0) {
      playSound("assets/category_achievements/vibrant_game_postive_achievement_2.mp3", false);
    }
    //Sets Pause Variables And Freezes All Objects
    waterCurrentSpeed = water.velocityX;
    playerCurrentGravity = player.velocityY;
    dangerIconSpeed = dangericon.velocityY;
    water.velocityX = 0;
    player.velocityY = 0;
    dangericon.velocityY = 0;
    platform01.velocityY = 0;
    platform02.velocityY = 0;
    platform03.velocityY = 0;
    platform04.velocityY = 0;
    platform05.velocityY = 0;
    throwingaxe.velocityX = 0;
    coin.velocityY = 0;
    player.setAnimation("stick_still");
    if (pushWater == 9) {
      coin.setAnimation("coin_2_still");
    } else {
      coin.setAnimation("coin_still");
    }
    dangericon.setAnimation("danger_still");
    //Sets Pause Screen Objects To Be Visible
    pausescreenbackground.visible = 1;
    restartbutton.visible = 1;
    menubutton.visible = 1;
    pauseicon.visible = 1;
    //Sets Pause Variable To 1
    paused = 1;
  } else {
    //Plays Pause Screen Sound Effect
    stopSound("assets/category_achievements/vibrant_game_postive_achievement_2.mp3");
    if (isMuted == 0) {
      playSound("assets/category_achievements/vibrant_game_postive_achievement_2.mp3", false);
    }
    //Sets Correct Animations Back To Objects
    if (pushWater == 9) {
      coin.setAnimation("coin_2");
    } else {
      coin.setAnimation("coin_spin");
    }
    if(gameplayStep == 2){
      dangericon.setAnimation("danger");
    }
    if(gameplayStep == 3){
      if(level > 5){
        throwingaxe.velocityX = -2.5;
      } else {
        throwingaxe.velocityX = -3.5;
      }
    }
    //Sets Velocities To The Pause Velocities
    player.velocityY = playerCurrentGravity;
    water.velocityX = waterCurrentSpeed;
    dangericon.velocityY = dangerIconSpeed;
    pausescreenbackground.visible = 0;
    restartbutton.visible = 0;
    menubutton.visible = 0;
    pauseicon.visible = 0;
    //Unpauses Game
    paused = 0;
  }
}

//Called While Game is Paused

function whenPaused() {
  //Calls Functions When Restart Button Is Pushed
  //Meant To Restart Round
  if (mousePressedOver(restartbutton)) {
    ResetGameState();
    restartbutton.visible = 0;
    menubutton.visible = 0;
    pausescreenbackground.visible = 0;
    pauseicon.visible = 0;
  }
  //Calls Functions When Menu Button Is Pushed
  //Meant To Restart Round
  if (mousePressedOver(menubutton)) {
    currentMenu = "MainMenu";
    ResetGameState();
    ResetMenuState();
  }
}

//Used To Track Every Achievement In The Game

function AchievementTracker() {
  //Detects If Score Is Equal To 10
  //Is Supposed To Start Achievement Animation And Set 
  //Achievement1Tracker To 2
  if (score == 10) {
    if (achievement1tracker == 0) {
      if (isMuted == 0) {
        playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
      }
      achievement1tracker = 1;
      achievementanimspr.setAnimation("Achievement1_complete");
      achievementanimspr.velocityX = -7;
    }
  }
  //Detects If Score Is Equal To 50
  //Is Supposed To Start Achievement Animation And Set 
  //Achievement2Tracker To 2
  if (score == 50) {
    if(achievement2tracker == 0){
      if (isMuted == 0) {
        playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
      }
      achievement2tracker = 1;
      achievementanimspr.setAnimation("Achievement2_complete");
      achievementanimspr.velocityX = -7;
    }
  }
  //Detects If Score Is Equal To 100
  //Is Supposed To Start Achievement Animation And Set 
  //Achievement3Tracker To 2
  if (score == 100) {
    if(achievement3tracker == 0){
      if(isMuted == 0){
        playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
      }
      achievement3tracker = 1;
      achievementanimspr.setAnimation("Achievement3_complete");
      achievementanimspr.velocityX = -7;
    }
  }
  //Starts Actual Animation For Achievements
  if(achievement1tracker == 1 || achievement2tracker == 1 || achievement3tracker == 1){
    AchievementAnimation();
  }
}

//Plays Animation For Achievement Tracker

function AchievementAnimation(){
  //Checks If Animation Step Is Equal To 0
  //If It Is, Start First Animation Part
  if(achievementAnimStep == 0){
    achievementanimspr.velocityX = achievementanimspr.velocityX + 0.2;
    if(achievementanimspr.velocityX >= 0){
      achievementanimspr.velocityX = 0;
      achievementAnimStep = 1;
    }
  }
  //Checks If Animation Step Is Equal To 0
  //If It Is, Start Second Animation Part
  if(achievementAnimStep == 1){
    //Second Step Used To Count How Much Time The Second Animation
    //Part Should Last
    achievementAnimStep2++;
    if(achievementAnimStep2 >= 190){
      achievementanimspr.velocityX = achievementanimspr.velocityX + 0.2;
      if(achievementanimspr.x >= 450){
        achievementAnimStep = 0;
        achievementAnimStep2 = 0;
        achievementanimspr.velocityX = 0;
        //Detects Which Achievement Is Was Just Animating And
        //Labels It As Complete By Setting
        //AchievementTracker to 2
        if(achievement1tracker == 1){
          achievement1tracker = 2;
          achievement01.setAnimation("Achievement1_complete");
        }
        if(achievement2tracker == 1){
          achievement2tracker = 2;
          achievement02.setAnimation("Achievement2_complete");
        }
        if(achievement3tracker == 1){
          achievement3tracker = 2;
          achievement03.setAnimation("Achievement3_complete");
        }
        //Resets Position Of Animation
        achievementanimspr.x = 450;
        achievementanimspr.y = 50;
      }
    }
  }
}

//Manages Certain Gameplay Changes/Tiers

function GameplayChanger(){
  if(level >= 4){
    Obstacle1();
  }
  if(level >= 5){
    //Variable For Ice Platforms Goes Here
  }
  if(level >= 7){
    //Clone Of Obstacle01
    //Function For Grey Coin Goes Here
  }
  if(level >= 15){
    //Variable For Water Moving Faster Goes Here
  }
  if(level >= 20){
    //Variable For Water Moving Even Faster Goes Here
  }
}

//Used For Throwing Axe Obstacle

function Obstacle1(){
  //Detects What The Gameplay Step Currently Is
  //If Its Set To 0, It Means Its Just Beginning And
  //This Code Spawns In The Exclamation Point/Danger Icon
  //On Screen
  if(gameplayStep == 0){
    dangericon.x = 370;
    dangericon.visible = 1;
    dangericon.y = player.y;
    gameplayStep = 1;
    dangericon.setAnimation("danger_still");
    obstacleTimer = randomNumber(200, 350);
  }
  //Moves Danger Icon To Player's Position
  if(gameplayStep == 1){
    if(player.y >= dangericon.y){
      dangericon.velocityY = dangericon.velocityY + 0.1;
    }
    if(player.y < dangericon.y){
      dangericon.velocityY = dangericon.velocityY - 0.1;
    }
    //Limits Velocity
    if(dangericon.velocityY > 3){
      dangericon.velocityY = 3;
    }
    if(dangericon.velocityY < -3){
      dangericon.velocityY = -3;
    }
    //Sets Boundaries For Location
    if(dangericon.y > 350){
      dangericon.y = 350;
      dangericon.velocityY = 0;
    }
    if(dangericon.y < 50){
      dangericon.y = 50;
      dangericon.velocityY = 0;
    }
    //Sets How much Time It Should Be Following The Player For
    obstacleTimer--;
    if(obstacleTimer == 0){
      dangericon.velocityY = 0;
      dangericon.setAnimation("danger");
      if(isMuted == 0){
        playSound("assets/category_alerts/vibrant_game_negative_affirmation.mp3", false);
      }
      gameplayStep = 2;
      obstacleTimer = 100;
    }
  }
  //Sets Animation To A New Sprite And times How Long It Should
  //Be Frozen In That Animation For
  //Afterwards, Sets Axe's Position And Velocity Information
  if(gameplayStep == 2){
    obstacleTimer--;
    if(obstacleTimer == 0){
      dangericon.visible = 0;
      throwingaxe.visible = 1;
      throwingaxe.y = dangericon.y;
      throwingaxe.x = dangericon.x + 75;
      if(isMuted == 0){
        playSound("assets/category_alerts/vibrant_game_negative_alert.mp3", false);
      }
      if(level > 5){
        throwingaxe.velocityX = - 2.5;
      } else {
        throwingaxe.velocityX = - 3.5;
      }
      gameplayStep = 3;
    }
  }
  //Rotates Axe And Moves It Forward
  //Detects If It Makes It To A Certain Position And Then
  //Resets Everything Once It Does Make It To That Position
  if(gameplayStep == 3){
    throwingaxe.rotation = throwingaxe.rotation - 7.5;
    if(throwingaxe.isTouching(player)){
      throwingaxe.x = 475;
      stopMovement = 250;
      obstacleTimer = 750;
      throwingaxe.velocityX = 0;
      throwingaxe.visible = 0;
      gameplayStep = 4;
    }
    if(throwingaxe.x <= -75){
      //Detects How Far Into The Game You Are And
      //Changes The Amount Of Time Between Resets
      //Based On That
      if (level <= 4 && level < 5) {
        obstacleTimer = randomNumber(2000, 2250);
      }
      if (level >= 5 && level <= 6) {
        obstacleTimer = randomNumber(1200, 1500);
      }
      if (level >= 7 && level <= 11){
        obstacleTimer = randomNumber(600, 800);
      }
      if (level > 10){
        obstacleTimer = randomNumber(300, 400);
      }
      throwingaxe.velocityX = 0;
      throwingaxe.visible = 0;
      gameplayStep = 4;
    }
  }
  //Countdown To Reset
  if(gameplayStep == 4){
    obstacleTimer--;
    if(obstacleTimer <= 0){
      gameplayStep = 0;
    }
  }
}

//Moves Sun And Moon Across The Sky
//UNFINISHED
function SunAndMoonSetPosition() {
  sunandmoon.rotation = sunandmoon.rotation - 0.03;
  sunandmoon.velocityX = -0.05;
}

//PE1 Backwards Compatability Mode
//###WARNING Old Code From 2020 and OLDER, Very Messy###
//Any Changes Made Here Will Not Affect the Normal Game
//---------------------------------------------------------------
//ONLY EDIT ANY CODE BEYOND HERE IF YOU REALLY
//KNOW WHAT YOUR DOING
//---------------------------------------------------------------

function BackwardsCompatibleBuildv065() {
  //Welcome To Messy Version 0.65 (0.66(0.67(0.68))) Code
  //This Took Mutiple Days To Comment And Figure Out How Any
  //Of This Even Kinda Works
  //If Your Just Here To See My Suffering with Trying
  //To Learn How My Own Code Works, Be My Guest
  //Good Luck
  //-------------------------------------------------
  //Checks for Debug Variables To See If It Should
  //Allow Players To Move Camera With WASD
  if (debugvar == 5) {
    if (keyDown("w")) {
      camera.y = camera.y + -2;
    }
    if (keyDown("s")) {
      camera.y = camera.y + 2;
    }
    if (keyDown("a")) {
      camera.x = camera.x + -2;
    }
    if (keyDown("d")) {
      camera.x = camera.x + 2;
    }
    if (keyDown("1")) {
      camera.zoom = camera.zoom + -0.05;
    }
    if (keyDown("2")) {
      camera.zoom = camera.zoom + 0.05;
    }
    if (keyWentDown("y")) {
      if (debugcamerazoom == 0) {
        camera.zoom = 1;
        debugcamerazoom = 1;
      } else {
        if (debugcamerazoom == 1) {
          camera.zoom = 1;
          debugcamerazoom = 0;
        }
      }
    }
  }
  if (debugcamerazoom == 1) {
    camera.x = player.x;
    camera.y = player.y;
  }
  //... WHY IS ALL THIS STUFF IN THE DRAW FUNCTION!??!?
  //Checks If Startvar = 0 And If It Does, Run Main Menu
  if (startvar == 0) {
    //"Pausetimerset" Is Actually Broken Now So Thats Great
    //Oh Well
    //It Was Supposed To Stop People From Instantly
    //Going Into The Store When Returning To The Menu
    //This Occured Because I Reused The Menu Button For The
    //Store Button And This Caused Issues When
    //Code.Org Still Detected Me Clicking It And Sent
    //Me To The Store
    //Sidenote From Dev: Accidentally Fixed This Bug While Commenting On It
    if (pausetimerset == 0) {
      pausetimer2 = pausetimer2 + 1;
      if (pausetimer2 == 30) {
        pausetimerset = 1;
        pausetimer2 = 0;
      }
    }
    //Typing In This Stuff Allows You To Access The Debug Menu
    if (debugvar == 0){
      if (keyWentDown("space")) {
        debugvar = 1;
      }
    }
    if (debugvar == 1){
    if (keyWentDown("up")) {
      debugvar = 2;
    }
    }
    if (debugvar == 2){
    if (keyWentDown("down")) {
      debugvar = 3;
    }
    }
    if (debugvar == 3){
    if (keyWentDown("left")) {
      debugvar = 4;
    }
    }
    if (debugvar == 4){
    if (keyWentDown("right")) {
      debugvar = 5;
      if(isMuted == 0){
        playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
      }
    }
    }
    //This Was Used For When Currency In Game Worked
    //Currency Is Now A Removed Feature
    if (debugvar == 5) {
      if (keyWentDown("c")) {
        if(isMuted == 0){
          playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3", false);
        }
      }
      //Useless Variable
      if (keyWentDown("o")) {
        original = 1;
      }
    }
    //Rotates Text
    if (titletext.rotation == -25) {
      titletextturn = 1;
    }
    if (titletext.rotation == 0) {
      titletextturn = 0;
    }
    if (titletextturn == 0) {
      titletext.rotation = titletext.rotation + -1;
    }
    if (titletextturn == 1) {
      titletext.rotation = titletext.rotation + 1;
    }
    //Sets Position Of Buttons On Screen...
    //EVERY FRAME
    //I Am Mentally Insane
    menubutton.x = 350;
    menubutton.y = 230;
    restartbutton.x = 350;
    restartbutton.y = 200;
    controlsbutton.x = 320;
    controlsbutton.y = 260;
    controlsmenu.y = 200;
    controlsmenu.x = -50;
    //Sets Background Color EVERY SINGLE FRAME
    background(rgb(100, 98, 255));
    //Sets Animation EVERY SINGLE FRAME
    menubutton.setAnimation("store_text");
    restartbutton.setAnimation("start_text");
    //Checks For That Useless Variable That Changes One Graphic
    if (original == 1) {
      titlechr.setAnimation("title_picture_ob");
    } else {
      titlechr.setAnimation("title_character");
    }
    //Sets Visibility EVERY SINGLE FRAME
    pausescreenbackground.visible = 0;
    player.visible = 0;
    pauseicon.visible = 0;
    storeitem01.visible = 0;
    backbutton.visible = 0;
    platform01.visible = 0;
    platform02.visible = 0;
    platform03.visible = 0;
    platform04.visible = 0;
    gameovertext.visible = 0;
    ice01.visible = 1;
    ice02.visible = 1;
    ice03.visible = 1;
    ice04.visible = 1;
    black_cloud01.visible = 0;
    black_cloud02.visible = 0;
    coin.visible = 0;
    titlebackground.visible = 1;
    sunspr.visible = 0;
    controlsmenu.visible = 0;
    //This Long If Statement Detects If You Pushed Any Of The
    //Buttons On Screen
    if (mousePressedOver(restartbutton)) {
      pausetimerset = 0;
      //Restart Button Is The Start Button On The Menu
      //Sets StartVar To 2 Which Does A Little Animation And
      //Starts The Game
      startvar = 2;
    } else {
      if (mousePressedOver(menubutton)) {
        //Menu Button As Previously Mentioned Is The Store Button
        //Sets StartVar To 7 Which Leads To Store Menu
        //Sidenote From Dev: Went back And Fixed The Bug With The
        //Store Opening Up After Pausing And Clicking Menu
        //... I Already Told You This Though
        if(pausetimerset == 1){
          startvar = 7;
        }
      } else {
        if (mousePressedOver(controlsbutton)) {
          //Sets StartVar To 5 Which Leads To The Controls Menu
          startvar = 5;
        } else {
          //Sets StartVer To 6 Which Leads To The Quit Out Of
          //Compatibility Mode Menu
          if(mousePressedOver(leavebutton)){
            startvar = 6;
          }
        }
      }
    }
    //...?
    //Why Is This Here?
    textSize(15);
    fill("white");
    textFont("Arial");
  }
  
  //-----------------------------------------------------------
  //NEXT START VARIABLE
  //This Start Variable Is The Actual Game's Code
  //Don't Ask Me Why This Is Out Of Order Lol
  //-----------------------------------------------------------
  
  if (startvar == 1) {
    //I... I Don't Even Know Anymore
    //WHY
    //WHY DOES IT CHECK FOR A GAMEOVER HERE
    //AND WHY IS IT NOT CHECKING THE GAMEOVER VARIABLE
    //AND INSTEAD ITS CHECKING THE VISIBILITY OF THE ACTUAL GAMEOVER TEXT
    //WHY DIDNT I JUST USE THE VARIBLE FOR GAMEOVER
    //YOU KNOW, LIKE A NORMAL PERSON??!?!?!??
    //... So Ummm
    //This Checks If The Game Over Text Is Visible And Makes The
    //Restart Button And Menu Button Visible
    //Also It Only Sets The Menu Button's Position
    //Because Im Mentally Insane as Previously Mentioned
    if (gameovertext.visible == 1) {
      restartbutton.visible = 1;
      menubutton.visible = 1;
      menubutton.setAnimation("menu_text");
      menubutton.x = 200;
      menubutton.y = 275;
      //... I Don't Care Anymore tbh
      //It Goes Back To The Main Menu Or Something
      if (mousePressedOver(menubutton)) {
        pauseicon.visible = 0;
        restartbutton.visible = 1;
        controlsbutton.visible = 1;
        leavebutton.visible = 1;
        titletext.visible = 1;
        titlechr.visible = 1;
        gameovertext.visible = 0;
        startvar = 0;
      }
      //Why Is This Entire Restart Thing Just Not In A Separate
      //Function?
      //Its Actually Just Here To Take Up Hundreds Of
      //Extra Lines Of Code I Guess? idk
      if (mousePressedOver(restartbutton)) {
        //Idk Why it Waits A Frame Before Restarting The Round...
        //Thats What This Does By The Way
        //Not Even Indented Properly
        //Funny Thing Is, It Doesn't Even Wait A Frame With This Code
        //Cause Its Broken
        //So In The End This Is Completely Pointless
        pausetimer = pausetimer + 1;
        if (pausetimer >= 1) {
        pausebutton = 0;
        pausetimer = 0;
        backgroundchanger = 1;
        pointcounter = 0;
        backgroundrandomnumber = 0;
        arrowcounter = 0;
        pausebuttoncounter = 0;
        playerresume = 0;
        playerresumevelocity = 0;
        backgroundvar = 0;
        player.y = 200;
        player.x = 200;
        coin.x = 200;
        coin.y = -450;
        coin.visible = 1;
        black_cloud01.visible = 1;
        black_cloud02.visible = 1;
        platform01.visible = 1;
        pauseicon.visible = 0;
        platform01.y = 100;
        platform01.x = 100;
        platform02.x = 300;
        platform02.y = 200;
        platform03.x = 200;
        platform03.y = 300;
        platform04.x = 200;
        platform04.y = 400;
        black_cloud01.y = 500;
        black_cloud02.y = 500;
        platform02.visible = 1;
        platform03.visible = 1;
        platform04.visible = 1;
        sunspr.visible = 1;
        gameovertext.visible = 0;
        menubutton.visible = 0;
        restartbutton.visible = 0;
        if (debugvar == 5) {
          player.setAnimation("stick_still_re");
        } else {
          player.setAnimation("stick_still");
        }
        sunspr.setAnimation("Sun");
        score = 0;
        game_over = 0;
          }
      }
    }
    //Same Stuff As Before But For The Pause Menu And
    //Not The Gameover Screen
    if (pausebutton == 1) {
      menubutton.setAnimation("menu_text");
      menubutton.visible = 1;
      menubutton.x = 200;
      menubutton.y = 275;
      restartbutton.visible = 1;
      menubutton.visible = 1;
      if (mousePressedOver(restartbutton)) {
        pausetimer = pausetimer + 1;
        if (pausetimer >= 1) {
            pausebutton = 0;
            pausetimer = 0;
            backgroundchanger = 1;
            pointcounter = 0;
            backgroundrandomnumber = 0;
            arrowcounter = 0;
            pausebuttoncounter = 0;
            playerresume = 0;
            playerresumevelocity = 0;
            backgroundvar = 0;
            player.y = 200;
            player.x = 200;
            coin.x = 200;
            coin.y = -450;
            player.visible = 1;
            coin.visible = 1;
            black_cloud01.visible = 1;
            black_cloud02.visible = 1;
            platform01.visible = 1;
            pauseicon.visible = 0;
            platform01.y = 100;
            platform01.x = 100;
            platform02.x = 300;
            platform02.y = 200;
            platform03.x = 200;
            platform03.y = 300;
            platform04.x = 200;
            platform04.y = 400;
            black_cloud01.y = 500;
            black_cloud02.y = 500;
            platform02.visible = 1;
            platform03.visible = 1;
            platform04.visible = 1;
            sunspr.visible = 1;
            gameovertext.visible = 0;
            menubutton.visible = 0;
            restartbutton.visible = 0;
            //(Still Not Indented Properly)
            if (debugvar == 5) {
              player.setAnimation("stick_still_re");
            } else {
              player.setAnimation("stick_still");
            }
            score = 0;
            game_over = 0;
            }
      }
      if (mousePressedOver(menubutton)) {
        pauseicon.visible = 0;
        restartbutton.visible = 1;
        controlsbutton.visible = 1;
        leavebutton.visible = 1;
        titletext.visible = 1;
        titlechr.visible = 1;
        startvar = 0;
      }
    }
    //Sets The Position Of Ice01-04 to Platform01-04 Positions
    ice01.x = platform01.x;
    ice01.y = platform01.y;
    ice02.x = platform02.x;
    ice02.y = platform02.y;
    ice03.x = platform03.x;
    ice03.y = platform03.y;
    ice04.x = platform04.x;
    ice04.y = platform04.y;
    //Checks For Collision Of Platforms And
    //Sides Of Screen (edge01-03)
    player.collide(platform01);
    player.collide(platform02);
    player.collide(platform03);
    player.collide(platform04);
    player.collide(edge01);
    player.collide(edge02);
    player.collide(edge03);
    //Old Unused Debug Restart Function
    //Its Missing Loads Of Stuff Needed To Restart The Game
    //But Technically It Works I Guess
    if (keyWentDown("r") && pausebutton == 1) {
      if (debugvar == 5) {
        pausetimer = pausetimer + 1;
        if (pausetimer >= 1) {
          pausebutton = 0;
          pausetimer = 0;
          pausebuttoncounter = 0;
          playerresume = 0;
          playerresumevelocity = 0;
          player.y = 200;
          player.x = 200;
          black_cloud01.visible = 1;
          black_cloud02.visible = 1;
          platform01.visible = 1;
          platform01.y = 100;
          platform01.x = 100;
          platform02.x = 300;
          platform02.y = 200;
          platform03.x = 200;
          platform03.y = 300;
          platform04.x = 200;
          platform04.y = 400;
          black_cloud01.y = 500;
          black_cloud02.y = 500;
          platform02.visible = 1;
          platform03.visible = 1;
          platform04.visible = 1;
          gameovertext.visible = 0;
          menubutton.visible = 0;
          if (debugvar == 5) {
            player.setAnimation("stick_still_re");
          } else {
            player.setAnimation("stick_still");
          }
          score = 0;
          game_over = 0;
        }
      }
    }
    //This Part Of The Code Is COMPLETELY 100% USELESS!!!
    //Get Rid Of It If You Want
    if (pausebutton == 1) {
      black_cloud02.velocityY = 0;
      black_cloud01.velocityY = 0;
    } else {
      black_cloud02.y = black_cloud02.y - 0.05;
      black_cloud01.y = black_cloud01.y - 0.05;
    }
    //Calls To Function That Runs Pause Menu
    pausebuttonfunction();
    //Calls To Function That Runs The Coin's Logic
    Touchstar();
    //Calls To Function That Changes The Background
    background1();
    //These Next 2 Calls For Functions Are Used For Character Movement
    //Its Separate Functions Cause... Idk I Felt Like It 3 Years Ago
    Characternonmovestate();
    Charactermovestate();
    //Calls To Function That Shows The Score
    showScore();
    //Calls To Function That "Moves All Sprites" 
    Moveallsprites();
    //Calls To Function That Runs GameOver Screen
    Gameover();
  }
  
  //-----------------------------------------------------------
  //NEXT START VARIABLE
  //This One Is The Animation For The Start Button
  //-----------------------------------------------------------
  
  if (startvar == 2) {
    //Sets Background EVERY SINGLE FRAME
    background(rgb(100, 98, 255));
    //Rotates Text... AGAIN
    if (titletext.rotation == -25) {
      titletextturn = 1;
    }
    if (titletext.rotation == 0) {
      titletextturn = 0;
    }
    if (titletextturn == 0) {
      titletext.rotation = titletext.rotation + -1;
    }
    if (titletextturn == 1) {
      titletext.rotation = titletext.rotation + 1;
    }
    //Still Dont Know Why Thats Here
    textSize(15);
    textFont("Arial");
    fill("white");
    //First Part Of Start Button Animation
    if (startbuttonmenutracker == 0) {
      restartbutton.velocityX = 0;
      startbuttonmenutracker = 1;
    }
    //Second Part Of Start Button Animation
    if (startbuttonmenutracker == 1) {
      restartbutton.velocityX = restartbutton.velocityX + 0.1;
    }
    //Starts Game After Start Animation Is Over
    if (restartbutton.x >= 450) {
      restartbutton.velocityX = 0;
      titletext.visible = 0;
      titlechr.visible = 0;
      restartbutton.y = 300;
      restartbutton.x = 200;
      pausebutton = 0;
      pausetimer = 0;
      backgroundchanger = 1;
      pointcounter = 0;
      backgroundrandomnumber = 0;
      arrowcounter = 0;
      pausebuttoncounter = 0;
      playerresume = 0;
      playerresumevelocity = 0;
      backgroundvar = 1;
      player.visible = 1;
      player.y = 200;
      player.x = 200;
      coin.x = 200;
      coin.y = -450;
      coin.visible = 1;
      titlebackground.visible = 0;
      black_cloud01.visible = 1;
      black_cloud02.visible = 1;
      platform01.y = 100;
      platform01.x = 100;
      platform02.x = 300;
      platform02.y = 200;
      platform03.x = 200;
      platform03.y = 300;
      platform04.x = 200;
      platform04.y = 400;
      black_cloud01.y = 500;
      black_cloud02.y = 500;
      menubutton.visible = 0;
      platform01.visible = 1;
      platform02.visible = 1;
      platform03.visible = 1;
      platform04.visible = 1;
      gameovertext.visible = 0;
      if (debugvar == 5) {
        player.setAnimation("stick_still_re");
      } else {
        player.setAnimation("stick_still");
      }
      restartbutton.setAnimation("restart_text");
      score = 0;
      game_over = 0;
      restartbutton.visible = 0;
      controlsbutton.visible = 0;
      leavebutton.visible = 0;
      sunspr.visible = 1;
      startvar = 1;
    }
  }
  
  //-----------------------------------------------------------
  //NEXT START VARIABLE
  //This One Is For The Store Animation
  //-----------------------------------------------------------
  
  if (startvar == 3) {
    //I Think You Get The Point
    background(rgb(100, 98, 255));
    //Same With This
    if (titletext.rotation == -25) {
      titletextturn = 1;
    }
    if (titletext.rotation == 0) {
      titletextturn = 0;
    }
    if (titletextturn == 0) {
      titletext.rotation = titletext.rotation + -1;
    }
    if (titletextturn == 1) {
      titletext.rotation = titletext.rotation + 1;
    }
    //Why
    textSize(15);
    textFont("Arial");
    fill("white");
    //Store Animation?
    if (menubutton.x >= 450) {
      restartbutton.velocityX = 0;
      menubutton.velocityX = 0;
      titletext.visible = 0;
      titlechr.visible = 0;
      menubutton.y = 350;
      menubutton.x = 200;
      pausebutton = 0;
      pausetimer = 0;
      backgroundchanger = 1;
      pointcounter = 0;
      backgroundrandomnumber = 0;
      arrowcounter = 0;
      pausebuttoncounter = 0;
      playerresume = 0;
      playerresumevelocity = 0;
      backgroundvar = 0;
      player.y = 200;
      player.x = 200;
      coin.x = 200;
      coin.y = -450;
      platform01.y = 100;
      platform01.x = 100;
      platform02.x = 300;
      platform02.y = 200;
      platform03.x = 200;
      platform03.y = 300;
      platform04.x = 200;
      platform04.y = 400;
      black_cloud01.y = 500;
      black_cloud02.y = 500;
      gameovertext.visible = 0;
      if (debugvar == 5) {
        player.setAnimation("stick_still_re");
      } else {
        player.setAnimation("stick_still");
      }
      score = 0;
      game_over = 0;
      restartbutton.visible = 0;
      menubutton.visible = 0;
      controlsbutton.visible = 0;
      leavebutton.visible = 0;
      startvar = 4;
    }
  }
  
  //-----------------------------------------------------------
  //NEXT START VARIABLE
  //More Store Animation Stuff??????
  //-----------------------------------------------------------
  
  if (startvar == 4) {
    //ugh
    background(rgb(100, 98, 255));
    //Makes Backbutton Visible EVERY SINGLE FRAME
    backbutton.visible = 1;
    //First Part Of Store Animation
    if (storeAnimationTracker == 0) {
      backbutton.x = 200;
      backbutton.y = -11;
      backbutton.velocityY = 5;
      storeAnimationTracker = 1;
    }
    //Second Part Of Store Animation
    if (storeAnimationTracker == 1) {
      backbutton.velocityY = backbutton.velocityY - 0.2;
      if (backbutton.velocityY <= 0) {
        backbutton.velocityY = 0;
        storeAnimationTracker = 2;
      }
    }
    //Third Part Of Store Animation
    if (storeAnimationTracker == 2) {
      storeitem01.visible = 1;
      storeitem01.x = -55;
      storeitem01.y = 130;
      storeitem01.velocityX = 10;
      storeAnimationTracker = 3;
    }
    //Fourth Part Of Store Animation
    if (storeAnimationTracker == 3) {
      storeitem01.velocityX = storeitem01.velocityX - 0.3;
      if (storeitem01.velocityX <= 0) {
        storeitem01.velocityX = 0;
        storeAnimationTracker = 4;
      }
    }
    //Checks If Mouse Clicked On BackButton
    if (mousePressedOver(backbutton) && storeAnimationTracker == 4) {
      backbuttonPressed = 1;
    }
    //Starts And Finishes Animation To Return To Menu
    if (backbuttonPressed == 1) {
      backbutton.velocityY = backbutton.velocityY - 0.2;
      storeitem01.velocityX = storeitem01.velocityX - 0.4;
      if ((backbutton.y) <= -22) {
        backbutton.velocityY = 0;
        menubutton.visible = 1;
        restartbutton.visible = 1;
        controlsbutton.visible = 1;
        leavebutton.visible = 1;
        titletext.visible = 1;
        titlechr.visible = 1;
        storeAnimationTracker = 0;
        backbuttonPressed = 0;
        startvar = 0;
      }
    }
  }
  
  //-----------------------------------------------------------
  //NEXT START VARIABLE
  //Controls Menu Animation
  //-----------------------------------------------------------
  
  if (startvar == 5) {
    //I Hate This Code So Much, Its Disgusting
    background(rgb(100, 98, 255));
    //First Part Of Controls Menu Animation
    if (controlmove == 0) {
      //...
      //I Hate You Younger Me
      if (titletext.rotation == -25) {
        titletextturn = 1;
      }
      if (titletext.rotation == 0) {
        titletextturn = 0;
       }
      if (titletextturn == 0) {
        titletext.rotation = titletext.rotation + -1;
       }
      if (titletextturn == 1) {
        titletext.rotation = titletext.rotation + 1;
       }
      controlsbutton.velocityX = controlsbutton.velocityX + 0.1;
      if (controlsbutton.x >= 470) {
        controlmove = 1;
        controlsbutton.velocityX = 0;
      }
    }
    //Second Part Of Controls Menu Animation
    if (controlmove == 1) {
      titletext.visible = 0;
      titlechr.visible = 0;
      restartbutton.visible = 0;
      menubutton.visible = 0;
      leavebutton.visible = 0;
      controlsmenu.velocityX = 10;
      controlmove = 2;
    }
    //Third Part Of Controls Menu Animation
    if (controlmove == 2) {
      controlsmenu.velocityX = controlsmenu.velocityX - 0.2;
      controlsmenu.visible = 1;
      if ((controlsmenu.velocityX) <= 0) {
        controlsmenu.velocityX = 0;
        backbutton.x = 435;
        backbutton.y = 330;
        backbutton.visible = 1;
        backbutton.velocityX = -7.5;
        controlmove = 3;
      }
    }//Fourth Part Of Controls Menu Animation
    if (controlmove == 3) {
      backbutton.velocityX = backbutton.velocityX + 0.2;
      if (backbutton.velocityX >= 0) {
        backbutton.velocityX = 0;
      }
      //Starts The Rest Of The Animation After Pushing That Button
      if (mousePressedOver(backbutton)) {
        controlmove = 4;
      }
    }
    //Fifth Part Of Controls Menu Animaiton
    //This One Starts After Pushing The Back Button
    //Sidenote: Accidentally Fixed A Major
    //Bug With This Part Of The Animation
    //Just By Looking At How I Misspelled Something
    //Yes I Know, I Big Stupid
    if (controlmove == 4) {
      controlsmenu.velocityX = controlsmenu.velocityX - 0.2;
      backbutton.velocityX = backbutton.velocityX + 0.2;
      if (controlsmenu.x <= -150) {
        controlsbutton.visible = 1;
        leavebutton.visible = 1;
        menubutton.visible = 1;
        restartbutton.visible = 1;
        titletext.visible = 1;
        titlechr.visible = 1;
        backbutton.velocityX = 0;
        controlsmenu.velocityX = 0;
        backbutton.x = 435;
        backbutton.y = 330;
        controlsmenu.x = -150;
        startvar = 0;
        controlmove = 0;
      }
    }
  }
  
  //-----------------------------------------------------------
  //NEXT START VARIABLE
  //LeaveButton Menu Code
  //-----------------------------------------------------------
  
  if(startvar == 6){
    //('-')
    //Not Even Amused By This Anymore
    //Whats Actually Sad Though Is That This Code Was
    //Written Recently At the Time Of Writing This
    //And The Only Reason I Didnt Fix The Actual
    //Issue Of This Repeated In Every Startvar Is Cause
    //That Would Mean Reworking the Entire Menu And
    //Im Way Too Lazy For That
    background(rgb(100, 98, 255));
    //Displays Text That Asks If You Wanna Leave PE1 Mode
    textFont("Times_New_Roman");
    textSize(12);
    fill("white");
    stroke("white");
    text("Press Enter To Leave PE1 Mode", 5, 200);
    text("Press Backspace To Continue", 5, 215);
    //Makes Sure All Menu Items Arent Visible EVERY SINGLE FRAME
    //I Was Just Really Lazy With This Part Of The Code
    titlebackground.visible = 0;
    titlechr.visible = 0;
    titletext.visible = 0;
    restartbutton.visible = 0;
    menubutton.visible = 0;
    controlsbutton.visible = 0;
    leavebutton.visible = 0;
    //... Im Just Gonna Stop Commenting On This Code
    if (titletext.rotation == -25) {
      titletextturn = 1;
    }
    if (titletext.rotation == 0) {
      titletextturn = 0;
    }
    if (titletextturn == 0) {
      titletext.rotation = titletext.rotation + -1;
    }
    if (titletextturn == 1) {
      titletext.rotation = titletext.rotation + 1;
    }
    //Sends You Back To PE2 Mode
    if (keyWentDown("enter")) {
      ResetMenuState();
      restartbutton.visible = 0;
      menubutton.visible = 0;
      leavebutton.visible = 0;
      restartbutton.x = 200;
      restartbutton.y = 300;
      menubutton.x = 200;
      menubutton.y = 275;
      controlsbutton.x = 316;
      controlsbutton.y = 220;
      restartbutton.setAnimation("restart_text");
      menubutton.setAnimation("menu_text");
      optionstoggle02.setAnimation("switch_off");
      startvar = 0;
      currentStep = "MainMenu";
      currentMenu = "MainMenu";
    }
    //Keeps You In PE1 Mode
    if(keyWentDown("backspace")){
      titlebackground.visible = 1;
      titlechr.visible = 1;
      titletext.visible = 1;
      menubutton.visible = 1;
      restartbutton.visible = 1;
      controlsbutton.visible = 1;
      leavebutton.visible = 1;
      startvar = 0;
    }
  }
  
  //-----------------------------------------------------------
  //NEXT START VARIABLE
  //Store Menu Thing Before Animation Plays Out
  //-----------------------------------------------------------
  
  if(startvar == 7){
    background(rgb(100, 98, 255));
    //Displays Text Before Loading Store
    textFont("Times_New_Roman");
    textSize(12);
    fill("white");
    stroke("white");
    text("That Feature Is Non-Functional.", 5, 185);
    text("It Is Recommended You Press BackSpace To", 5, 200);
    text("Return To The Main Menu", 5, 215);
    text("Or, You Can Press Enter To Continue Anyways", 5, 245);
    //Does This Visible Stuff Again
    //Every
    //Single
    //Frame
    titlebackground.visible = 0;
    titlechr.visible = 0;
    titletext.visible = 0;
    restartbutton.visible = 0;
    menubutton.visible = 0;
    controlsbutton.visible = 0;
    leavebutton.visible = 0;
    if (titletext.rotation == -25) {
      titletextturn = 1;
    }
    if (titletext.rotation == 0) {
      titletextturn = 0;
    }
    if (titletextturn == 0) {
      titletext.rotation = titletext.rotation + -1;
    }
    if (titletextturn == 1) {
      titletext.rotation = titletext.rotation + 1;
    }
    if (keyWentDown("enter")) {
      startvar = 4;
    }
    //Sends You Back To Menu
    if(keyWentDown("backspace")){
      titlebackground.visible = 1;
      titlechr.visible = 1;
      titletext.visible = 1;
      menubutton.visible = 1;
      restartbutton.visible = 1;
      controlsbutton.visible = 1;
      leavebutton.visible = 1;
      startvar = 0;
    }
  }
  //Displays Version Text In Corner
  textFont("Times_New_Roman");
  textSize(12);
  fill("white");
  stroke("white");
  text("S.I.R PE1 Compatability Mode v0.67", 220, 15);
  if (startvar == 0 && debugvar != 5) {
    text("Do NOT Report Bugs That Occur In PE1", 2, 15);
  }
  //Displays Debug Information If Debuvar = 5
  if (debugvar == 5) {
    text(Math.round(World.frameRate), 0, 15);
    text(pointcounter, 0, 45);
    text(black_cloud01.y, 0, 75);
    text(controlmove, 0, 105);
  }
  //And Finally...
  //The Single Lonely DrawSprites Command...
  //You Made It
  drawSprites();
}

//------------------------------------------------
//PAST HERE ARE ALL THE FUNCTIONS USED IN PE1 MODE
//PROCEED WITH CAUTION
//...NO PLEASE ACTUALLY, ITS NOT FUN
//------------------------------------------------

function Moveallsprites() {
  //Stops All Sprites From Moving If Game Paused
  if (pausebutton == 1) {
      player.velocityY = 0;
      platform01.velocityY = 0;
      platform02.velocityY = 0;
      platform03.velocityY = 0;
      platform04.velocityY = 0;
      coin.velocityY = 0;
  } else {
    //If Not, Run Gravity And Movement For 
    //Platforms And Player And Coin
    if ((player.y) <= 100) {
      //Detects If Your In The Upper Part Of
      //The Screen And Moves Everything Faster Because
      //Of It
      platform01.velocityY = 2;
      platform02.velocityY = 2;
      platform03.velocityY = 2;
      platform04.velocityY = 2;
      player.velocityY = player.velocityY + 0.4;
      coin.velocityY = 4;
    } else {
      //OtherWise, Run Everything At Normal Speed
      platform04.velocityY = 0.25;
      platform03.velocityY = 0.25;
      platform02.velocityY = 0.25;
      platform01.velocityY = 0.25;
      player.velocityY = player.velocityY + 0.25;
      coin.velocityY = 1;
    }
    //... You Know I Don't Think This Part Of The
    //Code Does Anything Actually...
    //Cause code.org Already Stops You When You Collide With It
    if (player.isTouching(platform01)) {
      player.velocityY = 0;
    }
    if (player.isTouching(platform02)) {
      player.velocityY = 0;
    }
    if (player.isTouching(platform03)) {
      player.velocityY = 0;
    }
    if (player.isTouching(platform04)) {
      player.velocityY = 0;
    }
    //Changes Platform Sprite Color
    //And Moves Platforms Back Up To The Top
    //After They've Made It To The Bottom
    if (platform01.y >= 425) {
      if (original == 1) {
        //Uses That Useless Variable Again
        if (score >= 50) {
          platform01.setAnimation("platformoriginal_ice");
        } else {
          platform01.setAnimation("platformoriginal");
        }
      } else {
        if (score >= 50) {
          //Detects If It Should Use Ice Sprites
          if (platformvar == 0) {
            platform01.setAnimation("platform_1_ice");
          }
          if (platformvar == 1) {
            platform01.setAnimation("platform_2_ice");
          }
          if (platformvar == 2) {
            platform01.setAnimation("platform_3_ice");
          }
        } else {
          //Changes Sprite To Normal Colors Based On Score
          if (platformvar == 0) {
            platform01.setAnimation("platform");
          }
          if (platformvar == 1) {
            platform01.setAnimation("platform_2");
          }
          if (platformvar == 2) {
            platform01.setAnimation("platform_3");
          }
        }
      }
      //Actually Sets New Position
      platform01.y = -25;
      platform01.x = randomNumber(55, 345);
    }
    //Repeat Of Other Comments For The Next Few Lines
    if (platform02.y >= 425) {
      if (original == 1) {
        if (score >= 50) {
          platform02.setAnimation("platformoriginal_ice");
        } else {
          platform02.setAnimation("platformoriginal");
        }
      } else {
        if (score >= 50) {
          if (platformvar == 0) {
            platform02.setAnimation("platform_1_ice");
          }
          if (platformvar == 1) {
            platform02.setAnimation("platform_2_ice");
          }
          if (platformvar == 2) {
            platform02.setAnimation("platform_3_ice");
          }
        } else {
          if (platformvar == 0) {
            platform02.setAnimation("platform");
          }
          if (platformvar == 1) {
            platform02.setAnimation("platform_2");
          }
          if (platformvar == 2) {
            platform02.setAnimation("platform_3");
          }
        }
      }
      platform02.y = -25;
      platform02.x = randomNumber(50, 350);
    }
    if (platform03.y >= 425) {
      if (original == 1) {
        if (score >= 50) {
          platform03.setAnimation("platformoriginal_ice");
        } else {
          platform03.setAnimation("platformoriginal");
        }
      } else {
        if (score >= 50) {
          if (platformvar == 0) {
            platform03.setAnimation("platform_1_ice");
          }
          if (platformvar == 1) {
            platform03.setAnimation("platform_2_ice");
          }
          if (platformvar == 2) {
            platform03.setAnimation("platform_3_ice");
          }
        } else {
          if (platformvar == 0) {
            platform03.setAnimation("platform");
          }
          if (platformvar == 1) {
            platform03.setAnimation("platform_2");
          }
          if (platformvar == 2) {
            platform03.setAnimation("platform_3");
          }
        }
      }
      platform03.y = -25;
      platform03.x = randomNumber(50, 350);
    }
    if (platform04.y >= 425) {
      if (original == 1) {
        if (score >= 50) {
          platform04.setAnimation("platformoriginal_ice");
        } else {
          platform04.setAnimation("platformoriginal");
        }
      } else {
        if (score >= 50) {
          if (platformvar == 0) {
            platform04.setAnimation("platform_1_ice");
          }
          if (platformvar == 1) {
            platform04.setAnimation("platform_2_ice");
          }
          if (platformvar == 2) {
            platform04.setAnimation("platform_3_ice");
          }
        } else {
          if (platformvar == 0) {
            platform04.setAnimation("platform");
          }
          if (platformvar == 1) {
            platform04.setAnimation("platform_2");
          }
          if (platformvar == 2) {
            platform04.setAnimation("platform_3");
          }
        }
      }
      platform04.y = -25;
      platform04.x = randomNumber(50, 350);
    }
  }
}



function Touchstar() {
  //Changes Background After 5 Points
  if (pointcounter == 5) {
    backgroundchanger = 0;
    if (isMuted == 0) {
      if (arrowcounter != 7){
        playSound("assets/category_bell/choose_background.mp3", false);
      }
    }
    //Sets Point Count Till Next Background Change To 0
    pointcounter = 0;
  }
  //Detects If Player Touched It And Adds Points If It Did
  if (player.isTouching(coin)) {
    //Detects If Its Currently An Arrow Thing Based
    //On A Variable Thats Randomly Changed Every Time You
    //Collect A Coin
    if (arrowcounter == 7) {
      //Checks If Water Is Low Already And If It Is
      //Set Water To +80 On Its y Position
      if (black_cloud01.y >= 450) {
        black_cloud02.y = black_cloud01.y + 80;
        black_cloud01.y = black_cloud01.y + 80;
      } else {
        //Otherwise, Just Change It To y = 500
        black_cloud02.y = 500;
        black_cloud01.y = 500;
      }
      if(isMuted == 0){
        //Plays Special Sound Based On This
        playSound("assets/category_alerts/vibrant_game_correct_answer_hit.mp3", false);
      }
    } else {
      //Code That Doesnt Work
      //Was Supposed To Give An Arrow After Every 20 Points
      if (arrowcounter2 == 20) {
        if (black_cloud01.y >= 450) {
          black_cloud02.y = black_cloud01.y + 80;
          black_cloud01.y = black_cloud01.y + 80;
        } else {
          black_cloud02.y = 500;
          black_cloud01.y = 500;
        }
        if(isMuted == 0){
          playSound("assets/category_alerts/vibrant_game_correct_answer_hit.mp3", false);
        }
      } else {
        //Play Sound After Background Changes
        if (pointcounter == 5) {
          if(isMuted == 0){
            playSound("assets/category_bell/choose_background.mp3", false);
          }
          //Sets These Variables To 0
          backgroundchanger = 0;
          pointcounter = 0;
        } else if(isMuted == 0){
          playSound("assets/category_alerts/airy_bell_notification.mp3", false);
        }
      }
    }
    //Sets New Position For Coin
    coin.y = -500;
    //Sets Random Number To arrowcounter
    arrowcounter = randomNumber(1, 10);
    //Adds +1 to arrowcounter2
    arrowcounter2 = arrowcounter2 + 1;
    if (arrowcounter == 7) {
      //Sets Animation To Arrow If arrowcounter == 7
      //Also Resets Value Of arrowcounter2
      coin.setAnimation("coin_2");
      arrowcounter2 = 0;
    } else {
      //Doesnt work for some reason
      if (arrowcounter2 == 20) {
        coin.setAnimation("coin_2");
      } else {
        coin.setAnimation("coin_spin");
      }
    }
    //Adds Points
    pointcounter = pointcounter + 1;
    score = score + 1;
  }
  //Sets Position In Case Player Missed It
  if (coin.y >= 425) {
    coin.y = -500;
  }
}



function background1() {
  //Changes Background To A Random One
  //First, Right Here It Decides A Random Number
  //Its A Very "Complex" System For This To Make Sure It Doesnt
  //Use The Same Background As Before
  if (backgroundchanger == 0) {
    if (backgroundvar == 3) {
      backgroundvar = randomNumber(1, 2);
    } else {
      if (backgroundvar == 2) {
        backgroundrandomnumber = randomNumber(1, 2);
        if (backgroundrandomnumber == 1) {
          backgroundvar = 1;
        }
        if (backgroundrandomnumber == 2) {
          backgroundvar = 3;
        }
      } else {
        if (backgroundvar == 1) {
          backgroundvar = randomNumber(2, 3);
        } else {
          if (backgroundvar == 0) {
            backgroundvar = randomNumber(1, 3);
          }
        }
      }
    }
    backgroundchanger = 1;
  }
  //This Is Where It Actually Sets The Background Based On
  //The backgroundvar Variable
  if (backgroundvar == 3) {
    background("orange");
    sunspr.setAnimation("Sunset");
    platformvar = 1;
  }
  if (backgroundvar == 2) {
    background("darkBlue");
    sunspr.setAnimation("moon");
    platformvar = 2;
  }
  if (backgroundvar == 1) {
  background("lightblue");
  sunspr.setAnimation("Sun");
  platformvar = 0;
  }
  //This Background Is Never Used Unless A Major Error
  //Has Occured In How This Code Works
  if (backgroundvar == 0) {
    background("darkblue");
    sunspr.setAnimation("onceinabluemoon");
    platformvar = 0;
  }
  //This Makes Sure That No Matter What The First Background
  //Is Daytime
  //Yes I Know, There Was A Better Way Of Doing That
  //But I Made This After Only A Year Of Learning
  //How To Code :(
  if (score < 5) {
    background("lightblue");
    sunspr.setAnimation("Sun");
    platformvar = 0;
  }
}



function Charactermovestate() {
  //WHY DOES IT CHECK THE VISIBILITY OF THIS AGAIN
  //(Desk Banging Sounds)
  if (gameovertext.visible == 0) {
    //Idk Why Its Doing This Part Of The Code Again
    //It Already Did This Part Earlier
    if (pausebutton == 1) {
      if (debugvar == 5) {
        player.setAnimation("stick_still_re");
      } else {
        player.setAnimation("stick_still");
      }
      if (playerresume == 0) {
        playerresumevelocity = player.velocityY;
        playerresume = 1;
      }
      //Sets Velocity To 0
      player.velocityY = 0;
      player.velocityX = 0;
    } else {
      //Changes Sprites And Movement Based
      //On What Key You Push
      if (keyDown("up")) {
      if (debugvar == 5) {
        player.setAnimation("stick_up_re");
      } else {
        player.setAnimation("stick_up");
      }
    }
      if (keyWentUp("up")) {
        if (debugvar == 5) {
          player.setAnimation("stick_still_re");
       } else {
         player.setAnimation("stick_still");
       }
      }
     if (keyDown("down")) {
        if (debugvar == 5) {
          player.setAnimation("stick_duck_re");
          score = 50;
        } else {
          player.setAnimation("stick_duck");
        }
      }
      //For Both Left And Right, It Changes How Movement
      //Works When Ice Platforms Are Touched
      //WARNING: THIS PART OF THE CODE IS TERRIBLE IF YOU CANT TELL
      //Its Literally The Biggest If Statement Ive Ever Made
      if (keyDown("left")) {
        if (score >= 50 && player.isTouching(ice01)) {
          if (keyDown("shift")) {
            player.setAnimation("stick_run4");
            player.velocityX = player.velocityX - 0.2;
          } else {
            player.setAnimation("stick_run2");
            player.velocityX = player.velocityX - 0.1;
          }
        } else {
          if (score >= 50 && player.isTouching(ice02)) {
            if (keyDown("shift")) {
              player.setAnimation("stick_run4");
              player.velocityX = player.velocityX - 0.2;
            } else {
              player.setAnimation("stick_run2");
              player.velocityX = player.velocityX - 0.1;
            }
          } else {
            if (score >= 50 && player.isTouching(ice03)) {
              if (keyDown("shift")) {
                player.setAnimation("stick_run4");
                player.velocityX = player.velocityX - 0.2;
              } else {
                player.setAnimation("stick_run2");
                player.velocityX = player.velocityX - 0.1;
              }
            } else {
              if (score >= 50 && player.isTouching(ice04)) {
                if (keyDown("shift")) {
                  player.setAnimation("stick_run4");
                  player.velocityX = player.velocityX - 0.2;
                    } else {
                  player.setAnimation("stick_run2");
                  player.velocityX = player.velocityX - 0.1;
                    }
              } else {
                if (keyDown("shift")) {
                  player.setAnimation("stick_run4");
                  player.velocityX = -4;
                } else {
                  player.setAnimation("stick_run2");
                  player.velocityX = -2;
                }
              }
            }
          }
        }
      }
      //WHAT IS THIS???!?!?!???!
      if (keyDown("right")) {
        if (score >= 50 && player.isTouching(ice01)) {
          if (keyDown("shift")) {
            player.setAnimation("stick_run3");
            player.velocityX = player.velocityX + 0.2;
          } else {
            player.setAnimation("stick_run");
            player.velocityX = player.velocityX + 0.1;
          }
        } else {
          if (score >= 50 && player.isTouching(ice02)) {
            if (keyDown("shift")) {
              player.setAnimation("stick_run3");
              player.velocityX = player.velocityX + 0.2;
            } else {
              player.setAnimation("stick_run");
              player.velocityX = player.velocityX + 0.1;
            }
          } else {
            if (score >= 50 && player.isTouching(ice03)) {
              if (keyDown("shift")) {
                player.setAnimation("stick_run3");
                player.velocityX = player.velocityX + 0.2;
              } else {
                player.setAnimation("stick_run");
                player.velocityX = player.velocityX + 0.1;
              }
            } else {
              if (score >= 50 && player.isTouching(ice04)) {
                if (keyDown("shift")) {
                  player.setAnimation("stick_run3");
                  player.velocityX = player.velocityX + 0.2;
                } else {
                  player.setAnimation("stick_run");
                  player.velocityX = player.velocityX + 0.1;
                }
              } else {
                if (keyDown("shift")) {
                  player.setAnimation("stick_run3");
                  player.velocityX = 4;
                } else {
                  player.setAnimation("stick_run");
                  player.velocityX = 2;
                }
              }
            }
          }
        }
      }
      //Allows Player To Jump
      if (keyWentDown("space")) {
        player.velocityY = -7.5;
      }
      //Uses Jump Animation For When 2 Keys Are
      //Pushed Down At Once
      //This Is Just Bad
      if (keyDown("left")&&keyDown("space") ) {
        player.setAnimation("stick_jump2");
      }
      if (keyDown("right")&&keyDown("space")) {
        player.setAnimation("stick_jump");
      }
    }
  }
}



function Characternonmovestate() {
  //WHY IS THERE AN ENTIRE FUNCTION DEDICATED TO THIS?????????
  //Detects if Keys Arent Pushed Down Anymore
  //If Keys Are Released, It Stops Its Animation
  if (keyWentUp("down")) {
    if (debugvar == 5) {
      player.setAnimation("stick_still_re");
    } else {
      player.setAnimation("stick_still");
    }
  }
  if (keyWentUp("left")) {
    if (score >= 50 && player.isTouching(ice01)) {
      player.velocityX = player.velocityX + 0.1;
    } else {
      if (score >= 50 && player.isTouching(ice02)) {
        player.velocityX = player.velocityX + 0.1;
      } else {
        if (score >= 50 && player.isTouching(ice03)) {
          player.velocityX = player.velocityX + 0.1;
        } else {
          if (score >= 50 && player.isTouching(ice04)) {
            player.velocityX = player.velocityX + 0.1;
          } else {
            player.velocityX = 0;
          }
        }
      }
    }
    if (debugvar == 5) {
      player.setAnimation("stick_still_re");
    } else {
      player.setAnimation("stick_still");
    }
  }
  if (keyWentUp("right")) {
    if (score >= 50 && player.isTouching(ice01)) {
      player.velocityX = player.velocityX - 0.1;
    } else {
      if (score >= 50 && player.isTouching(ice02)) {
        player.velocityX = player.velocityX - 0.1;
      } else {
        if (score >= 50 && player.isTouching(ice03)) {
          player.velocityX = player.velocityX - 0.1;
        } else {
          if (score >= 50 && player.isTouching(ice04)) {
            player.velocityX = player.velocityX - 0.1;
          } else {
            player.velocityX = 0;
          }
        }
      }
    }
    if (debugvar == 5) {
      player.setAnimation("stick_still_re");
    } else {
      player.setAnimation("stick_still");
    }
  }
}



function showScore() {
  //Shows Score Text On Screen
  fill("white");
  textSize(20);
  text("Score: ",10, 10, 80, 20);
  text(score, 75, 10, 80, 20);
}
function Gameover() {
  //Checks For If Player Is Touching Water
  //Sets game_over To 1 If True
  if (player.isTouching(black_cloud01)) {
    platform01.visible = 0;
    platform02.visible = 0;
    platform03.visible = 0;
    platform04.visible = 0;
    black_cloud01.visible = 0;
    black_cloud02.visible = 0;
    coin.visible = 0;
    coin.y = -5000000;
    gameovertext.visible = 1;
    game_over = 1;
  }
  //Does The Same For Other Side Of Water
  if (player.isTouching(black_cloud02)) {
    platform01.visible = 0;
    platform02.visible = 0;
    platform03.visible = 0;
    platform04.visible = 0;
    black_cloud01.visible = 0;
    black_cloud02.visible = 0;
    coin.visible = 0;
    coin.y = -5000000;
    gameovertext.visible = 1;
    game_over = 1;
  }
  //Sets Gameover Animation To Correct Position
  //Based On The GAMEOVERTEXT VISIBILITY AGAIN?????????????????????
  if (gameovertext.visible == 1) {
    player.velocityY = 0;
    player.velocityX = 0;
    player.y = 100;
    player.x = 200;
  }
  //I ACTUALLY USED THE GAMEOVER VARIABLE THIS ONE TIME
  //Sets Gameover Animation To Player Sprite
  if (game_over == 1) {
    player.setAnimation("Stick_Gameover");
  }
}


function pausebuttonfunction() {
  //NO WAY I DID IT AGAIN
  //Runs Pause Menu
  //First, Makes Sure Gameover Variable Is 0
  if (game_over == 0) {
    //Shows And Hides Pause Menu
    if (keyWentDown("enter") && pausebutton == 1) {
      pausebuttoncounter = 1;
    }
    if (keyWentDown("enter") && pausebutton == 0) {
      pausebuttoncounter = 2;
    }
    //Sets Variables And Velocities To All Things Here
    if (pausebuttoncounter == 1) {
      pausetimer = pausetimer + 1;
      if (pausetimer >= 1) {
        pausebutton = 0;
        pausetimer = 0;
        pausebuttoncounter = 0;
        playerresume = 0;
        //I SWEAR WASNT THIS SOMEWHERE ELSE???!?!?!?
        player.velocityY = playerresumevelocity;
        menubutton.visible = 0;
        restartbutton.visible = 0;
        pauseicon.visible = 0;
        pausescreenbackground.visible = 0;
        playerresumevelocity = 0;
      }
    } else {
      if (pausebuttoncounter == 2) {
        pausetimer = pausetimer + 1;
        if (pausetimer >= 1) {
        pausebutton = 1;
        pausetimer = 0;
        pausebuttoncounter = 0;
        restartbutton.visible = 1;
        menubutton.visible = 1;
        menubutton.x = 200;
        menubutton.y = 275;
        menubutton.setAnimation("menu_text");
        pauseicon.visible = 1;
        pausescreenbackground.visible = 1;
    }
      }
    }
  }
}
//---------------------------------------------------
//END OF BAD CODE FOR PE1v67 MODE COMPATIBILITY
//PLEASE DONT COME BACK
//---------------------------------------------------

//Beyond This Point Is Compatibility Mode For 
//Older Versions Of The Game
//No New Comments Other Than Ones Already Added To 
//The Code Will Be Present

//These Are All Made As Tests To See If You Can Make 
//An Older Version Easily Compatibile
//And The Test Was A Success

//To Enable Using This Old Build, Please Set CurrentMenu
//To "V1 Comp" In The Varaibles Section At Startup

function BackwardsCompatibleBuildv1(){
  player.collide(platform01);
  player.collide(platform02);
  player.collide(platform03);
  player.collide(platform04);
  player.collide(edge01);
  player.collide(edge02);
  player.collide(edge03);
  if (score <= 25) {
    black_cloud01.y = black_cloud01.y - 0.05;
    black_cloud02.y = black_cloud02.y - 0.05;
  } else {
    if (score <= 50 && score >= 26) {
      black_cloud01.y = black_cloud01.y - 0.1;
      black_cloud02.y = black_cloud02.y - 0.1;
    }
  }
  Touchstarv1();
  // draw the background
  background1v1();
  background2v1();
   //Moveing The character across the screen
  Characternonmovestatev1();
  Charactermovestatev1();
  //Score
  showScorev1();
  // update the sprites
  Moveallspritesv1();
  Gameoverv1();
  drawSprites();
}

function Charactermovestatev1() {
  if (gameovertext.visible == 0) {
    if (keyDown("up")) {
      player.setAnimation("stick_up");
    }
    if (keyWentUp("up")) {
      player.setAnimation("stick_still");
    }
    if (keyDown("down")) {
      player.setAnimation("stick_duck");
    }
    if (keyDown("left")) {
      if (keyDown("shift")) {
        player.setAnimation("stick_run4");
        player.velocityX = -4;
      } else {
        player.setAnimation("stick_run2");
        player.velocityX = -2;
      }
    }
    if (keyDown("right")) {
      if (keyDown("shift")) {
        player.setAnimation("stick_run3");
        player.velocityX = 4;
      } else {
        player.setAnimation("stick_run");
        player.velocityX = 2;
      }
    }
    if (keyWentDown("space")) {
      player.velocityY = -5;
    }
    if (keyDown("left")&&keyDown("space") ) {
      player.setAnimation("stick_jump2");
    }
    if (keyDown("right")&&keyDown("space")) {
      player.setAnimation("stick_jump");
    }
    if (keyDown("right")&&keyWentDown("space")) {
      player.velocityY = -5;
    }
    if (keyDown("right")&&keyDown("space")&&player.isTouching(platform01)) {
      player.setAnimation("stick_run");
    }
    if (keyDown("right")&&keyDown("space")&&player.isTouching(platform02)) {
      player.setAnimation("stick_run");
    }
    if (keyDown("right")&&keyDown("space")&&player.isTouching(platform03)) {
      player.setAnimation("stick_run");
    }
    if (keyDown("right")&&keyDown("space")&&player.isTouching(platform04)) {
      player.setAnimation("stick_run");
    }
  }
}
function Moveallspritesv1() {
  if (player.y <= 100) {
    platform01.velocityY = 2;
    platform02.velocityY = 2;
    platform03.velocityY = 2;
    platform04.velocityY = 2;
    player.velocityY = player.velocityY + 0.50;
    coin.velocityY = 4;
  } else {
    platform04.velocityY = 0.25;
    platform03.velocityY = 0.25;
    platform02.velocityY = 0.25;
    platform01.velocityY = 0.25;
    player.velocityY = player.velocityY + 0.25;
    coin.velocityY = 1;
  }
  if (player.isTouching(platform01)) {
    player.velocityY = 0;
  }
  if (player.isTouching(platform02)) {
    player.velocityY = 0;
  }
  if (player.isTouching(platform03)) {
    player.velocityY = 0;
  }
  if (player.isTouching(platform04)) {
    player.velocityY = 0;
  }
  if (platform01.y >= 425) {
    platform01.y = -25;
    platform01.x = randomNumber(50, 350);
  }
  if (platform02.y >= 425) {
    platform02.y = -25;
    platform02.x = randomNumber(50, 350);
  }
  if (platform03.y >= 425) {
    platform03.y = -25;
    platform03.x = randomNumber(50, 350);
  }
  if (platform04.y >= 425) {
    platform04.y = -25;
    platform04.x = randomNumber(50, 350);
  }
}

// Functions
function background2v1() {
  if (score <= 4) {
    background("lightblue");
    noStroke();
    fill("yellow");
    ellipse(340, 50, 60, 60);
  }
}
function background1v1() {
  if (score > 4 && score < 10) {
    background("darkBlue");
    noStroke();
    fill("yellow");
    ellipse(340, 50, 60, 60);
    fill("darkBlue");
    ellipse(320, 30, 60, 60);
  }
  if (backgroundchanger == 0) {
    if (backgroundvar == 3) {
      backgroundvar = randomNumber(1, 2);
    } else {
      if (backgroundvar == 2) {
        var var3 = randomNumber(1, 2);
        if (var3 == 1) {
          backgroundvar = 1;
        }
        if (var3 == 2) {
          backgroundvar = 3;
        }
      } else {
        if (backgroundvar == 1) {
          backgroundvar = randomNumber(2, 3);
        } else {
          backgroundvar = randomNumber(1, 3);
          black_cloud01.y = black_cloud01.y - 0.05;
        }
      }
    }
    backgroundchanger = 1;
  }
  if (backgroundvar == 3) {
    background("orange");
    noStroke();
    fill("pink");
    ellipse(340, 50, 60, 60);
  }
  if (backgroundvar == 2) {
    background("darkBlue");
    noStroke();
    fill("yellow");
    ellipse(340, 50, 60, 60);
    fill("darkBlue");
    ellipse(320, 30, 60, 60);
  }
  if (backgroundvar == 1) {
  background("lightblue");
  noStroke();
  fill("yellow");
  ellipse(340, 50, 60, 60);
  }
  if (backgroundvar == 0) {
    background("white");
    fill("blue");
    text("Something has gone wrong, please try again", 200, 200);
  }
}
function Characternonmovestatev1() {
  if (keyWentUp("down")) {
    player.setAnimation("stick_still");
  }
  if (keyWentUp("left")) {
    player.setAnimation("stick_still");
    player.velocityX = 0;
  }
  if (keyWentUp("right")) {
    player.setAnimation("stick_still");
    player.velocityX = 0;
  }
}
function showScorev1() {
  fill("white");
  textSize(20);
  text("Score: ",10, 10, 80, 20);
  text(score, 75, 10, 80, 20);
}
function Touchstarv1() {
  if (player.isTouching(coin)) {
    if (arrowcounter2 == 7) {
      black_cloud02.y = 450;
      black_cloud01.y = 450;
      if(isMuted == 0){
        playSound("assets/category_alerts/vibrant_game_correct_answer_hit.mp3", false);
      }
    } else {
      if (arrowcounter == 4) {
        if(isMuted == 0){
          playSound("assets/category_bell/choose_background.mp3", false);
        }
        backgroundchanger = 0;
        arrowcounter = -1;
      } else {
        if (arrowcounter == 5) {
        if(isMuted == 0){
          playSound("assets/category_bell/choose_background.mp3", false);
        }
        backgroundchanger = 0;
        arrowcounter = -1;
        } else {
          if(isMuted == 0){
            playSound("assets/category_alerts/airy_bell_notification.mp3", false);
          }
        }
      }
    }
    coin.y = -500;
    arrowcounter2 = randomNumber(1, 10);
    if (arrowcounter2 == 7) {
      coin.setAnimation("coin_2");
    } else {
      coin.setAnimation("coin_spin");
    }
    arrowcounter = arrowcounter + 1;
    score = score + 1;
  }
  if (coin.y >= 425) {
    coin.y = -500;
  }
}
function Gameoverv1() {
  if (player.isTouching(black_cloud01)) {
    platform01.visible = 0;
    platform02.visible = 0;
    platform03.visible = 0;
    platform04.visible = 0;
    black_cloud01.visible = 0;
    black_cloud02.visible = 0;
    coin.visible = 0;
    coin.y = -5000000;
    gameovertext.visible = 1;
    game_over = 1;
  }
  if (player.isTouching(black_cloud02)) {
    platform01.visible = 0;
    platform02.visible = 0;
    platform03.visible = 0;
    platform04.visible = 0;
    black_cloud01.visible = 0;
    black_cloud02.visible = 0;
    coin.visible = 0;
    coin.y = -5000000;
    gameovertext.visible = 1;
    game_over = 1;
  }
  if (gameovertext.visible == 1) {
    player.velocityY = 0;
    player.velocityX = 0;
    player.y = 300;
    player.x = 200;
  }
  if (game_over == 1) {
    player.setAnimation("stick_game_over");
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
