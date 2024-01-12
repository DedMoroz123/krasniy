gdjs.ViborLvlCode = {};
gdjs.ViborLvlCode.GDpl_95menuObjects1= [];
gdjs.ViborLvlCode.GDpl_95menuObjects2= [];
gdjs.ViborLvlCode.GDpl_95menuObjects3= [];
gdjs.ViborLvlCode.GDpl_95menuObjects4= [];
gdjs.ViborLvlCode.GDnachat_95ugru_95buttonObjects1= [];
gdjs.ViborLvlCode.GDnachat_95ugru_95buttonObjects2= [];
gdjs.ViborLvlCode.GDnachat_95ugru_95buttonObjects3= [];
gdjs.ViborLvlCode.GDnachat_95ugru_95buttonObjects4= [];
gdjs.ViborLvlCode.GDZvukObjects1= [];
gdjs.ViborLvlCode.GDZvukObjects2= [];
gdjs.ViborLvlCode.GDZvukObjects3= [];
gdjs.ViborLvlCode.GDZvukObjects4= [];
gdjs.ViborLvlCode.GDLevel1Objects1= [];
gdjs.ViborLvlCode.GDLevel1Objects2= [];
gdjs.ViborLvlCode.GDLevel1Objects3= [];
gdjs.ViborLvlCode.GDLevel1Objects4= [];
gdjs.ViborLvlCode.GDLevel2Objects1= [];
gdjs.ViborLvlCode.GDLevel2Objects2= [];
gdjs.ViborLvlCode.GDLevel2Objects3= [];
gdjs.ViborLvlCode.GDLevel2Objects4= [];
gdjs.ViborLvlCode.GDLevel3Objects1= [];
gdjs.ViborLvlCode.GDLevel3Objects2= [];
gdjs.ViborLvlCode.GDLevel3Objects3= [];
gdjs.ViborLvlCode.GDLevel3Objects4= [];
gdjs.ViborLvlCode.GDLevel4Objects1= [];
gdjs.ViborLvlCode.GDLevel4Objects2= [];
gdjs.ViborLvlCode.GDLevel4Objects3= [];
gdjs.ViborLvlCode.GDLevel4Objects4= [];
gdjs.ViborLvlCode.GDLevel5Objects1= [];
gdjs.ViborLvlCode.GDLevel5Objects2= [];
gdjs.ViborLvlCode.GDLevel5Objects3= [];
gdjs.ViborLvlCode.GDLevel5Objects4= [];
gdjs.ViborLvlCode.GDLevel6Objects1= [];
gdjs.ViborLvlCode.GDLevel6Objects2= [];
gdjs.ViborLvlCode.GDLevel6Objects3= [];
gdjs.ViborLvlCode.GDLevel6Objects4= [];
gdjs.ViborLvlCode.GDnazadObjects1= [];
gdjs.ViborLvlCode.GDnazadObjects2= [];
gdjs.ViborLvlCode.GDnazadObjects3= [];
gdjs.ViborLvlCode.GDnazadObjects4= [];
gdjs.ViborLvlCode.GDLevel7Objects1= [];
gdjs.ViborLvlCode.GDLevel7Objects2= [];
gdjs.ViborLvlCode.GDLevel7Objects3= [];
gdjs.ViborLvlCode.GDLevel7Objects4= [];
gdjs.ViborLvlCode.GDLevel8Objects1= [];
gdjs.ViborLvlCode.GDLevel8Objects2= [];
gdjs.ViborLvlCode.GDLevel8Objects3= [];
gdjs.ViborLvlCode.GDLevel8Objects4= [];
gdjs.ViborLvlCode.GDLevel9Objects1= [];
gdjs.ViborLvlCode.GDLevel9Objects2= [];
gdjs.ViborLvlCode.GDLevel9Objects3= [];
gdjs.ViborLvlCode.GDLevel9Objects4= [];
gdjs.ViborLvlCode.GDLevel10Objects1= [];
gdjs.ViborLvlCode.GDLevel10Objects2= [];
gdjs.ViborLvlCode.GDLevel10Objects3= [];
gdjs.ViborLvlCode.GDLevel10Objects4= [];
gdjs.ViborLvlCode.GDLevel11Objects1= [];
gdjs.ViborLvlCode.GDLevel11Objects2= [];
gdjs.ViborLvlCode.GDLevel11Objects3= [];
gdjs.ViborLvlCode.GDLevel11Objects4= [];
gdjs.ViborLvlCode.GDLevel12Objects1= [];
gdjs.ViborLvlCode.GDLevel12Objects2= [];
gdjs.ViborLvlCode.GDLevel12Objects3= [];
gdjs.ViborLvlCode.GDLevel12Objects4= [];

gdjs.ViborLvlCode.conditionTrue_0 = {val:false};
gdjs.ViborLvlCode.condition0IsTrue_0 = {val:false};
gdjs.ViborLvlCode.condition1IsTrue_0 = {val:false};
gdjs.ViborLvlCode.condition2IsTrue_0 = {val:false};
gdjs.ViborLvlCode.conditionTrue_1 = {val:false};
gdjs.ViborLvlCode.condition0IsTrue_1 = {val:false};
gdjs.ViborLvlCode.condition1IsTrue_1 = {val:false};
gdjs.ViborLvlCode.condition2IsTrue_1 = {val:false};


gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDZvukObjects2Objects = Hashtable.newFrom({"Zvuk": gdjs.ViborLvlCode.GDZvukObjects2});
gdjs.ViborLvlCode.eventsList0 = function(runtimeScene) {

{


gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ViborLvlCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Mute").add(1);
}}

}


{

/* Reuse gdjs.ViborLvlCode.GDZvukObjects2 */

gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
gdjs.ViborLvlCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ViborLvlCode.GDZvukObjects2.length;i<l;++i) {
    if ( gdjs.ViborLvlCode.GDZvukObjects2[i].isVisible() ) {
        gdjs.ViborLvlCode.condition0IsTrue_0.val = true;
        gdjs.ViborLvlCode.GDZvukObjects2[k] = gdjs.ViborLvlCode.GDZvukObjects2[i];
        ++k;
    }
}
gdjs.ViborLvlCode.GDZvukObjects2.length = k;}if ( gdjs.ViborLvlCode.condition0IsTrue_0.val ) {
{
{gdjs.ViborLvlCode.conditionTrue_1 = gdjs.ViborLvlCode.condition1IsTrue_0;
gdjs.ViborLvlCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9679756);
}
}}
if (gdjs.ViborLvlCode.condition1IsTrue_0.val) {
}

}


};gdjs.ViborLvlCode.eventsList1 = function(runtimeScene) {

{


gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
gdjs.ViborLvlCode.condition1IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 0;
}if ( gdjs.ViborLvlCode.condition0IsTrue_0.val ) {
{
{gdjs.ViborLvlCode.conditionTrue_1 = gdjs.ViborLvlCode.condition1IsTrue_0;
gdjs.ViborLvlCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9680588);
}
}}
if (gdjs.ViborLvlCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Zvuk"), gdjs.ViborLvlCode.GDZvukObjects2);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 50);
}{for(var i = 0, len = gdjs.ViborLvlCode.GDZvukObjects2.length ;i < len;++i) {
    gdjs.ViborLvlCode.GDZvukObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
gdjs.ViborLvlCode.condition1IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 1;
}if ( gdjs.ViborLvlCode.condition0IsTrue_0.val ) {
{
{gdjs.ViborLvlCode.conditionTrue_1 = gdjs.ViborLvlCode.condition1IsTrue_0;
gdjs.ViborLvlCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9681652);
}
}}
if (gdjs.ViborLvlCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Zvuk"), gdjs.ViborLvlCode.GDZvukObjects2);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{for(var i = 0, len = gdjs.ViborLvlCode.GDZvukObjects2.length ;i < len;++i) {
    gdjs.ViborLvlCode.GDZvukObjects2[i].setAnimation(1);
}
}}

}


{


gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
gdjs.ViborLvlCode.condition1IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 2;
}if ( gdjs.ViborLvlCode.condition0IsTrue_0.val ) {
{
{gdjs.ViborLvlCode.conditionTrue_1 = gdjs.ViborLvlCode.condition1IsTrue_0;
gdjs.ViborLvlCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9682740);
}
}}
if (gdjs.ViborLvlCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Mute").setNumber(0);
}}

}


{


gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ViborLvlCode.condition0IsTrue_0.val) {
}

}


};gdjs.ViborLvlCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Zvuk"), gdjs.ViborLvlCode.GDZvukObjects2);

gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDZvukObjects2Objects, runtimeScene, true, false);
}if (gdjs.ViborLvlCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.ViborLvlCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{

{ //Subevents
gdjs.ViborLvlCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.ViborLvlCode.eventsList3 = function(runtimeScene) {

{


gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ViborLvlCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDnazadObjects2Objects = Hashtable.newFrom({"nazad": gdjs.ViborLvlCode.GDnazadObjects2});
gdjs.ViborLvlCode.eventsList4 = function(runtimeScene) {

{


gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ViborLvlCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};gdjs.ViborLvlCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("nazad"), gdjs.ViborLvlCode.GDnazadObjects2);

gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDnazadObjects2Objects, runtimeScene, true, false);
}if (gdjs.ViborLvlCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.ViborLvlCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel1Objects2Objects = Hashtable.newFrom({"Level1": gdjs.ViborLvlCode.GDLevel1Objects2});
gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel2Objects2Objects = Hashtable.newFrom({"Level2": gdjs.ViborLvlCode.GDLevel2Objects2});
gdjs.ViborLvlCode.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.ViborLvlCode.GDLevel2Objects2 */

gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
gdjs.ViborLvlCode.condition1IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ViborLvlCode.condition0IsTrue_0.val ) {
{
gdjs.ViborLvlCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel2Objects2Objects, runtimeScene, true, false);
}}
if (gdjs.ViborLvlCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}}

}


};gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel3Objects2Objects = Hashtable.newFrom({"Level3": gdjs.ViborLvlCode.GDLevel3Objects2});
gdjs.ViborLvlCode.eventsList7 = function(runtimeScene) {

{

/* Reuse gdjs.ViborLvlCode.GDLevel3Objects2 */

gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
gdjs.ViborLvlCode.condition1IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ViborLvlCode.condition0IsTrue_0.val ) {
{
gdjs.ViborLvlCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel3Objects2Objects, runtimeScene, true, false);
}}
if (gdjs.ViborLvlCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}}

}


};gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel4Objects2Objects = Hashtable.newFrom({"Level4": gdjs.ViborLvlCode.GDLevel4Objects2});
gdjs.ViborLvlCode.eventsList8 = function(runtimeScene) {

{

/* Reuse gdjs.ViborLvlCode.GDLevel4Objects2 */

gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
gdjs.ViborLvlCode.condition1IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ViborLvlCode.condition0IsTrue_0.val ) {
{
gdjs.ViborLvlCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel4Objects2Objects, runtimeScene, true, false);
}}
if (gdjs.ViborLvlCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level4", false);
}}

}


};gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel5Objects2Objects = Hashtable.newFrom({"Level5": gdjs.ViborLvlCode.GDLevel5Objects2});
gdjs.ViborLvlCode.eventsList9 = function(runtimeScene) {

{

/* Reuse gdjs.ViborLvlCode.GDLevel5Objects2 */

gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
gdjs.ViborLvlCode.condition1IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ViborLvlCode.condition0IsTrue_0.val ) {
{
gdjs.ViborLvlCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel5Objects2Objects, runtimeScene, true, false);
}}
if (gdjs.ViborLvlCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level5", false);
}}

}


};gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel6Objects2Objects = Hashtable.newFrom({"Level6": gdjs.ViborLvlCode.GDLevel6Objects2});
gdjs.ViborLvlCode.eventsList10 = function(runtimeScene) {

{

/* Reuse gdjs.ViborLvlCode.GDLevel6Objects2 */

gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
gdjs.ViborLvlCode.condition1IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ViborLvlCode.condition0IsTrue_0.val ) {
{
gdjs.ViborLvlCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel6Objects2Objects, runtimeScene, true, false);
}}
if (gdjs.ViborLvlCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level6", false);
}}

}


};gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel7Objects2Objects = Hashtable.newFrom({"Level7": gdjs.ViborLvlCode.GDLevel7Objects2});
gdjs.ViborLvlCode.eventsList11 = function(runtimeScene) {

{

/* Reuse gdjs.ViborLvlCode.GDLevel7Objects2 */

gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
gdjs.ViborLvlCode.condition1IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ViborLvlCode.condition0IsTrue_0.val ) {
{
gdjs.ViborLvlCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel7Objects2Objects, runtimeScene, true, false);
}}
if (gdjs.ViborLvlCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level7", false);
}}

}


};gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel8Objects2Objects = Hashtable.newFrom({"Level8": gdjs.ViborLvlCode.GDLevel8Objects2});
gdjs.ViborLvlCode.eventsList12 = function(runtimeScene) {

{

/* Reuse gdjs.ViborLvlCode.GDLevel8Objects2 */

gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
gdjs.ViborLvlCode.condition1IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ViborLvlCode.condition0IsTrue_0.val ) {
{
gdjs.ViborLvlCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel8Objects2Objects, runtimeScene, true, false);
}}
if (gdjs.ViborLvlCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level8", false);
}}

}


};gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel9Objects2Objects = Hashtable.newFrom({"Level9": gdjs.ViborLvlCode.GDLevel9Objects2});
gdjs.ViborLvlCode.eventsList13 = function(runtimeScene) {

{

/* Reuse gdjs.ViborLvlCode.GDLevel9Objects2 */

gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
gdjs.ViborLvlCode.condition1IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ViborLvlCode.condition0IsTrue_0.val ) {
{
gdjs.ViborLvlCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel9Objects2Objects, runtimeScene, true, false);
}}
if (gdjs.ViborLvlCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level9", false);
}}

}


};gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel10Objects2Objects = Hashtable.newFrom({"Level10": gdjs.ViborLvlCode.GDLevel10Objects2});
gdjs.ViborLvlCode.eventsList14 = function(runtimeScene) {

{

/* Reuse gdjs.ViborLvlCode.GDLevel10Objects2 */

gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
gdjs.ViborLvlCode.condition1IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ViborLvlCode.condition0IsTrue_0.val ) {
{
gdjs.ViborLvlCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel10Objects2Objects, runtimeScene, true, false);
}}
if (gdjs.ViborLvlCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level10", false);
}}

}


};gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel11Objects2Objects = Hashtable.newFrom({"Level11": gdjs.ViborLvlCode.GDLevel11Objects2});
gdjs.ViborLvlCode.eventsList15 = function(runtimeScene) {

{

/* Reuse gdjs.ViborLvlCode.GDLevel11Objects2 */

gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
gdjs.ViborLvlCode.condition1IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ViborLvlCode.condition0IsTrue_0.val ) {
{
gdjs.ViborLvlCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel11Objects2Objects, runtimeScene, true, false);
}}
if (gdjs.ViborLvlCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level11", false);
}}

}


};gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel12Objects1Objects = Hashtable.newFrom({"Level12": gdjs.ViborLvlCode.GDLevel12Objects1});
gdjs.ViborLvlCode.eventsList16 = function(runtimeScene) {

{

/* Reuse gdjs.ViborLvlCode.GDLevel12Objects1 */

gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
gdjs.ViborLvlCode.condition1IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ViborLvlCode.condition0IsTrue_0.val ) {
{
gdjs.ViborLvlCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel12Objects1Objects, runtimeScene, true, false);
}}
if (gdjs.ViborLvlCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level12", false);
}}

}


};gdjs.ViborLvlCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Level1"), gdjs.ViborLvlCode.GDLevel1Objects2);

gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
gdjs.ViborLvlCode.condition1IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ViborLvlCode.condition0IsTrue_0.val ) {
{
gdjs.ViborLvlCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ViborLvlCode.mapOfGDgdjs_46ViborLvlCode_46GDLevel1Objects2Objects, runtimeScene, true, false);
}}
if (gdjs.ViborLvlCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


{


gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Level", "Fase1");
}if (gdjs.ViborLvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Level2"), gdjs.ViborLvlCode.GDLevel2Objects2);
{for(var i = 0, len = gdjs.ViborLvlCode.GDLevel2Objects2.length ;i < len;++i) {
    gdjs.ViborLvlCode.GDLevel2Objects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.ViborLvlCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Level", "Fase2");
}if (gdjs.ViborLvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Level3"), gdjs.ViborLvlCode.GDLevel3Objects2);
{for(var i = 0, len = gdjs.ViborLvlCode.GDLevel3Objects2.length ;i < len;++i) {
    gdjs.ViborLvlCode.GDLevel3Objects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.ViborLvlCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Level", "Fase3");
}if (gdjs.ViborLvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Level4"), gdjs.ViborLvlCode.GDLevel4Objects2);
{for(var i = 0, len = gdjs.ViborLvlCode.GDLevel4Objects2.length ;i < len;++i) {
    gdjs.ViborLvlCode.GDLevel4Objects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.ViborLvlCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Level", "Fase4");
}if (gdjs.ViborLvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Level5"), gdjs.ViborLvlCode.GDLevel5Objects2);
{for(var i = 0, len = gdjs.ViborLvlCode.GDLevel5Objects2.length ;i < len;++i) {
    gdjs.ViborLvlCode.GDLevel5Objects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.ViborLvlCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Level", "Fase5");
}if (gdjs.ViborLvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Level6"), gdjs.ViborLvlCode.GDLevel6Objects2);
{for(var i = 0, len = gdjs.ViborLvlCode.GDLevel6Objects2.length ;i < len;++i) {
    gdjs.ViborLvlCode.GDLevel6Objects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.ViborLvlCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Level", "Fase6");
}if (gdjs.ViborLvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Level7"), gdjs.ViborLvlCode.GDLevel7Objects2);
{for(var i = 0, len = gdjs.ViborLvlCode.GDLevel7Objects2.length ;i < len;++i) {
    gdjs.ViborLvlCode.GDLevel7Objects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.ViborLvlCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Level", "Fase7");
}if (gdjs.ViborLvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Level8"), gdjs.ViborLvlCode.GDLevel8Objects2);
{for(var i = 0, len = gdjs.ViborLvlCode.GDLevel8Objects2.length ;i < len;++i) {
    gdjs.ViborLvlCode.GDLevel8Objects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.ViborLvlCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Level", "Fase8");
}if (gdjs.ViborLvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Level9"), gdjs.ViborLvlCode.GDLevel9Objects2);
{for(var i = 0, len = gdjs.ViborLvlCode.GDLevel9Objects2.length ;i < len;++i) {
    gdjs.ViborLvlCode.GDLevel9Objects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.ViborLvlCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Level", "Fase9");
}if (gdjs.ViborLvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Level10"), gdjs.ViborLvlCode.GDLevel10Objects2);
{for(var i = 0, len = gdjs.ViborLvlCode.GDLevel10Objects2.length ;i < len;++i) {
    gdjs.ViborLvlCode.GDLevel10Objects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.ViborLvlCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Level", "Fase10");
}if (gdjs.ViborLvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Level11"), gdjs.ViborLvlCode.GDLevel11Objects2);
{for(var i = 0, len = gdjs.ViborLvlCode.GDLevel11Objects2.length ;i < len;++i) {
    gdjs.ViborLvlCode.GDLevel11Objects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.ViborLvlCode.eventsList15(runtimeScene);} //End of subevents
}

}


{


gdjs.ViborLvlCode.condition0IsTrue_0.val = false;
{
gdjs.ViborLvlCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("Level", "Fase11");
}if (gdjs.ViborLvlCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Level12"), gdjs.ViborLvlCode.GDLevel12Objects1);
{for(var i = 0, len = gdjs.ViborLvlCode.GDLevel12Objects1.length ;i < len;++i) {
    gdjs.ViborLvlCode.GDLevel12Objects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.ViborLvlCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.ViborLvlCode.eventsList18 = function(runtimeScene) {

{


gdjs.ViborLvlCode.eventsList2(runtimeScene);
}


{


gdjs.ViborLvlCode.eventsList3(runtimeScene);
}


{


{
}

}


{


gdjs.ViborLvlCode.eventsList5(runtimeScene);
}


{


gdjs.ViborLvlCode.eventsList17(runtimeScene);
}


{


{
}

}


};

gdjs.ViborLvlCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ViborLvlCode.GDpl_95menuObjects1.length = 0;
gdjs.ViborLvlCode.GDpl_95menuObjects2.length = 0;
gdjs.ViborLvlCode.GDpl_95menuObjects3.length = 0;
gdjs.ViborLvlCode.GDpl_95menuObjects4.length = 0;
gdjs.ViborLvlCode.GDnachat_95ugru_95buttonObjects1.length = 0;
gdjs.ViborLvlCode.GDnachat_95ugru_95buttonObjects2.length = 0;
gdjs.ViborLvlCode.GDnachat_95ugru_95buttonObjects3.length = 0;
gdjs.ViborLvlCode.GDnachat_95ugru_95buttonObjects4.length = 0;
gdjs.ViborLvlCode.GDZvukObjects1.length = 0;
gdjs.ViborLvlCode.GDZvukObjects2.length = 0;
gdjs.ViborLvlCode.GDZvukObjects3.length = 0;
gdjs.ViborLvlCode.GDZvukObjects4.length = 0;
gdjs.ViborLvlCode.GDLevel1Objects1.length = 0;
gdjs.ViborLvlCode.GDLevel1Objects2.length = 0;
gdjs.ViborLvlCode.GDLevel1Objects3.length = 0;
gdjs.ViborLvlCode.GDLevel1Objects4.length = 0;
gdjs.ViborLvlCode.GDLevel2Objects1.length = 0;
gdjs.ViborLvlCode.GDLevel2Objects2.length = 0;
gdjs.ViborLvlCode.GDLevel2Objects3.length = 0;
gdjs.ViborLvlCode.GDLevel2Objects4.length = 0;
gdjs.ViborLvlCode.GDLevel3Objects1.length = 0;
gdjs.ViborLvlCode.GDLevel3Objects2.length = 0;
gdjs.ViborLvlCode.GDLevel3Objects3.length = 0;
gdjs.ViborLvlCode.GDLevel3Objects4.length = 0;
gdjs.ViborLvlCode.GDLevel4Objects1.length = 0;
gdjs.ViborLvlCode.GDLevel4Objects2.length = 0;
gdjs.ViborLvlCode.GDLevel4Objects3.length = 0;
gdjs.ViborLvlCode.GDLevel4Objects4.length = 0;
gdjs.ViborLvlCode.GDLevel5Objects1.length = 0;
gdjs.ViborLvlCode.GDLevel5Objects2.length = 0;
gdjs.ViborLvlCode.GDLevel5Objects3.length = 0;
gdjs.ViborLvlCode.GDLevel5Objects4.length = 0;
gdjs.ViborLvlCode.GDLevel6Objects1.length = 0;
gdjs.ViborLvlCode.GDLevel6Objects2.length = 0;
gdjs.ViborLvlCode.GDLevel6Objects3.length = 0;
gdjs.ViborLvlCode.GDLevel6Objects4.length = 0;
gdjs.ViborLvlCode.GDnazadObjects1.length = 0;
gdjs.ViborLvlCode.GDnazadObjects2.length = 0;
gdjs.ViborLvlCode.GDnazadObjects3.length = 0;
gdjs.ViborLvlCode.GDnazadObjects4.length = 0;
gdjs.ViborLvlCode.GDLevel7Objects1.length = 0;
gdjs.ViborLvlCode.GDLevel7Objects2.length = 0;
gdjs.ViborLvlCode.GDLevel7Objects3.length = 0;
gdjs.ViborLvlCode.GDLevel7Objects4.length = 0;
gdjs.ViborLvlCode.GDLevel8Objects1.length = 0;
gdjs.ViborLvlCode.GDLevel8Objects2.length = 0;
gdjs.ViborLvlCode.GDLevel8Objects3.length = 0;
gdjs.ViborLvlCode.GDLevel8Objects4.length = 0;
gdjs.ViborLvlCode.GDLevel9Objects1.length = 0;
gdjs.ViborLvlCode.GDLevel9Objects2.length = 0;
gdjs.ViborLvlCode.GDLevel9Objects3.length = 0;
gdjs.ViborLvlCode.GDLevel9Objects4.length = 0;
gdjs.ViborLvlCode.GDLevel10Objects1.length = 0;
gdjs.ViborLvlCode.GDLevel10Objects2.length = 0;
gdjs.ViborLvlCode.GDLevel10Objects3.length = 0;
gdjs.ViborLvlCode.GDLevel10Objects4.length = 0;
gdjs.ViborLvlCode.GDLevel11Objects1.length = 0;
gdjs.ViborLvlCode.GDLevel11Objects2.length = 0;
gdjs.ViborLvlCode.GDLevel11Objects3.length = 0;
gdjs.ViborLvlCode.GDLevel11Objects4.length = 0;
gdjs.ViborLvlCode.GDLevel12Objects1.length = 0;
gdjs.ViborLvlCode.GDLevel12Objects2.length = 0;
gdjs.ViborLvlCode.GDLevel12Objects3.length = 0;
gdjs.ViborLvlCode.GDLevel12Objects4.length = 0;

gdjs.ViborLvlCode.eventsList18(runtimeScene);

return;

}

gdjs['ViborLvlCode'] = gdjs.ViborLvlCode;
