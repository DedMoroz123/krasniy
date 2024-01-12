gdjs.MainCode = {};
gdjs.MainCode.GDpl_95menuObjects1= [];
gdjs.MainCode.GDpl_95menuObjects2= [];
gdjs.MainCode.GDpl_95menuObjects3= [];
gdjs.MainCode.GDpl_95menuObjects4= [];
gdjs.MainCode.GDnachat_95ugru_95buttonObjects1= [];
gdjs.MainCode.GDnachat_95ugru_95buttonObjects2= [];
gdjs.MainCode.GDnachat_95ugru_95buttonObjects3= [];
gdjs.MainCode.GDnachat_95ugru_95buttonObjects4= [];
gdjs.MainCode.GDZvukObjects1= [];
gdjs.MainCode.GDZvukObjects2= [];
gdjs.MainCode.GDZvukObjects3= [];
gdjs.MainCode.GDZvukObjects4= [];
gdjs.MainCode.GDENGObjects1= [];
gdjs.MainCode.GDENGObjects2= [];
gdjs.MainCode.GDENGObjects3= [];
gdjs.MainCode.GDENGObjects4= [];
gdjs.MainCode.GDrusObjects1= [];
gdjs.MainCode.GDrusObjects2= [];
gdjs.MainCode.GDrusObjects3= [];
gdjs.MainCode.GDrusObjects4= [];

gdjs.MainCode.conditionTrue_0 = {val:false};
gdjs.MainCode.condition0IsTrue_0 = {val:false};
gdjs.MainCode.condition1IsTrue_0 = {val:false};
gdjs.MainCode.condition2IsTrue_0 = {val:false};
gdjs.MainCode.conditionTrue_1 = {val:false};
gdjs.MainCode.condition0IsTrue_1 = {val:false};
gdjs.MainCode.condition1IsTrue_1 = {val:false};
gdjs.MainCode.condition2IsTrue_1 = {val:false};


gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDZvukObjects2Objects = Hashtable.newFrom({"Zvuk": gdjs.MainCode.GDZvukObjects2});
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Mute").add(1);
}}

}


{

/* Reuse gdjs.MainCode.GDZvukObjects2 */

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDZvukObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDZvukObjects2[i].isVisible() ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDZvukObjects2[k] = gdjs.MainCode.GDZvukObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDZvukObjects2.length = k;}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9635468);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
}

}


};gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 0;
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9636228);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Zvuk"), gdjs.MainCode.GDZvukObjects2);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 50);
}{for(var i = 0, len = gdjs.MainCode.GDZvukObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDZvukObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 1;
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9637220);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Zvuk"), gdjs.MainCode.GDZvukObjects2);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{for(var i = 0, len = gdjs.MainCode.GDZvukObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDZvukObjects2[i].setAnimation(1);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 2;
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9638308);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Mute").setNumber(0);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
}

}


};gdjs.MainCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Zvuk"), gdjs.MainCode.GDZvukObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDZvukObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{

{ //Subevents
gdjs.MainCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.eventsList3 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
/* Unknown instruction - skipped. */}if (gdjs.MainCode.condition0IsTrue_0.val) {
{/* Unknown instruction - skipped. */}}

}


};gdjs.MainCode.eventsList4 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
/* Unknown instruction - skipped. */}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9641268);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
{/* Unknown instruction - skipped. */}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDnachat_9595ugru_9595buttonObjects2Objects = Hashtable.newFrom({"nachat_ugru_button": gdjs.MainCode.GDnachat_95ugru_95buttonObjects2});
gdjs.MainCode.eventsList5 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ViborLvl", false);
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDpl_9595menuObjects2Objects = Hashtable.newFrom({"pl_menu": gdjs.MainCode.GDpl_95menuObjects2});
gdjs.MainCode.eventsList6 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ViborLvl", false);
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDrusObjects2Objects = Hashtable.newFrom({"rus": gdjs.MainCode.GDrusObjects2});
gdjs.MainCode.eventsList7 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDENGObjects2Objects = Hashtable.newFrom({"ENG": gdjs.MainCode.GDENGObjects2});
gdjs.MainCode.eventsList8 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main_eng", false);
}}

}


};gdjs.MainCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("nachat_ugru_button"), gdjs.MainCode.GDnachat_95ugru_95buttonObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDnachat_9595ugru_9595buttonObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.MainCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pl_menu"), gdjs.MainCode.GDpl_95menuObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDpl_9595menuObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.MainCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("rus"), gdjs.MainCode.GDrusObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDrusObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.MainCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ENG"), gdjs.MainCode.GDENGObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDENGObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.MainCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.MainCode.eventsList10 = function(runtimeScene) {

{


gdjs.MainCode.eventsList2(runtimeScene);
}


{


gdjs.MainCode.eventsList4(runtimeScene);
}


{


{
}

}


{


gdjs.MainCode.eventsList9(runtimeScene);
}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDpl_95menuObjects1.length = 0;
gdjs.MainCode.GDpl_95menuObjects2.length = 0;
gdjs.MainCode.GDpl_95menuObjects3.length = 0;
gdjs.MainCode.GDpl_95menuObjects4.length = 0;
gdjs.MainCode.GDnachat_95ugru_95buttonObjects1.length = 0;
gdjs.MainCode.GDnachat_95ugru_95buttonObjects2.length = 0;
gdjs.MainCode.GDnachat_95ugru_95buttonObjects3.length = 0;
gdjs.MainCode.GDnachat_95ugru_95buttonObjects4.length = 0;
gdjs.MainCode.GDZvukObjects1.length = 0;
gdjs.MainCode.GDZvukObjects2.length = 0;
gdjs.MainCode.GDZvukObjects3.length = 0;
gdjs.MainCode.GDZvukObjects4.length = 0;
gdjs.MainCode.GDENGObjects1.length = 0;
gdjs.MainCode.GDENGObjects2.length = 0;
gdjs.MainCode.GDENGObjects3.length = 0;
gdjs.MainCode.GDENGObjects4.length = 0;
gdjs.MainCode.GDrusObjects1.length = 0;
gdjs.MainCode.GDrusObjects2.length = 0;
gdjs.MainCode.GDrusObjects3.length = 0;
gdjs.MainCode.GDrusObjects4.length = 0;

gdjs.MainCode.eventsList10(runtimeScene);

return;

}

gdjs['MainCode'] = gdjs.MainCode;
