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