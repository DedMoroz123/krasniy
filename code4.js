gdjs.Level1Code = {};
gdjs.Level1Code.GDPlayerObjects1= [];
gdjs.Level1Code.GDPlayerObjects2= [];
gdjs.Level1Code.GDPlayerObjects3= [];
gdjs.Level1Code.GDexitObjects1= [];
gdjs.Level1Code.GDexitObjects2= [];
gdjs.Level1Code.GDexitObjects3= [];
gdjs.Level1Code.GDPlatform1Objects1= [];
gdjs.Level1Code.GDPlatform1Objects2= [];
gdjs.Level1Code.GDPlatform1Objects3= [];
gdjs.Level1Code.GDblockObjects1= [];
gdjs.Level1Code.GDblockObjects2= [];
gdjs.Level1Code.GDblockObjects3= [];
gdjs.Level1Code.GDplatform2Objects1= [];
gdjs.Level1Code.GDplatform2Objects2= [];
gdjs.Level1Code.GDplatform2Objects3= [];
gdjs.Level1Code.GDvrag1Objects1= [];
gdjs.Level1Code.GDvrag1Objects2= [];
gdjs.Level1Code.GDvrag1Objects3= [];
gdjs.Level1Code.GDvpravoObjects1= [];
gdjs.Level1Code.GDvpravoObjects2= [];
gdjs.Level1Code.GDvpravoObjects3= [];
gdjs.Level1Code.GDvlevoObjects1= [];
gdjs.Level1Code.GDvlevoObjects2= [];
gdjs.Level1Code.GDvlevoObjects3= [];
gdjs.Level1Code.GDkust1Objects1= [];
gdjs.Level1Code.GDkust1Objects2= [];
gdjs.Level1Code.GDkust1Objects3= [];
gdjs.Level1Code.GDkluchObjects1= [];
gdjs.Level1Code.GDkluchObjects2= [];
gdjs.Level1Code.GDkluchObjects3= [];
gdjs.Level1Code.GDrichagObjects1= [];
gdjs.Level1Code.GDrichagObjects2= [];
gdjs.Level1Code.GDrichagObjects3= [];
gdjs.Level1Code.GDplatform3Objects1= [];
gdjs.Level1Code.GDplatform3Objects2= [];
gdjs.Level1Code.GDplatform3Objects3= [];
gdjs.Level1Code.GDyashikObjects1= [];
gdjs.Level1Code.GDyashikObjects2= [];
gdjs.Level1Code.GDyashikObjects3= [];
gdjs.Level1Code.GDdverObjects1= [];
gdjs.Level1Code.GDdverObjects2= [];
gdjs.Level1Code.GDdverObjects3= [];
gdjs.Level1Code.GDfakelObjects1= [];
gdjs.Level1Code.GDfakelObjects2= [];
gdjs.Level1Code.GDfakelObjects3= [];
gdjs.Level1Code.GDemblemaObjects1= [];
gdjs.Level1Code.GDemblemaObjects2= [];
gdjs.Level1Code.GDemblemaObjects3= [];
gdjs.Level1Code.GDstrelaObjects1= [];
gdjs.Level1Code.GDstrelaObjects2= [];
gdjs.Level1Code.GDstrelaObjects3= [];
gdjs.Level1Code.GDstrela2Objects1= [];
gdjs.Level1Code.GDstrela2Objects2= [];
gdjs.Level1Code.GDstrela2Objects3= [];

gdjs.Level1Code.conditionTrue_0 = {val:false};
gdjs.Level1Code.condition0IsTrue_0 = {val:false};
gdjs.Level1Code.condition1IsTrue_0 = {val:false};
gdjs.Level1Code.condition2IsTrue_0 = {val:false};
gdjs.Level1Code.conditionTrue_1 = {val:false};
gdjs.Level1Code.condition0IsTrue_1 = {val:false};
gdjs.Level1Code.condition1IsTrue_1 = {val:false};
gdjs.Level1Code.condition2IsTrue_1 = {val:false};


gdjs.Level1Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDvrag1Objects2Objects = Hashtable.newFrom({"vrag1": gdjs.Level1Code.GDvrag1Objects2});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDvpravoObjects2Objects = Hashtable.newFrom({"vpravo": gdjs.Level1Code.GDvpravoObjects2});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDvrag1Objects2Objects = Hashtable.newFrom({"vrag1": gdjs.Level1Code.GDvrag1Objects2});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDvlevoObjects2Objects = Hashtable.newFrom({"vlevo": gdjs.Level1Code.GDvlevoObjects2});
gdjs.Level1Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level1Code.GDvrag1Objects1, gdjs.Level1Code.GDvrag1Objects2);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDvrag1Objects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDvrag1Objects2[i].getVariableNumber(gdjs.Level1Code.GDvrag1Objects2[i].getVariables().get("walk")) == 1 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDvrag1Objects2[k] = gdjs.Level1Code.GDvrag1Objects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDvrag1Objects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDvrag1Objects2 */
{for(var i = 0, len = gdjs.Level1Code.GDvrag1Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDvrag1Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Level1Code.GDvrag1Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDvrag1Objects2[i].flipX(false);
}
}}

}


{

/* Reuse gdjs.Level1Code.GDvrag1Objects1 */

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDvrag1Objects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDvrag1Objects1[i].getVariableNumber(gdjs.Level1Code.GDvrag1Objects1[i].getVariables().get("walk")) == 0 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDvrag1Objects1[k] = gdjs.Level1Code.GDvrag1Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDvrag1Objects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDvrag1Objects1 */
{for(var i = 0, len = gdjs.Level1Code.GDvrag1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDvrag1Objects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Level1Code.GDvrag1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDvrag1Objects1[i].flipX(true);
}
}}

}


};gdjs.Level1Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("vpravo"), gdjs.Level1Code.GDvpravoObjects2);
gdjs.copyArray(runtimeScene.getObjects("vrag1"), gdjs.Level1Code.GDvrag1Objects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDvrag1Objects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDvpravoObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDvrag1Objects2 */
{for(var i = 0, len = gdjs.Level1Code.GDvrag1Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDvrag1Objects2[i].returnVariable(gdjs.Level1Code.GDvrag1Objects2[i].getVariables().get("walk")).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vlevo"), gdjs.Level1Code.GDvlevoObjects2);
gdjs.copyArray(runtimeScene.getObjects("vrag1"), gdjs.Level1Code.GDvrag1Objects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDvrag1Objects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDvlevoObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDvrag1Objects2 */
{for(var i = 0, len = gdjs.Level1Code.GDvrag1Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDvrag1Objects2[i].returnVariable(gdjs.Level1Code.GDvrag1Objects2[i].getVariables().get("walk")).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vrag1"), gdjs.Level1Code.GDvrag1Objects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDvrag1Objects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDvrag1Objects1[i].getAnimation() == 0 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDvrag1Objects1[k] = gdjs.Level1Code.GDvrag1Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDvrag1Objects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level1Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDexitObjects2Objects = Hashtable.newFrom({"exit": gdjs.Level1Code.GDexitObjects2});
gdjs.Level1Code.eventsList3 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.Level1Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].playAnimation();
}
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setAnimationName("Walk");
}
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setAnimationName("Idel");
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].flipX(true);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17376516);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Blip1.wav", 1, false, 40, 1);
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setAnimationName("Idel");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.Level1Code.GDexitObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDexitObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.Level1Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.Level1Code.userFunc0x1019c20 = function(runtimeScene) {
"use strict";
function handleVisibilityChange() {
    if (document.hidden) {
  runtimeScene.getSoundManager().setGlobalVolume(0);
  sound && sound.pause();
    
  } else {
    runtimeScene.getSoundManager().setGlobalVolume(50);
    if (sound && !sound.playing()) sound.play();
    }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);
};
gdjs.Level1Code.eventsList5 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
}

}


{


{
}

}


{


gdjs.Level1Code.userFunc0x1019c20(runtimeScene);

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects2});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDkluchObjects2Objects = Hashtable.newFrom({"kluch": gdjs.Level1Code.GDkluchObjects2});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDdverObjects2Objects = Hashtable.newFrom({"dver": gdjs.Level1Code.GDdverObjects2});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDstrela2Objects2Objects = Hashtable.newFrom({"strela2": gdjs.Level1Code.GDstrela2Objects2});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects2});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDdverObjects2Objects = Hashtable.newFrom({"dver": gdjs.Level1Code.GDdverObjects2});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDdverObjects1Objects = Hashtable.newFrom({"dver": gdjs.Level1Code.GDdverObjects1});
gdjs.Level1Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("kluch"), gdjs.Level1Code.GDkluchObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDkluchObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDkluchObjects2 */
gdjs.copyArray(runtimeScene.getObjects("strela"), gdjs.Level1Code.GDstrelaObjects2);
gdjs.Level1Code.GDdverObjects2.length = 0;

gdjs.Level1Code.GDstrela2Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDdverObjects2Objects, 219, 110, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDstrela2Objects2Objects, 221, 96, "");
}{for(var i = 0, len = gdjs.Level1Code.GDkluchObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDkluchObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDstrelaObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDstrelaObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Find_Item.ogg", 8, false, 10, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("dver"), gdjs.Level1Code.GDdverObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDdverObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}{gdjs.evtTools.storage.writeStringInJSONFile("Level", "Fase1", "Ok");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("dver"), gdjs.Level1Code.GDdverObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDdverObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17382804);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Hero_Dies.ogg", 9, false, 10, 1);
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects2});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDvrag1Objects2Objects = Hashtable.newFrom({"vrag1": gdjs.Level1Code.GDvrag1Objects2});
gdjs.Level1Code.asyncCallback17384172 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects3);

{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}
gdjs.Level1Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Level1Code.GDPlayerObjects2) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Level1Code.asyncCallback17384172(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level1Code.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("vrag1"), gdjs.Level1Code.GDvrag1Objects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDvrag1Objects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Level1Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDvrag1Objects1Objects = Hashtable.newFrom({"vrag1": gdjs.Level1Code.GDvrag1Objects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects2});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDrichagObjects2Objects = Hashtable.newFrom({"richag": gdjs.Level1Code.GDrichagObjects2});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDplatform3Objects2Objects = Hashtable.newFrom({"platform3": gdjs.Level1Code.GDplatform3Objects2});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDrichagObjects1Objects = Hashtable.newFrom({"richag": gdjs.Level1Code.GDrichagObjects1});
gdjs.Level1Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("richag"), gdjs.Level1Code.GDrichagObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDrichagObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDrichagObjects2 */
gdjs.Level1Code.GDplatform3Objects2.length = 0;

{for(var i = 0, len = gdjs.Level1Code.GDrichagObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDrichagObjects2[i].setAnimationName("On");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDplatform3Objects2Objects, 79, 86, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("richag"), gdjs.Level1Code.GDrichagObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDrichagObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17387732);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Low_Health.ogg", 10, false, 10, 1);
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDexitObjects2Objects = Hashtable.newFrom({"exit": gdjs.Level1Code.GDexitObjects2});
gdjs.Level1Code.eventsList10 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};gdjs.Level1Code.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.Level1Code.GDexitObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDexitObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.Level1Code.eventsList10(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.Level1Code.eventsList12 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Pause") > 0.3;
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "pause");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


};gdjs.Level1Code.eventsList13 = function(runtimeScene) {

{


gdjs.Level1Code.eventsList0(runtimeScene);
}


{


gdjs.Level1Code.eventsList2(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("vlevo"), gdjs.Level1Code.GDvlevoObjects1);
gdjs.copyArray(runtimeScene.getObjects("vpravo"), gdjs.Level1Code.GDvpravoObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDvpravoObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDvpravoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDvlevoObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDvlevoObjects1[i].hide();
}
}}

}


{


gdjs.Level1Code.eventsList4(runtimeScene);
}


{


gdjs.Level1Code.eventsList5(runtimeScene);
}


{


gdjs.Level1Code.eventsList6(runtimeScene);
}


{


gdjs.Level1Code.eventsList8(runtimeScene);
}


{


{
}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("vrag1"), gdjs.Level1Code.GDvrag1Objects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDvrag1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17385748);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Arrow.ogg", 7, false, 10, 1);
}}

}


{


gdjs.Level1Code.eventsList9(runtimeScene);
}


{


gdjs.Level1Code.eventsList11(runtimeScene);
}


{


gdjs.Level1Code.eventsList12(runtimeScene);
}


{


{
}

}


};

gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDPlayerObjects1.length = 0;
gdjs.Level1Code.GDPlayerObjects2.length = 0;
gdjs.Level1Code.GDPlayerObjects3.length = 0;
gdjs.Level1Code.GDexitObjects1.length = 0;
gdjs.Level1Code.GDexitObjects2.length = 0;
gdjs.Level1Code.GDexitObjects3.length = 0;
gdjs.Level1Code.GDPlatform1Objects1.length = 0;
gdjs.Level1Code.GDPlatform1Objects2.length = 0;
gdjs.Level1Code.GDPlatform1Objects3.length = 0;
gdjs.Level1Code.GDblockObjects1.length = 0;
gdjs.Level1Code.GDblockObjects2.length = 0;
gdjs.Level1Code.GDblockObjects3.length = 0;
gdjs.Level1Code.GDplatform2Objects1.length = 0;
gdjs.Level1Code.GDplatform2Objects2.length = 0;
gdjs.Level1Code.GDplatform2Objects3.length = 0;
gdjs.Level1Code.GDvrag1Objects1.length = 0;
gdjs.Level1Code.GDvrag1Objects2.length = 0;
gdjs.Level1Code.GDvrag1Objects3.length = 0;
gdjs.Level1Code.GDvpravoObjects1.length = 0;
gdjs.Level1Code.GDvpravoObjects2.length = 0;
gdjs.Level1Code.GDvpravoObjects3.length = 0;
gdjs.Level1Code.GDvlevoObjects1.length = 0;
gdjs.Level1Code.GDvlevoObjects2.length = 0;
gdjs.Level1Code.GDvlevoObjects3.length = 0;
gdjs.Level1Code.GDkust1Objects1.length = 0;
gdjs.Level1Code.GDkust1Objects2.length = 0;
gdjs.Level1Code.GDkust1Objects3.length = 0;
gdjs.Level1Code.GDkluchObjects1.length = 0;
gdjs.Level1Code.GDkluchObjects2.length = 0;
gdjs.Level1Code.GDkluchObjects3.length = 0;
gdjs.Level1Code.GDrichagObjects1.length = 0;
gdjs.Level1Code.GDrichagObjects2.length = 0;
gdjs.Level1Code.GDrichagObjects3.length = 0;
gdjs.Level1Code.GDplatform3Objects1.length = 0;
gdjs.Level1Code.GDplatform3Objects2.length = 0;
gdjs.Level1Code.GDplatform3Objects3.length = 0;
gdjs.Level1Code.GDyashikObjects1.length = 0;
gdjs.Level1Code.GDyashikObjects2.length = 0;
gdjs.Level1Code.GDyashikObjects3.length = 0;
gdjs.Level1Code.GDdverObjects1.length = 0;
gdjs.Level1Code.GDdverObjects2.length = 0;
gdjs.Level1Code.GDdverObjects3.length = 0;
gdjs.Level1Code.GDfakelObjects1.length = 0;
gdjs.Level1Code.GDfakelObjects2.length = 0;
gdjs.Level1Code.GDfakelObjects3.length = 0;
gdjs.Level1Code.GDemblemaObjects1.length = 0;
gdjs.Level1Code.GDemblemaObjects2.length = 0;
gdjs.Level1Code.GDemblemaObjects3.length = 0;
gdjs.Level1Code.GDstrelaObjects1.length = 0;
gdjs.Level1Code.GDstrelaObjects2.length = 0;
gdjs.Level1Code.GDstrelaObjects3.length = 0;
gdjs.Level1Code.GDstrela2Objects1.length = 0;
gdjs.Level1Code.GDstrela2Objects2.length = 0;
gdjs.Level1Code.GDstrela2Objects3.length = 0;

gdjs.Level1Code.eventsList13(runtimeScene);

return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
