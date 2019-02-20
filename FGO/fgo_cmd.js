var CMD = {};

// 指向性技能
// all 是在场的所有从者数
// sel 是需要选中的从者数
// SKILL_SELXX(3, 2)
// 对第 2 个从者释放此指向性技能（选择框中共 3 人）
CMD.SKILL_SELXX = function(all, sel, duration){
	var error = 0;

    if ( all == 3 ){
    	if ( sel == 1 )
            CMD.SEL31(duration);
    	else if ( sel == 2)
            CMD.SEL32(duration);
    	else if ( sel == 3)
            CMD.SEL33(duration);
    	else
    		error = 1;
    }
    else if ( all == 2){
    	if ( sel == 1 )
            CMD.SEL21(duration);
    	else if ( sel == 2)
            CMD.SEL22(duration);
    	else
    		error = 1;
    }
    else if ( all == 1){
    	if ( sel == 1)
            CMD.SEL11(duration);
    	else
    		error = 1;
    }
    else
    	error = 1;

    if ( error ){
    	print('ER - skill sel servent')
    	return
    }
};

CMD.SWITCH_SERVENT = function(a, b){
	// a in [1, 2, 3]
	// b in [4, 5, 6]

	print('switch servent start');
	error = false;

	CMD.MS0();

	CMD.MS3();

	if ( a == 1 )
        CMD.S1();
	else if ( a == 2 )
        CMD.S2();
	else if ( a == 3 )
        CMD.S3();
	else{
		error = true;
		print('ER - switch servent parameter a');
	}

	if ( b == 4 )
        CMD.S4();
	else if ( b == 5 )
        CMD.S5();
	else if ( b == 6 )
        CMD.S6();
	else{
		error = true;
		print('ER - switch servent parameter b');
	}

	if (error)
		return;
	else{
		CMD.S0();
		print('switch servent end');
	}
};

CMD.A1 = function(all, sel, duration){
    // 'all' and 'duration' are multi-use ...
    // when only para 'all', use it as duration ...
    // ex : A1 skill to 'sel' / 'all' in sequence ...

    var all      = arguments[0] ? arguments[0] : 0;
    var sel      = arguments[1] ? arguments[1] : 0;
    var duration = arguments[0] ? arguments[0] : 3000;

    // if it is a specific skill for someone
    // then use 1.5ms instead 3s when no duration parameter
    if ( all * sel != 0 )
        duration = arguments[2] ? arguments[2] : 1500;

    click(102, 865);
    sleep(duration);

    if ( all * sel != 0 )
        CMD.SKILL_SELXX(all, sel);
};

CMD.A2 = function(all, sel, duration){
    // 'all' and 'duration' are multi-use ...
    // when only para 'all', use it as duration ...
    // ex : A1 skill to 'sel' / 'all' in sequence ...

    var all      = arguments[0] ? arguments[0] : 0;
    var sel      = arguments[1] ? arguments[1] : 0;
    var duration = arguments[0] ? arguments[0] : 3000;

    // if it is a specific skill for someone
    // then use 1.5ms instead 3s when no duration parameter
    if ( all * sel != 0 )
        duration = arguments[2] ? arguments[2] : 1500;

    click(245, 865);
    sleep(duration);

    if ( all * sel != 0 )
        CMD.SKILL_SELXX(all, sel);
};

CMD.A3 = function(all, sel, duration){
    // 'all' and 'duration' are multi-use ...
    // when only para 'all', use it as duration ...
    // ex : A1 skill to 'sel' / 'all' in sequence ...

    var all      = arguments[0] ? arguments[0] : 0;
    var sel      = arguments[1] ? arguments[1] : 0;
    var duration = arguments[0] ? arguments[0] : 3000;

    // if it is a specific skill for someone
    // then use 1.5ms instead 3s when no duration parameter
    if ( all * sel != 0 )
        duration = arguments[2] ? arguments[2] : 1500;

    click(392, 865);
    sleep(duration);

    if ( all * sel != 0 )
        CMD.SKILL_SELXX(all, sel);
};

CMD.B1 = function(all, sel, duration){
    // 'all' and 'duration' are multi-use ...
    // when only para 'all', use it as duration ...
    // ex : A1 skill to 'sel' / 'all' in sequence ...

    var all      = arguments[0] ? arguments[0] : 0;
    var sel      = arguments[1] ? arguments[1] : 0;
    var duration = arguments[0] ? arguments[0] : 3000;

    // if it is a specific skill for someone
    // then use 1.5ms instead 3s when no duration parameter
    if ( all * sel != 0 )
        duration = arguments[2] ? arguments[2] : 1500;

    click(585, 865);
    sleep(duration);

    if ( all * sel != 0 )
        CMD.SKILL_SELXX(all, sel);
};

CMD.B2 = function(all, sel, duration){
    // 'all' and 'duration' are multi-use ...
    // when only para 'all', use it as duration ...
    // ex : A1 skill to 'sel' / 'all' in sequence ...

    var all      = arguments[0] ? arguments[0] : 0;
    var sel      = arguments[1] ? arguments[1] : 0;
    var duration = arguments[0] ? arguments[0] : 3000;

    // if it is a specific skill for someone
    // then use 1.5ms instead 3s when no duration parameter
    if ( all * sel != 0 )
        duration = arguments[2] ? arguments[2] : 1500;

    click(725, 865);
    sleep(duration);

    if ( all * sel != 0 )
        CMD.SKILL_SELXX(all, sel);
};

CMD.B3 = function(all, sel, duration){
    // 'all' and 'duration' are multi-use ...
    // when only para 'all', use it as duration ...
    // ex : A1 skill to 'sel' / 'all' in sequence ...

    var all      = arguments[0] ? arguments[0] : 0;
    var sel      = arguments[1] ? arguments[1] : 0;
    var duration = arguments[0] ? arguments[0] : 3000;

    // if it is a specific skill for someone
    // then use 1.5ms instead 3s when no duration parameter
    if ( all * sel != 0 )
        duration = arguments[2] ? arguments[2] : 1500;

    click(875, 865);
    sleep(duration);

    if ( all * sel != 0 )
        CMD.SKILL_SELXX(all, sel);
};

CMD.C1 = function(all, sel, duration){
    // 'all' and 'duration' are multi-use ...
    // when only para 'all', use it as duration ...
    // ex : A1 skill to 'sel' / 'all' in sequence ...

    var all      = arguments[0] ? arguments[0] : 0;
    var sel      = arguments[1] ? arguments[1] : 0;
    var duration = arguments[0] ? arguments[0] : 3000;

    // if it is a specific skill for someone
    // then use 1.5ms instead 3s when no duration parameter
    if ( all * sel != 0 )
        duration = arguments[2] ? arguments[2] : 1500;

    click(1063, 865);
    sleep(duration);

    if ( all * sel != 0 )
        CMD.SKILL_SELXX(all, sel);
};

CMD.C2 = function(all, sel, duration){
    // 'all' and 'duration' are multi-use ...
    // when only para 'all', use it as duration ...
    // ex : A1 skill to 'sel' / 'all' in sequence ...

    var all      = arguments[0] ? arguments[0] : 0;
    var sel      = arguments[1] ? arguments[1] : 0;
    var duration = arguments[0] ? arguments[0] : 3000;

    // if it is a specific skill for someone
    // then use 1.5ms instead 3s when no duration parameter
    if ( all * sel != 0 )
        duration = arguments[2] ? arguments[2] : 1500;

    click(1203, 865);
    sleep(duration);

    if ( all * sel != 0 )
        CMD.SKILL_SELXX(all, sel);
};

CMD.C3 = function(all, sel, duration){
    // 'all' and 'duration' are multi-use ...
    // when only para 'all', use it as duration ...
    // ex : A1 skill to 'sel' / 'all' in sequence ...

    var all      = arguments[0] ? arguments[0] : 0;
    var sel      = arguments[1] ? arguments[1] : 0;
    var duration = arguments[0] ? arguments[0] : 3000;

    // if it is a specific skill for someone
    // then use 1.5ms instead 3s when no duration parameter
    if ( all * sel != 0 )
        duration = arguments[2] ? arguments[2] : 1500;

    click(1347, 865);
    sleep(duration);

    if ( all * sel != 0 )
        CMD.SKILL_SELXX(all, sel);
};

CMD.P1 = function(duration){
    var duration = arguments[0] ? arguments[0] : 1000;
    click(200, 800);
    sleep(duration);
};

CMD.P2 = function(duration){
    var duration = arguments[0] ? arguments[0] : 1000;
    click(580, 800);
    sleep(duration);
};

CMD.P3 = function(duration){
    var duration = arguments[0] ? arguments[0] : 1000;
    click(960, 800);
    sleep(duration);
};

CMD.P4 = function(duration){
    var duration = arguments[0] ? arguments[0] : 1000;
    click(1340, 800);
    sleep(duration);
};

CMD.P5 = function(duration){
    var duration = arguments[0] ? arguments[0] : 1000;
    click(1720, 800);
    sleep(duration);
};

CMD.EA = function(duration){
    var duration = arguments[0] ? arguments[0] : 1000;
    click(620, 340);
    sleep(duration);
};

CMD.EB = function(duration){
    var duration = arguments[0] ? arguments[0] : 1000;
    click(960, 340);
    sleep(duration);
};

CMD.EC = function(duration){
    var duration = arguments[0] ? arguments[0] : 1000;
    click(1300, 340);
    sleep(duration);
};

CMD.MS0 = function(duration){
    var duration = arguments[0] ? arguments[0] : 2000;
    click(1795, 480);
    sleep(duration);
};

CMD.MS1 = function(all, sel, duration){
    // 'all' and 'duration' are multi-use ...
    // when only para 'all', use it as duration ...
    // ex : A1 skill to 'sel' / 'all' in sequence ...

    var all      = arguments[0] ? arguments[0] : 0;
    var sel      = arguments[1] ? arguments[1] : 0;
    var duration = arguments[0] ? arguments[0] : 3000;

    // if it is a specific skill for someone
    // then use 1.5ms instead 3s when no duration parameter
    if ( all * sel != 0 )
        duration = arguments[2] ? arguments[2] : 1500;

    click(1360, 465);
    sleep(duration);

    if ( all * sel != 0 )
        CMD.SKILL_SELXX(all, sel);
};

CMD.MS2 = function(all, sel, duration){
    // 'all' and 'duration' are multi-use ...
    // when only para 'all', use it as duration ...
    // ex : A1 skill to 'sel' / 'all' in sequence ...

    var all      = arguments[0] ? arguments[0] : 0;
    var sel      = arguments[1] ? arguments[1] : 0;
    var duration = arguments[0] ? arguments[0] : 3000;

    // if it is a specific skill for someone
    // then use 1.5ms instead 3s when no duration parameter
    if ( all * sel != 0 )
        duration = arguments[2] ? arguments[2] : 1500;

    click(1495, 465);
    sleep(duration);

    if ( all * sel != 0 )
        CMD.SKILL_SELXX(all, sel);
};

CMD.MS3 = function(all, sel, duration){
    // 'all' and 'duration' are multi-use ...
    // when only para 'all', use it as duration ...
    // ex : A1 skill to 'sel' / 'all' in sequence ...

    var all      = arguments[0] ? arguments[0] : 0;
    var sel      = arguments[1] ? arguments[1] : 0;
    var duration = arguments[0] ? arguments[0] : 3000;

    // if it is a specific skill for someone
    // then use 1.5ms instead 3s when no duration parameter
    if ( all * sel != 0 )
        duration = arguments[2] ? arguments[2] : 1500;

    click(1630, 465);
    sleep(duration);

    if ( all * sel != 0 )
        CMD.SKILL_SELXX(all, sel);
};

CMD.DR1 = function(duration){
    var duration = arguments[0] ? arguments[0] : 1000;
    click(70, 60);
    sleep(duration);
};

CMD.DR2 = function(duration){
    var duration = arguments[0] ? arguments[0] : 1000;
    click(435, 60);
    sleep(duration);
};

CMD.DR3 = function(duration){
    var duration = arguments[0] ? arguments[0] : 1000;
    click(800, 60);
    sleep(duration);
};

CMD.SEL0 = function(duration){
    var duration = arguments[0] ? arguments[0] : 1000;
    click(1649, 225);
    sleep(duration);
};

CMD.SEL31 = function(duration){
    var duration = arguments[0] ? arguments[0] : 5000;
    click(482, 720);
    sleep(duration);
};

CMD.SEL32 = function(duration){
    var duration = arguments[0] ? arguments[0] : 5000;
    click(992, 720);
    sleep(duration);
};

CMD.SEL33 = function(duration){
    var duration = arguments[0] ? arguments[0] : 5000;
    click(1446, 720);
    sleep(duration);
};

CMD.SEL21 = function(duration){
    var duration = arguments[0] ? arguments[0] : 5000;
    click(0, 0);
    sleep(duration);
};

CMD.SEL22 = function(duration){
    var duration = arguments[0] ? arguments[0] : 5000;
    click(0, 0);
    sleep(duration);
};

CMD.SEL11 = function(duration){
    var duration = arguments[0] ? arguments[0] : 5000;
    click(0, 0);
    sleep(duration);
};

CMD.S0 = function(duration){
    var duration = arguments[0] ? arguments[0] : 10000;
    click(963, 936);
    sleep(duration);
};

CMD.S1 = function(duration){
    var duration = arguments[0] ? arguments[0] : 1000;
    click(220, 520);
    sleep(duration);
};

CMD.S2 = function(duration){
    var duration = arguments[0] ? arguments[0] : 1000;
    click(520, 520);
    sleep(duration);
};

CMD.S3 = function(duration){
    var duration = arguments[0] ? arguments[0] : 1000;
    click(820, 520);
    sleep(duration);
};

CMD.S4 = function(duration){
    var duration = arguments[0] ? arguments[0] : 1000;
    click(1120, 520);
    sleep(duration);
};

CMD.S5 = function(duration){
    var duration = arguments[0] ? arguments[0] : 1000;
    click(1420, 520);
    sleep(duration);
};

CMD.S6 = function(duration){
    var duration = arguments[0] ? arguments[0] : 1000;
    click(1720, 520);
    sleep(duration);
};

CMD.ATK = function(duration){
    var duration = arguments[0] ? arguments[0] : 2000;
    click(1700, 900);
    sleep(duration);
};

CMD.START = function(duration){
    var duration = arguments[0] ? arguments[0] : 30000;
    click(1780, 1010);
    sleep(duration);
};

CMD.NEXT = function(duration){
    var duration = arguments[0] ? arguments[0] : 1000;
    click(1660, 1010);
    sleep(duration);
};

module.exports = CMD;

