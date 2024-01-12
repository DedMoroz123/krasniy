gdjs.Level2Code = {};
gdjs.Level2Code.GDPlayerObjects1= [];
gdjs.Level2Code.GDPlayerObjects2= [];
gdjs.Level2Code.GDPlayerObjects3= [];
gdjs.Level2Code.GDexitObjects1= [];
gdjs.Level2Code.GDexitObjects2= [];
gdjs.Level2Code.GDexitObjects3= [];
gdjs.Level2Code.GDPlatform1Objects1= [];
gdjs.Level2Code.GDPlatform1Objects2= [];
gdjs.Level2Code.GDPlatform1Objects3= [];
gdjs.Level2Code.GDblockObjects1= [];
gdjs.Level2Code.GDblockObjects2= [];
gdjs.Level2Code.GDblockObjects3= [];
gdjs.Level2Code.GDplatform2Objects1= [];
gdjs.Level2Code.GDplatform2Objects2= [];
gdjs.Level2Code.GDplatform2Objects3= [];
gdjs.Level2Code.GDvrag1Objects1= [];
gdjs.Level2Code.GDvrag1Objects2= [];
gdjs.Level2Code.GDvrag1Objects3= [];
gdjs.Level2Code.GDvpravoObjects1= [];
gdjs.Level2Code.GDvpravoObjects2= [];
gdjs.Level2Code.GDvpravoObjects3= [];
gdjs.Level2Code.GDvlevoObjects1= [];
gdjs.Level2Code.GDvlevoObjects2= [];
gdjs.Level2Code.GDvlevoObjects3= [];
gdjs.Level2Code.GDkust1Objects1= [];
gdjs.Level2Code.GDkust1Objects2= [];
gdjs.Level2Code.GDkust1Objects3= [];
gdjs.Level2Code.GDkluchObjects1= [];
gdjs.Level2Code.GDkluchObjects2= [];
gdjs.Level2Code.GDkluchObjects3= [];
gdjs.Level2Code.GDrichagObjects1= [];
gdjs.Level2Code.GDrichagObjects2= [];
gdjs.Level2Code.GDrichagObjects3= [];
gdjs.Level2Code.GDplatform3Objects1= [];
gdjs.Level2Code.GDplatform3Objects2= [];
gdjs.Level2Code.GDplatform3Objects3= [];
gdjs.Level2Code.GDyashikObjects1= [];
gdjs.Level2Code.GDyashikObjects2= [];
gdjs.Level2Code.GDyashikObjects3= [];
gdjs.Level2Code.GDdverObjects1= [];
gdjs.Level2Code.GDdverObjects2= [];
gdjs.Level2Code.GDdverObjects3= [];
gdjs.Level2Code.GDfakelObjects1= [];
gdjs.Level2Code.GDfakelObjects2= [];
gdjs.Level2Code.GDfakelObjects3= [];
gdjs.Level2Code.GDemblemaObjects1= [];
gdjs.Level2Code.GDemblemaObjects2= [];
gdjs.Level2Code.GDemblemaObjects3= [];
gdjs.Level2Code.GDplayObjects1= [];
gdjs.Level2Code.GDplayObjects2= [];
gdjs.Level2Code.GDplayObjects3= [];
gdjs.Level2Code.GDhithamObjects1= [];
gdjs.Level2Code.GDhithamObjects2= [];
gdjs.Level2Code.GDhithamObjects3= [];
gdjs.Level2Code.GDpauseObjects1= [];
gdjs.Level2Code.GDpauseObjects2= [];
gdjs.Level2Code.GDpauseObjects3= [];

gdjs.Level2Code.conditionTrue_0 = {val:false};
gdjs.Level2Code.condition0IsTrue_0 = {val:false};
gdjs.Level2Code.condition1IsTrue_0 = {val:false};
gdjs.Level2Code.condition2IsTrue_0 = {val:false};
gdjs.Level2Code.conditionTrue_1 = {val:false};
gdjs.Level2Code.condition0IsTrue_1 = {val:false};
gdjs.Level2Code.condition1IsTrue_1 = {val:false};
gdjs.Level2Code.condition2IsTrue_1 = {val:false};


gdjs.Level2Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Pause") > 0.3;
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "pause");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


};gdjs.Level2Code.eventsList1 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
/* Unknown instruction - skipped. */}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{/* Unknown instruction - skipped. */}}

}


};gdjs.Level2Code.eventsList2 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
/* Unknown instruction - skipped. */}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition1IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17435212);
}
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{/* Unknown instruction - skipped. */}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "pause");
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDvrag1Objects2Objects = Hashtable.newFrom({"vrag1": gdjs.Level2Code.GDvrag1Objects2});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDvpravoObjects2Objects = Hashtable.newFrom({"vpravo": gdjs.Level2Code.GDvpravoObjects2});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDvrag1Objects2Objects = Hashtable.newFrom({"vrag1": gdjs.Level2Code.GDvrag1Objects2});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDvlevoObjects2Objects = Hashtable.newFrom({"vlevo": gdjs.Level2Code.GDvlevoObjects2});
gdjs.Level2Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level2Code.GDvrag1Objects1, gdjs.Level2Code.GDvrag1Objects2);


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDvrag1Objects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDvrag1Objects2[i].getVariableNumber(gdjs.Level2Code.GDvrag1Objects2[i].getVariables().get("walk")) == 1 ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDvrag1Objects2[k] = gdjs.Level2Code.GDvrag1Objects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDvrag1Objects2.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDvrag1Objects2 */
{for(var i = 0, len = gdjs.Level2Code.GDvrag1Objects2.length ;i < len;++i) {
    gdjs.Level2Code.GDvrag1Objects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Level2Code.GDvrag1Objects2.length ;i < len;++i) {
    gdjs.Level2Code.GDvrag1Objects2[i].flipX(false);
}
}}

}


{

/* Reuse gdjs.Level2Code.GDvrag1Objects1 */

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDvrag1Objects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDvrag1Objects1[i].getVariableNumber(gdjs.Level2Code.GDvrag1Objects1[i].getVariables().get("walk")) == 0 ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDvrag1Objects1[k] = gdjs.Level2Code.GDvrag1Objects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDvrag1Objects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDvrag1Objects1 */
{for(var i = 0, len = gdjs.Level2Code.GDvrag1Objects1.length ;i < len;++i) {
    gdjs.Level2Code.GDvrag1Objects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Level2Code.GDvrag1Objects1.length ;i < len;++i) {
    gdjs.Level2Code.GDvrag1Objects1[i].flipX(true);
}
}}

}


};gdjs.Level2Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("vpravo"), gdjs.Level2Code.GDvpravoObjects2);
gdjs.copyArray(runtimeScene.getObjects("vrag1"), gdjs.Level2Code.GDvrag1Objects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDvrag1Objects2Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDvpravoObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDvrag1Objects2 */
{for(var i = 0, len = gdjs.Level2Code.GDvrag1Objects2.length ;i < len;++i) {
    gdjs.Level2Code.GDvrag1Objects2[i].returnVariable(gdjs.Level2Code.GDvrag1Objects2[i].getVariables().get("walk")).setNumber(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vlevo"), gdjs.Level2Code.GDvlevoObjects2);
gdjs.copyArray(runtimeScene.getObjects("vrag1"), gdjs.Level2Code.GDvrag1Objects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDvrag1Objects2Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDvlevoObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDvrag1Objects2 */
{for(var i = 0, len = gdjs.Level2Code.GDvrag1Objects2.length ;i < len;++i) {
    gdjs.Level2Code.GDvrag1Objects2[i].returnVariable(gdjs.Level2Code.GDvrag1Objects2[i].getVariables().get("walk")).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vrag1"), gdjs.Level2Code.GDvrag1Objects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDvrag1Objects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDvrag1Objects1[i].getAnimation() == 0 ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDvrag1Objects1[k] = gdjs.Level2Code.GDvrag1Objects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDvrag1Objects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level2Code.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDexitObjects2Objects = Hashtable.newFrom({"exit": gdjs.Level2Code.GDexitObjects2});
gdjs.Level2Code.eventsList5 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.Level2Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].playAnimation();
}
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimationName("Walk");
}
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimationName("Idel");
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].flipX(true);
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition1IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17445996);
}
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Blip1.wav", 1, false, 40, 1);
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimationName("Idel");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.Level2Code.GDexitObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDexitObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.Level2Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.Level2Code.userFunc0x101aae0 = function(runtimeScene) {
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
gdjs.Level2Code.eventsList7 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
}

}


{


{
}

}


{


gdjs.Level2Code.userFunc0x101aae0(runtimeScene);

}


};gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects2});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDkluchObjects2Objects = Hashtable.newFrom({"kluch": gdjs.Level2Code.GDkluchObjects2});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDdverObjects2Objects = Hashtable.newFrom({"dver": gdjs.Level2Code.GDdverObjects2});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects2});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDdverObjects2Objects = Hashtable.newFrom({"dver": gdjs.Level2Code.GDdverObjects2});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects1});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDdverObjects1Objects = Hashtable.newFrom({"dver": gdjs.Level2Code.GDdverObjects1});
gdjs.Level2Code.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("kluch"), gdjs.Level2Code.GDkluchObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDkluchObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDkluchObjects2 */
gdjs.Level2Code.GDdverObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDdverObjects2Objects, 219, 29, "");
}{for(var i = 0, len = gdjs.Level2Code.GDkluchObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDkluchObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Find_Item.ogg", 8, false, 10, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("dver"), gdjs.Level2Code.GDdverObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDdverObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}{gdjs.evtTools.storage.writeStringInJSONFile("Level", "Fase2", "Ok");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("dver"), gdjs.Level2Code.GDdverObjects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDdverObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition1IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17451612);
}
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Hero_Dies.ogg", 9, false, 10, 1);
}}

}


};gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects2});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDvrag1Objects2Objects = Hashtable.newFrom({"vrag1": gdjs.Level2Code.GDvrag1Objects2});
gdjs.Level2Code.asyncCallback17452980 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects3);

{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}}
gdjs.Level2Code.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Level2Code.GDPlayerObjects2) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Level2Code.asyncCallback17452980(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level2Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("vrag1"), gdjs.Level2Code.GDvrag1Objects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDvrag1Objects2Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Level2Code.eventsList9(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects1});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDvrag1Objects1Objects = Hashtable.newFrom({"vrag1": gdjs.Level2Code.GDvrag1Objects1});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects2});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDrichagObjects2Objects = Hashtable.newFrom({"richag": gdjs.Level2Code.GDrichagObjects2});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDplatform3Objects2Objects = Hashtable.newFrom({"platform3": gdjs.Level2Code.GDplatform3Objects2});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects1});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDrichagObjects1Objects = Hashtable.newFrom({"richag": gdjs.Level2Code.GDrichagObjects1});
gdjs.Level2Code.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("richag"), gdjs.Level2Code.GDrichagObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDrichagObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDrichagObjects2 */
gdjs.Level2Code.GDplatform3Objects2.length = 0;

{for(var i = 0, len = gdjs.Level2Code.GDrichagObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDrichagObjects2[i].setAnimationName("On");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDplatform3Objects2Objects, 44, 43, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("richag"), gdjs.Level2Code.GDrichagObjects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDrichagObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition1IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17456420);
}
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Low_Health.ogg", 10, false, 10, 1);
}}

}


};gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDexitObjects2Objects = Hashtable.newFrom({"exit": gdjs.Level2Code.GDexitObjects2});
gdjs.Level2Code.eventsList12 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};gdjs.Level2Code.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.Level2Code.GDexitObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDexitObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.Level2Code.eventsList12(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.Level2Code.eventsList14 = function(runtimeScene) {

{


gdjs.Level2Code.eventsList0(runtimeScene);
}


{


gdjs.Level2Code.eventsList2(runtimeScene);
}


{


gdjs.Level2Code.eventsList4(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("vlevo"), gdjs.Level2Code.GDvlevoObjects1);
gdjs.copyArray(runtimeScene.getObjects("vpravo"), gdjs.Level2Code.GDvpravoObjects1);
{for(var i = 0, len = gdjs.Level2Code.GDvpravoObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDvpravoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level2Code.GDvlevoObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDvlevoObjects1[i].hide();
}
}}

}


{


gdjs.Level2Code.eventsList6(runtimeScene);
}


{


gdjs.Level2Code.eventsList7(runtimeScene);
}


{


gdjs.Level2Code.eventsList8(runtimeScene);
}


{


gdjs.Level2Code.eventsList10(runtimeScene);
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

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("vrag1"), gdjs.Level2Code.GDvrag1Objects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDvrag1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition1IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17454556);
}
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Arrow.ogg", 7, false, 10, 1);
}}

}


{


gdjs.Level2Code.eventsList11(runtimeScene);
}


{


gdjs.Level2Code.eventsList13(runtimeScene);
}


};

gdjs.Level2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level2Code.GDPlayerObjects1.length = 0;
gdjs.Level2Code.GDPlayerObjects2.length = 0;
gdjs.Level2Code.GDPlayerObjects3.length = 0;
gdjs.Level2Code.GDexitObjects1.length = 0;
gdjs.Level2Code.GDexitObjects2.length = 0;
gdjs.Level2Code.GDexitObjects3.length = 0;
gdjs.Level2Code.GDPlatform1Objects1.length = 0;
gdjs.Level2Code.GDPlatform1Objects2.length = 0;
gdjs.Level2Code.GDPlatform1Objects3.length = 0;
gdjs.Level2Code.GDblockObjects1.length = 0;
gdjs.Level2Code.GDblockObjects2.length = 0;
gdjs.Level2Code.GDblockObjects3.length = 0;
gdjs.Level2Code.GDplatform2Objects1.length = 0;
gdjs.Level2Code.GDplatform2Objects2.length = 0;
gdjs.Level2Code.GDplatform2Objects3.length = 0;
gdjs.Level2Code.GDvrag1Objects1.length = 0;
gdjs.Level2Code.GDvrag1Objects2.length = 0;
gdjs.Level2Code.GDvrag1Objects3.length = 0;
gdjs.Level2Code.GDvpravoObjects1.length = 0;
gdjs.Level2Code.GDvpravoObjects2.length = 0;
gdjs.Level2Code.GDvpravoObjects3.length = 0;
gdjs.Level2Code.GDvlevoObjects1.length = 0;
gdjs.Level2Code.GDvlevoObjects2.length = 0;
gdjs.Level2Code.GDvlevoObjects3.length = 0;
gdjs.Level2Code.GDkust1Objects1.length = 0;
gdjs.Level2Code.GDkust1Objects2.length = 0;
gdjs.Level2Code.GDkust1Objects3.length = 0;
gdjs.Level2Code.GDkluchObjects1.length = 0;
gdjs.Level2Code.GDkluchObjects2.length = 0;
gdjs.Level2Code.GDkluchObjects3.length = 0;
gdjs.Level2Code.GDrichagObjects1.length = 0;
gdjs.Level2Code.GDrichagObjects2.length = 0;
gdjs.Level2Code.GDrichagObjects3.length = 0;
gdjs.Level2Code.GDplatform3Objects1.length = 0;
gdjs.Level2Code.GDplatform3Objects2.length = 0;
gdjs.Level2Code.GDplatform3Objects3.length = 0;
gdjs.Level2Code.GDyashikObjects1.length = 0;
gdjs.Level2Code.GDyashikObjects2.length = 0;
gdjs.Level2Code.GDyashikObjects3.length = 0;
gdjs.Level2Code.GDdverObjects1.length = 0;
gdjs.Level2Code.GDdverObjects2.length = 0;
gdjs.Level2Code.GDdverObjects3.length = 0;
gdjs.Level2Code.GDfakelObjects1.length = 0;
gdjs.Level2Code.GDfakelObjects2.length = 0;
gdjs.Level2Code.GDfakelObjects3.length = 0;
gdjs.Level2Code.GDemblemaObjects1.length = 0;
gdjs.Level2Code.GDemblemaObjects2.length = 0;
gdjs.Level2Code.GDemblemaObjects3.length = 0;
gdjs.Level2Code.GDplayObjects1.length = 0;
gdjs.Level2Code.GDplayObjects2.length = 0;
gdjs.Level2Code.GDplayObjects3.length = 0;
gdjs.Level2Code.GDhithamObjects1.length = 0;
gdjs.Level2Code.GDhithamObjects2.length = 0;
gdjs.Level2Code.GDhithamObjects3.length = 0;
gdjs.Level2Code.GDpauseObjects1.length = 0;
gdjs.Level2Code.GDpauseObjects2.length = 0;
gdjs.Level2Code.GDpauseObjects3.length = 0;

gdjs.Level2Code.eventsList14(runtimeScene);

return;

}

gdjs['Level2Code'] = gdjs.Level2Code;
