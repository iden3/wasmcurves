Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region build/bn128_wasm_gzip.js
var bn128_wasm_gzip_exports = /* @__PURE__ */ __exportAll({
	gzipCode: () => gzipCode,
	n8q: () => 32,
	n8r: () => 32,
	pG1b: () => pG1b,
	pG1gen: () => pG1gen,
	pG1zero: () => pG1zero,
	pG2b: () => pG2b,
	pG2gen: () => pG2gen,
	pG2zero: () => pG2zero,
	pOneT: () => pOneT,
	pq: () => 488,
	pr: () => pr,
	prePSize: () => 192,
	preQSize: () => preQSize,
	q: () => q,
	r: () => r
});
var gzipCode = "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";
var pr = 1768;
var pG1gen = 31432;
var pG1zero = 31528;
var pG1b = 3080;
var pG2gen = 31624;
var pG2zero = 31816;
var pG2b = 12456;
var pOneT = 32008;
var preQSize = 19776;
var q = "21888242871839275222246405745257275088696311157297823662689037894645226208583";
var r = "21888242871839275222246405745257275088548364400416034343698204186575808495617";
//#endregion
//#region src/utils.js
function bigInt2BytesLE(_a, len) {
	const b = Array(len);
	let v = BigInt(_a);
	for (let i = 0; i < len; i++) {
		b[i] = Number(v & 255n);
		v = v >> 8n;
	}
	return b;
}
//#endregion
//#region src/build_int.js
function buildInt(module, n64, _prefix) {
	const prefix = _prefix || "int";
	if (module.modules[prefix]) return prefix;
	module.modules[prefix] = {};
	const n32 = n64 * 2;
	const n8 = n64 * 8;
	function buildCopy() {
		const f = module.addFunction(prefix + "_copy");
		f.addParam("px", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		for (let i = 0; i < n64; i++) f.addCode(c.i64_store(c.getLocal("pr"), i * 8, c.i64_load(c.getLocal("px"), i * 8)));
	}
	function buildZero() {
		const f = module.addFunction(prefix + "_zero");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		for (let i = 0; i < n64; i++) f.addCode(c.i64_store(c.getLocal("pr"), i * 8, c.i64_const(0)));
	}
	function buildOne() {
		const f = module.addFunction(prefix + "_one");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.i64_store(c.getLocal("pr"), 0, c.i64_const(1)));
		for (let i = 1; i < n64; i++) f.addCode(c.i64_store(c.getLocal("pr"), i * 8, c.i64_const(0)));
	}
	function buildIsZero() {
		const f = module.addFunction(prefix + "_isZero");
		f.addParam("px", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		function getCompCode(n) {
			if (n == 0) return c.ret(c.i64_eqz(c.i64_load(c.getLocal("px"))));
			return c.if(c.i64_eqz(c.i64_load(c.getLocal("px"), n * 8)), getCompCode(n - 1), c.ret(c.i32_const(0)));
		}
		f.addCode(getCompCode(n64 - 1));
		f.addCode(c.ret(c.i32_const(0)));
	}
	function buildEq() {
		const f = module.addFunction(prefix + "_eq");
		f.addParam("px", "i32");
		f.addParam("py", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		function getCompCode(n) {
			if (n == 0) return c.ret(c.i64_eq(c.i64_load(c.getLocal("px")), c.i64_load(c.getLocal("py"))));
			return c.if(c.i64_eq(c.i64_load(c.getLocal("px"), n * 8), c.i64_load(c.getLocal("py"), n * 8)), getCompCode(n - 1), c.ret(c.i32_const(0)));
		}
		f.addCode(getCompCode(n64 - 1));
		f.addCode(c.ret(c.i32_const(0)));
	}
	function buildGte() {
		const f = module.addFunction(prefix + "_gte");
		f.addParam("px", "i32");
		f.addParam("py", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		function getCompCode(n) {
			if (n == 0) return c.ret(c.i64_ge_u(c.i64_load(c.getLocal("px")), c.i64_load(c.getLocal("py"))));
			return c.if(c.i64_lt_u(c.i64_load(c.getLocal("px"), n * 8), c.i64_load(c.getLocal("py"), n * 8)), c.ret(c.i32_const(0)), c.if(c.i64_gt_u(c.i64_load(c.getLocal("px"), n * 8), c.i64_load(c.getLocal("py"), n * 8)), c.ret(c.i32_const(1)), getCompCode(n - 1)));
		}
		f.addCode(getCompCode(n64 - 1));
		f.addCode(c.ret(c.i32_const(0)));
	}
	function buildAdd() {
		const f = module.addFunction(prefix + "_add");
		f.addParam("x", "i32");
		f.addParam("y", "i32");
		f.addParam("r", "i32");
		f.setReturnType("i32");
		f.addLocal("c", "i64");
		const c = f.getCodeBuilder();
		f.addCode(c.setLocal("c", c.i64_add(c.i64_load32_u(c.getLocal("x")), c.i64_load32_u(c.getLocal("y")))));
		f.addCode(c.i64_store32(c.getLocal("r"), c.getLocal("c")));
		for (let i = 1; i < n32; i++) {
			f.addCode(c.setLocal("c", c.i64_add(c.i64_add(c.i64_load32_u(c.getLocal("x"), 4 * i), c.i64_load32_u(c.getLocal("y"), 4 * i)), c.i64_shr_u(c.getLocal("c"), c.i64_const(32)))));
			f.addCode(c.i64_store32(c.getLocal("r"), i * 4, c.getLocal("c")));
		}
		f.addCode(c.i32_wrap_i64(c.i64_shr_u(c.getLocal("c"), c.i64_const(32))));
	}
	function buildSub() {
		const f = module.addFunction(prefix + "_sub");
		f.addParam("x", "i32");
		f.addParam("y", "i32");
		f.addParam("r", "i32");
		f.setReturnType("i32");
		f.addLocal("c", "i64");
		const c = f.getCodeBuilder();
		f.addCode(c.setLocal("c", c.i64_sub(c.i64_load32_u(c.getLocal("x")), c.i64_load32_u(c.getLocal("y")))));
		f.addCode(c.i64_store32(c.getLocal("r"), c.i64_and(c.getLocal("c"), c.i64_const("0xFFFFFFFF"))));
		for (let i = 1; i < n32; i++) {
			f.addCode(c.setLocal("c", c.i64_add(c.i64_sub(c.i64_load32_u(c.getLocal("x"), 4 * i), c.i64_load32_u(c.getLocal("y"), 4 * i)), c.i64_shr_s(c.getLocal("c"), c.i64_const(32)))));
			f.addCode(c.i64_store32(c.getLocal("r"), i * 4, c.i64_and(c.getLocal("c"), c.i64_const("0xFFFFFFFF"))));
		}
		f.addCode(c.i32_wrap_i64(c.i64_shr_s(c.getLocal("c"), c.i64_const(32))));
	}
	function buildMul() {
		const f = module.addFunction(prefix + "_mul");
		f.addParam("x", "i32");
		f.addParam("y", "i32");
		f.addParam("r", "i32");
		f.addLocal("c0", "i64");
		f.addLocal("c1", "i64");
		for (let i = 0; i < n32; i++) {
			f.addLocal("x" + i, "i64");
			f.addLocal("y" + i, "i64");
		}
		const c = f.getCodeBuilder();
		const loadX = [];
		const loadY = [];
		function mulij(i, j) {
			let X, Y;
			if (!loadX[i]) {
				X = c.teeLocal("x" + i, c.i64_load32_u(c.getLocal("x"), i * 4));
				loadX[i] = true;
			} else X = c.getLocal("x" + i);
			if (!loadY[j]) {
				Y = c.teeLocal("y" + j, c.i64_load32_u(c.getLocal("y"), j * 4));
				loadY[j] = true;
			} else Y = c.getLocal("y" + j);
			return c.i64_mul(X, Y);
		}
		let c0 = "c0";
		let c1 = "c1";
		for (let k = 0; k < n32 * 2 - 1; k++) {
			for (let i = Math.max(0, k - n32 + 1); i <= k && i < n32; i++) {
				const j = k - i;
				f.addCode(c.setLocal(c0, c.i64_add(c.i64_and(c.getLocal(c0), c.i64_const(4294967295)), mulij(i, j))));
				f.addCode(c.setLocal(c1, c.i64_add(c.getLocal(c1), c.i64_shr_u(c.getLocal(c0), c.i64_const(32)))));
			}
			f.addCode(c.i64_store32(c.getLocal("r"), k * 4, c.getLocal(c0)));
			[c0, c1] = [c1, c0];
			f.addCode(c.setLocal(c1, c.i64_shr_u(c.getLocal(c0), c.i64_const(32))));
		}
		f.addCode(c.i64_store32(c.getLocal("r"), n32 * 4 * 2 - 4, c.getLocal(c0)));
	}
	function buildSquare() {
		const f = module.addFunction(prefix + "_square");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		f.addLocal("c0", "i64");
		f.addLocal("c1", "i64");
		f.addLocal("c0_old", "i64");
		f.addLocal("c1_old", "i64");
		for (let i = 0; i < n32; i++) f.addLocal("x" + i, "i64");
		const c = f.getCodeBuilder();
		const loadX = [];
		function mulij(i, j) {
			let X, Y;
			if (!loadX[i]) {
				X = c.teeLocal("x" + i, c.i64_load32_u(c.getLocal("x"), i * 4));
				loadX[i] = true;
			} else X = c.getLocal("x" + i);
			if (!loadX[j]) {
				Y = c.teeLocal("x" + j, c.i64_load32_u(c.getLocal("x"), j * 4));
				loadX[j] = true;
			} else Y = c.getLocal("x" + j);
			return c.i64_mul(X, Y);
		}
		let c0 = "c0";
		let c1 = "c1";
		let c0_old = "c0_old";
		let c1_old = "c1_old";
		for (let k = 0; k < n32 * 2 - 1; k++) {
			f.addCode(c.setLocal(c0, c.i64_const(0)), c.setLocal(c1, c.i64_const(0)));
			for (let i = Math.max(0, k - n32 + 1); i < k + 1 >> 1 && i < n32; i++) {
				const j = k - i;
				f.addCode(c.setLocal(c0, c.i64_add(c.i64_and(c.getLocal(c0), c.i64_const(4294967295)), mulij(i, j))));
				f.addCode(c.setLocal(c1, c.i64_add(c.getLocal(c1), c.i64_shr_u(c.getLocal(c0), c.i64_const(32)))));
			}
			f.addCode(c.setLocal(c0, c.i64_shl(c.i64_and(c.getLocal(c0), c.i64_const(4294967295)), c.i64_const(1))));
			f.addCode(c.setLocal(c1, c.i64_add(c.i64_shl(c.getLocal(c1), c.i64_const(1)), c.i64_shr_u(c.getLocal(c0), c.i64_const(32)))));
			if (k % 2 == 0) {
				f.addCode(c.setLocal(c0, c.i64_add(c.i64_and(c.getLocal(c0), c.i64_const(4294967295)), mulij(k >> 1, k >> 1))));
				f.addCode(c.setLocal(c1, c.i64_add(c.getLocal(c1), c.i64_shr_u(c.getLocal(c0), c.i64_const(32)))));
			}
			if (k > 0) {
				f.addCode(c.setLocal(c0, c.i64_add(c.i64_and(c.getLocal(c0), c.i64_const(4294967295)), c.i64_and(c.getLocal(c0_old), c.i64_const(4294967295)))));
				f.addCode(c.setLocal(c1, c.i64_add(c.i64_add(c.getLocal(c1), c.i64_shr_u(c.getLocal(c0), c.i64_const(32))), c.getLocal(c1_old))));
			}
			f.addCode(c.i64_store32(c.getLocal("r"), k * 4, c.getLocal(c0)));
			f.addCode(c.setLocal(c0_old, c.getLocal(c1)), c.setLocal(c1_old, c.i64_shr_u(c.getLocal(c0_old), c.i64_const(32))));
		}
		f.addCode(c.i64_store32(c.getLocal("r"), n32 * 4 * 2 - 4, c.getLocal(c0_old)));
	}
	function buildSquareOld() {
		const f = module.addFunction(prefix + "_squareOld");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.call(prefix + "_mul", c.getLocal("x"), c.getLocal("x"), c.getLocal("r")));
	}
	function _buildMul1() {
		const f = module.addFunction(prefix + "__mul1");
		f.addParam("px", "i32");
		f.addParam("y", "i64");
		f.addParam("pr", "i32");
		f.addLocal("c", "i64");
		const c = f.getCodeBuilder();
		f.addCode(c.setLocal("c", c.i64_mul(c.i64_load32_u(c.getLocal("px"), 0, 0), c.getLocal("y"))));
		f.addCode(c.i64_store32(c.getLocal("pr"), 0, 0, c.getLocal("c")));
		for (let i = 1; i < n32; i++) {
			f.addCode(c.setLocal("c", c.i64_add(c.i64_mul(c.i64_load32_u(c.getLocal("px"), 4 * i, 0), c.getLocal("y")), c.i64_shr_u(c.getLocal("c"), c.i64_const(32)))));
			f.addCode(c.i64_store32(c.getLocal("pr"), i * 4, 0, c.getLocal("c")));
		}
	}
	function _buildAdd1() {
		const f = module.addFunction(prefix + "__add1");
		f.addParam("x", "i32");
		f.addParam("y", "i64");
		f.addLocal("c", "i64");
		f.addLocal("px", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.setLocal("px", c.getLocal("x")));
		f.addCode(c.setLocal("c", c.i64_add(c.i64_load32_u(c.getLocal("px"), 0, 0), c.getLocal("y"))));
		f.addCode(c.i64_store32(c.getLocal("px"), 0, 0, c.getLocal("c")));
		f.addCode(c.setLocal("c", c.i64_shr_u(c.getLocal("c"), c.i64_const(32))));
		f.addCode(c.block(c.loop(c.br_if(1, c.i64_eqz(c.getLocal("c"))), c.setLocal("px", c.i32_add(c.getLocal("px"), c.i32_const(4))), c.setLocal("c", c.i64_add(c.i64_load32_u(c.getLocal("px"), 0, 0), c.getLocal("c"))), c.i64_store32(c.getLocal("px"), 0, 0, c.getLocal("c")), c.setLocal("c", c.i64_shr_u(c.getLocal("c"), c.i64_const(32))), c.br(0))));
	}
	function buildDiv() {
		_buildMul1();
		_buildAdd1();
		const f = module.addFunction(prefix + "_div");
		f.addParam("x", "i32");
		f.addParam("y", "i32");
		f.addParam("c", "i32");
		f.addParam("r", "i32");
		f.addLocal("rr", "i32");
		f.addLocal("cc", "i32");
		f.addLocal("eX", "i32");
		f.addLocal("eY", "i32");
		f.addLocal("sy", "i64");
		f.addLocal("sx", "i64");
		f.addLocal("ec", "i32");
		const c = f.getCodeBuilder();
		const Y = c.i32_const(module.alloc(n8));
		const Caux = c.i32_const(module.alloc(n8));
		const Raux = c.i32_const(module.alloc(n8));
		const C = c.getLocal("cc");
		const R = c.getLocal("rr");
		const pr1 = module.alloc(n8 * 2);
		const R1 = c.i32_const(pr1);
		const R2 = c.i32_const(pr1 + n8);
		f.addCode(c.if(c.getLocal("c"), c.setLocal("cc", c.getLocal("c")), c.setLocal("cc", Caux)));
		f.addCode(c.if(c.getLocal("r"), c.setLocal("rr", c.getLocal("r")), c.setLocal("rr", Raux)));
		f.addCode(c.call(prefix + "_copy", c.getLocal("x"), R));
		f.addCode(c.call(prefix + "_copy", c.getLocal("y"), Y));
		f.addCode(c.call(prefix + "_zero", C));
		f.addCode(c.call(prefix + "_zero", R1));
		f.addCode(c.setLocal("eX", c.i32_const(n8 - 1)));
		f.addCode(c.setLocal("eY", c.i32_const(n8 - 1)));
		f.addCode(c.block(c.loop(c.br_if(1, c.i32_or(c.i32_load8_u(c.i32_add(Y, c.getLocal("eY")), 0, 0), c.i32_eq(c.getLocal("eY"), c.i32_const(3)))), c.setLocal("eY", c.i32_sub(c.getLocal("eY"), c.i32_const(1))), c.br(0))));
		f.addCode(c.setLocal("sy", c.i64_add(c.i64_load32_u(c.i32_sub(c.i32_add(Y, c.getLocal("eY")), c.i32_const(3)), 0, 0), c.i64_const(1))));
		f.addCode(c.if(c.i64_eq(c.getLocal("sy"), c.i64_const(1)), c.drop(c.i64_div_u(c.i64_const(0), c.i64_const(0)))));
		f.addCode(c.block(c.loop(c.block(c.loop(c.br_if(1, c.i32_or(c.i32_load8_u(c.i32_add(R, c.getLocal("eX")), 0, 0), c.i32_eq(c.getLocal("eX"), c.i32_const(7)))), c.setLocal("eX", c.i32_sub(c.getLocal("eX"), c.i32_const(1))), c.br(0))), c.setLocal("sx", c.i64_load(c.i32_sub(c.i32_add(R, c.getLocal("eX")), c.i32_const(7)), 0, 0)), c.setLocal("sx", c.i64_div_u(c.getLocal("sx"), c.getLocal("sy"))), c.setLocal("ec", c.i32_sub(c.i32_sub(c.getLocal("eX"), c.getLocal("eY")), c.i32_const(4))), c.block(c.loop(c.br_if(1, c.i32_and(c.i64_eqz(c.i64_and(c.getLocal("sx"), c.i64_const("0xFFFFFFFF00000000"))), c.i32_ge_s(c.getLocal("ec"), c.i32_const(0)))), c.setLocal("sx", c.i64_shr_u(c.getLocal("sx"), c.i64_const(8))), c.setLocal("ec", c.i32_add(c.getLocal("ec"), c.i32_const(1))), c.br(0))), c.if(c.i64_eqz(c.getLocal("sx")), [
			...c.br_if(2, c.i32_eqz(c.call(prefix + "_gte", R, Y))),
			...c.setLocal("sx", c.i64_const(1)),
			...c.setLocal("ec", c.i32_const(0))
		]), c.call(prefix + "__mul1", Y, c.getLocal("sx"), R2), c.drop(c.call(prefix + "_sub", R, c.i32_sub(R2, c.getLocal("ec")), R)), c.call(prefix + "__add1", c.i32_add(C, c.getLocal("ec")), c.getLocal("sx")), c.br(0))));
	}
	function buildInverseMod() {
		const f = module.addFunction(prefix + "_inverseMod");
		f.addParam("px", "i32");
		f.addParam("pm", "i32");
		f.addParam("pr", "i32");
		f.addLocal("t", "i32");
		f.addLocal("newt", "i32");
		f.addLocal("r", "i32");
		f.addLocal("qq", "i32");
		f.addLocal("qr", "i32");
		f.addLocal("newr", "i32");
		f.addLocal("swp", "i32");
		f.addLocal("x", "i32");
		f.addLocal("signt", "i32");
		f.addLocal("signnewt", "i32");
		f.addLocal("signx", "i32");
		const c = f.getCodeBuilder();
		const aux1 = c.i32_const(module.alloc(n8));
		const aux2 = c.i32_const(module.alloc(n8));
		const aux3 = c.i32_const(module.alloc(n8));
		const aux4 = c.i32_const(module.alloc(n8));
		const aux5 = c.i32_const(module.alloc(n8));
		const aux6 = c.i32_const(module.alloc(n8));
		const mulBuff = c.i32_const(module.alloc(n8 * 2));
		const aux7 = c.i32_const(module.alloc(n8));
		f.addCode(c.setLocal("t", aux1), c.call(prefix + "_zero", aux1), c.setLocal("signt", c.i32_const(0)));
		f.addCode(c.setLocal("r", aux2), c.call(prefix + "_copy", c.getLocal("pm"), aux2));
		f.addCode(c.setLocal("newt", aux3), c.call(prefix + "_one", aux3), c.setLocal("signnewt", c.i32_const(0)));
		f.addCode(c.setLocal("newr", aux4), c.call(prefix + "_copy", c.getLocal("px"), aux4));
		f.addCode(c.setLocal("qq", aux5));
		f.addCode(c.setLocal("qr", aux6));
		f.addCode(c.setLocal("x", aux7));
		f.addCode(c.block(c.loop(c.br_if(1, c.call(prefix + "_isZero", c.getLocal("newr"))), c.call(prefix + "_div", c.getLocal("r"), c.getLocal("newr"), c.getLocal("qq"), c.getLocal("qr")), c.call(prefix + "_mul", c.getLocal("qq"), c.getLocal("newt"), mulBuff), c.if(c.getLocal("signt"), c.if(c.getLocal("signnewt"), c.if(c.call(prefix + "_gte", mulBuff, c.getLocal("t")), [...c.drop(c.call(prefix + "_sub", mulBuff, c.getLocal("t"), c.getLocal("x"))), ...c.setLocal("signx", c.i32_const(0))], [...c.drop(c.call(prefix + "_sub", c.getLocal("t"), mulBuff, c.getLocal("x"))), ...c.setLocal("signx", c.i32_const(1))]), [...c.drop(c.call(prefix + "_add", mulBuff, c.getLocal("t"), c.getLocal("x"))), ...c.setLocal("signx", c.i32_const(1))]), c.if(c.getLocal("signnewt"), [...c.drop(c.call(prefix + "_add", mulBuff, c.getLocal("t"), c.getLocal("x"))), ...c.setLocal("signx", c.i32_const(0))], c.if(c.call(prefix + "_gte", c.getLocal("t"), mulBuff), [...c.drop(c.call(prefix + "_sub", c.getLocal("t"), mulBuff, c.getLocal("x"))), ...c.setLocal("signx", c.i32_const(0))], [...c.drop(c.call(prefix + "_sub", mulBuff, c.getLocal("t"), c.getLocal("x"))), ...c.setLocal("signx", c.i32_const(1))]))), c.setLocal("swp", c.getLocal("t")), c.setLocal("t", c.getLocal("newt")), c.setLocal("newt", c.getLocal("x")), c.setLocal("x", c.getLocal("swp")), c.setLocal("signt", c.getLocal("signnewt")), c.setLocal("signnewt", c.getLocal("signx")), c.setLocal("swp", c.getLocal("r")), c.setLocal("r", c.getLocal("newr")), c.setLocal("newr", c.getLocal("qr")), c.setLocal("qr", c.getLocal("swp")), c.br(0))));
		f.addCode(c.if(c.getLocal("signt"), c.drop(c.call(prefix + "_sub", c.getLocal("pm"), c.getLocal("t"), c.getLocal("pr"))), c.call(prefix + "_copy", c.getLocal("t"), c.getLocal("pr"))));
	}
	buildCopy();
	buildZero();
	buildIsZero();
	buildOne();
	buildEq();
	buildGte();
	buildAdd();
	buildSub();
	buildMul();
	buildSquare();
	buildSquareOld();
	buildDiv();
	buildInverseMod();
	module.exportFunction(prefix + "_copy");
	module.exportFunction(prefix + "_zero");
	module.exportFunction(prefix + "_one");
	module.exportFunction(prefix + "_isZero");
	module.exportFunction(prefix + "_eq");
	module.exportFunction(prefix + "_gte");
	module.exportFunction(prefix + "_add");
	module.exportFunction(prefix + "_sub");
	module.exportFunction(prefix + "_mul");
	module.exportFunction(prefix + "_square");
	module.exportFunction(prefix + "_squareOld");
	module.exportFunction(prefix + "_div");
	module.exportFunction(prefix + "_inverseMod");
	return prefix;
}
//#endregion
//#region src/build_timesscalar.js
function buildTimesScalar(module, fnName, elementLen, opAB, opAA, opCopy, opInit) {
	const f = module.addFunction(fnName);
	f.addParam("base", "i32");
	f.addParam("scalar", "i32");
	f.addParam("scalarLength", "i32");
	f.addParam("r", "i32");
	f.addLocal("i", "i32");
	f.addLocal("b", "i32");
	const c = f.getCodeBuilder();
	const aux = c.i32_const(module.alloc(elementLen));
	f.addCode(c.if(c.i32_eqz(c.getLocal("scalarLength")), [...c.call(opInit, c.getLocal("r")), ...c.ret([])]));
	f.addCode(c.call(opCopy, c.getLocal("base"), aux));
	f.addCode(c.call(opInit, c.getLocal("r")));
	f.addCode(c.setLocal("i", c.getLocal("scalarLength")));
	f.addCode(c.block(c.loop(c.setLocal("i", c.i32_sub(c.getLocal("i"), c.i32_const(1))), c.setLocal("b", c.i32_load8_u(c.i32_add(c.getLocal("scalar"), c.getLocal("i")))), ...innerLoop(), c.br_if(1, c.i32_eqz(c.getLocal("i"))), c.br(0))));
	function innerLoop() {
		const code = [];
		for (let i = 0; i < 8; i++) code.push(...c.call(opAA, c.getLocal("r"), c.getLocal("r")), ...c.if(c.i32_ge_u(c.getLocal("b"), c.i32_const(128 >> i)), [...c.setLocal("b", c.i32_sub(c.getLocal("b"), c.i32_const(128 >> i))), ...c.call(opAB, c.getLocal("r"), aux, c.getLocal("r"))]));
		return code;
	}
}
//#endregion
//#region src/build_batchinverse.js
var build_batchinverse_default = buildBatchInverse;
function buildBatchInverse(module, prefix) {
	const n8 = module.modules[prefix].n64 * 8;
	const f = module.addFunction(prefix + "_batchInverse");
	f.addParam("pIn", "i32");
	f.addParam("inStep", "i32");
	f.addParam("n", "i32");
	f.addParam("pOut", "i32");
	f.addParam("outStep", "i32");
	f.addLocal("itAux", "i32");
	f.addLocal("itIn", "i32");
	f.addLocal("itOut", "i32");
	f.addLocal("i", "i32");
	const c = f.getCodeBuilder();
	const AUX = c.i32_const(module.alloc(n8));
	f.addCode(c.setLocal("itAux", c.i32_load(c.i32_const(0))), c.i32_store(c.i32_const(0), c.i32_add(c.getLocal("itAux"), c.i32_mul(c.i32_add(c.getLocal("n"), c.i32_const(1)), c.i32_const(n8)))));
	f.addCode(c.call(prefix + "_one", c.getLocal("itAux")), c.setLocal("itIn", c.getLocal("pIn")), c.setLocal("itAux", c.i32_add(c.getLocal("itAux"), c.i32_const(n8))), c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("n"))), c.if(c.call(prefix + "_isZero", c.getLocal("itIn")), c.call(prefix + "_copy", c.i32_sub(c.getLocal("itAux"), c.i32_const(n8)), c.getLocal("itAux")), c.call(prefix + "_mul", c.getLocal("itIn"), c.i32_sub(c.getLocal("itAux"), c.i32_const(n8)), c.getLocal("itAux"))), c.setLocal("itIn", c.i32_add(c.getLocal("itIn"), c.getLocal("inStep"))), c.setLocal("itAux", c.i32_add(c.getLocal("itAux"), c.i32_const(n8))), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))), c.setLocal("itIn", c.i32_sub(c.getLocal("itIn"), c.getLocal("inStep"))), c.setLocal("itAux", c.i32_sub(c.getLocal("itAux"), c.i32_const(n8))), c.setLocal("itOut", c.i32_add(c.getLocal("pOut"), c.i32_mul(c.i32_sub(c.getLocal("n"), c.i32_const(1)), c.getLocal("outStep")))), c.call(prefix + "_inverse", c.getLocal("itAux"), c.getLocal("itAux")), c.block(c.loop(c.br_if(1, c.i32_eqz(c.getLocal("i"))), c.if(c.call(prefix + "_isZero", c.getLocal("itIn")), [...c.call(prefix + "_copy", c.getLocal("itAux"), c.i32_sub(c.getLocal("itAux"), c.i32_const(n8))), ...c.call(prefix + "_zero", c.getLocal("itOut"))], [
		...c.call(prefix + "_copy", c.i32_sub(c.getLocal("itAux"), c.i32_const(n8)), AUX),
		...c.call(prefix + "_mul", c.getLocal("itAux"), c.getLocal("itIn"), c.i32_sub(c.getLocal("itAux"), c.i32_const(n8))),
		...c.call(prefix + "_mul", c.getLocal("itAux"), AUX, c.getLocal("itOut"))
	]), c.setLocal("itIn", c.i32_sub(c.getLocal("itIn"), c.getLocal("inStep"))), c.setLocal("itOut", c.i32_sub(c.getLocal("itOut"), c.getLocal("outStep"))), c.setLocal("itAux", c.i32_sub(c.getLocal("itAux"), c.i32_const(n8))), c.setLocal("i", c.i32_sub(c.getLocal("i"), c.i32_const(1))), c.br(0))));
	f.addCode(c.i32_store(c.i32_const(0), c.getLocal("itAux")));
}
//#endregion
//#region src/build_batchconvertion.js
var build_batchconvertion_default = buildBatchConvertion$1;
function buildBatchConvertion$1(module, fnName, internalFnName, sizeIn, sizeOut, reverse) {
	if (typeof reverse === "undefined") if (sizeIn < sizeOut) reverse = true;
	else reverse = false;
	const f = module.addFunction(fnName);
	f.addParam("pIn", "i32");
	f.addParam("n", "i32");
	f.addParam("pOut", "i32");
	f.addLocal("i", "i32");
	f.addLocal("itIn", "i32");
	f.addLocal("itOut", "i32");
	const c = f.getCodeBuilder();
	if (reverse) f.addCode(c.setLocal("itIn", c.i32_add(c.getLocal("pIn"), c.i32_mul(c.i32_sub(c.getLocal("n"), c.i32_const(1)), c.i32_const(sizeIn)))), c.setLocal("itOut", c.i32_add(c.getLocal("pOut"), c.i32_mul(c.i32_sub(c.getLocal("n"), c.i32_const(1)), c.i32_const(sizeOut)))), c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("n"))), c.call(internalFnName, c.getLocal("itIn"), c.getLocal("itOut")), c.setLocal("itIn", c.i32_sub(c.getLocal("itIn"), c.i32_const(sizeIn))), c.setLocal("itOut", c.i32_sub(c.getLocal("itOut"), c.i32_const(sizeOut))), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))));
	else f.addCode(c.setLocal("itIn", c.getLocal("pIn")), c.setLocal("itOut", c.getLocal("pOut")), c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("n"))), c.call(internalFnName, c.getLocal("itIn"), c.getLocal("itOut")), c.setLocal("itIn", c.i32_add(c.getLocal("itIn"), c.i32_const(sizeIn))), c.setLocal("itOut", c.i32_add(c.getLocal("itOut"), c.i32_const(sizeOut))), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))));
}
//#endregion
//#region src/build_batchop.js
var build_batchop_default = buildBatchConvertion;
function buildBatchConvertion(module, fnName, internalFnName, sizeIn, sizeOut, reverse) {
	if (typeof reverse === "undefined") if (sizeIn < sizeOut) reverse = true;
	else reverse = false;
	const f = module.addFunction(fnName);
	f.addParam("pIn1", "i32");
	f.addParam("pIn2", "i32");
	f.addParam("n", "i32");
	f.addParam("pOut", "i32");
	f.addLocal("i", "i32");
	f.addLocal("itIn1", "i32");
	f.addLocal("itIn2", "i32");
	f.addLocal("itOut", "i32");
	const c = f.getCodeBuilder();
	if (reverse) f.addCode(c.setLocal("itIn1", c.i32_add(c.getLocal("pIn1"), c.i32_mul(c.i32_sub(c.getLocal("n"), c.i32_const(1)), c.i32_const(sizeIn)))), c.setLocal("itIn2", c.i32_add(c.getLocal("pIn2"), c.i32_mul(c.i32_sub(c.getLocal("n"), c.i32_const(1)), c.i32_const(sizeIn)))), c.setLocal("itOut", c.i32_add(c.getLocal("pOut"), c.i32_mul(c.i32_sub(c.getLocal("n"), c.i32_const(1)), c.i32_const(sizeOut)))), c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("n"))), c.call(internalFnName, c.getLocal("itIn1"), c.getLocal("itIn2"), c.getLocal("itOut")), c.setLocal("itIn1", c.i32_sub(c.getLocal("itIn1"), c.i32_const(sizeIn))), c.setLocal("itIn2", c.i32_sub(c.getLocal("itIn2"), c.i32_const(sizeIn))), c.setLocal("itOut", c.i32_sub(c.getLocal("itOut"), c.i32_const(sizeOut))), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))));
	else f.addCode(c.setLocal("itIn1", c.getLocal("pIn1")), c.setLocal("itIn2", c.getLocal("pIn2")), c.setLocal("itOut", c.getLocal("pOut")), c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("n"))), c.call(internalFnName, c.getLocal("itIn1"), c.getLocal("itIn2"), c.getLocal("itOut")), c.setLocal("itIn1", c.i32_add(c.getLocal("itIn1"), c.i32_const(sizeIn))), c.setLocal("itIn2", c.i32_add(c.getLocal("itIn2"), c.i32_const(sizeIn))), c.setLocal("itOut", c.i32_add(c.getLocal("itOut"), c.i32_const(sizeOut))), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))));
}
//#endregion
//#region src/bigint.js
function compare(a, b) {
	return a === b ? 0 : a > b ? 1 : -1;
}
function square(n) {
	return n * n;
}
function isOdd(n) {
	return n % 2n !== 0n;
}
function isEven(n) {
	return n % 2n === 0n;
}
function isNegative(n) {
	return n < 0n;
}
function isPositive(n) {
	return n > 0n;
}
function bitLength(n) {
	if (isNegative(n)) return n.toString(2).length - 1;
	else return n.toString(2).length;
}
function abs(n) {
	return n < 0n ? -n : n;
}
function isUnit(n) {
	return abs(n) === 1n;
}
function modInv(a, n) {
	var t = 0n, newT = 1n, r = n, newR = abs(a), q, lastT, lastR;
	while (newR !== 0n) {
		q = r / newR;
		lastT = t;
		lastR = r;
		t = newT;
		r = newR;
		newT = lastT - q * newT;
		newR = lastR - q * newR;
	}
	if (!isUnit(r)) throw new Error(a.toString() + " and " + n.toString() + " are not co-prime");
	if (compare(t, 0n) === -1) t = t + n;
	if (isNegative(a)) return -t;
	return t;
}
function modPow(n, exp, mod) {
	if (mod === 0n) throw new Error("Cannot take modPow with modulus 0");
	var r = 1n, base = n % mod;
	if (isNegative(exp)) {
		exp = exp * -1n;
		base = modInv(base, mod);
	}
	while (isPositive(exp)) {
		if (base === 0n) return 0n;
		if (isOdd(exp)) r = r * base % mod;
		exp = exp / 2n;
		base = square(base) % mod;
	}
	return r;
}
function compareAbs(a, b) {
	a = a >= 0n ? a : -a;
	b = b >= 0n ? b : -b;
	return a === b ? 0 : a > b ? 1 : -1;
}
function isDivisibleBy(a, n) {
	if (n === 0n) return false;
	if (isUnit(n)) return true;
	if (compareAbs(n, 2n) === 0) return isEven(a);
	return a % n === 0n;
}
function isBasicPrime(v) {
	var n = abs(v);
	if (isUnit(n)) return false;
	if (n === 2n || n === 3n || n === 5n) return true;
	if (isEven(n) || isDivisibleBy(n, 3n) || isDivisibleBy(n, 5n)) return false;
	if (n < 49n) return true;
}
function prev(n) {
	return n - 1n;
}
function isKnownPrime(v) {
	switch (abs(v)) {
		case 21888242871839275222246405745257275088696311157297823662689037894645226208583n:
		case 21888242871839275222246405745257275088548364400416034343698204186575808495617n:
		case 4002409555221667393417789825735904156556882819939007885332058136124031650490837864442687629129015664037894272559787n:
		case 52435875175126190479447740508185965837690552500527637822603658699938581184513n:
		case 41898490967918953402344214791240637128170709919953949071783502921025352812571106773058893763790338921418070971888458477323173057491593855069696241854796396165721416325350064441470418137846398469611935719059908164220784476160001n: return true;
	}
	return false;
}
function millerRabinTest(n, a) {
	var nPrev = prev(n), b = nPrev, r = 0, d, i, x;
	while (isEven(b)) b = b / 2n, r++;
	next: for (i = 0; i < a.length; i++) {
		if (n < a[i]) continue;
		x = modPow(BigInt(a[i]), b, n);
		if (isUnit(x) || x === nPrev) continue;
		for (d = r - 1; d != 0; d--) {
			x = square(x) % n;
			if (isUnit(x)) return false;
			if (x === nPrev) continue next;
		}
		return false;
	}
	return true;
}
function isPrime(p) {
	let isPrime;
	isPrime = isKnownPrime(p);
	if (isPrime !== void 0) return isPrime;
	isPrime = isBasicPrime(p);
	if (isPrime !== void 0) return isPrime;
	var n = abs(p);
	var bits = bitLength(n);
	if (bits <= 64) return millerRabinTest(n, [
		2,
		3,
		5,
		7,
		11,
		13,
		17,
		19,
		23,
		29,
		31,
		37
	]);
	var logN = Math.log(2) * Number(bits);
	var t = Math.ceil(logN);
	for (var a = [], i = 0; i < t; i++) a.push(BigInt(i + 2));
	return millerRabinTest(n, a);
}
//#endregion
//#region src/build_f1m.js
function buildF1m(module, _q, _prefix, _intPrefix) {
	const q = BigInt(_q);
	const n64 = Math.floor((bitLength(q - 1n) - 1) / 64) + 1;
	const n32 = n64 * 2;
	const n8 = n64 * 8;
	const prefix = _prefix || "f1m";
	if (module.modules[prefix]) return prefix;
	const intPrefix = buildInt(module, n64, _intPrefix);
	const pq = module.alloc(n8, bigInt2BytesLE(q, n8));
	const pR2 = module.alloc(bigInt2BytesLE(square(1n << BigInt(n64 * 64)) % q, n8));
	const pOne = module.alloc(bigInt2BytesLE((1n << BigInt(n64 * 64)) % q, n8));
	const pZero = module.alloc(bigInt2BytesLE(0n, n8));
	const _minusOne = q - 1n;
	const _e = _minusOne >> 1n;
	const pe = module.alloc(n8, bigInt2BytesLE(_e, n8));
	const _ePlusOne = _e + 1n;
	const pePlusOne = module.alloc(n8, bigInt2BytesLE(_ePlusOne, n8));
	module.modules[prefix] = {
		pq,
		pR2,
		n64,
		q,
		pOne,
		pZero,
		pePlusOne
	};
	function buildOne() {
		const f = module.addFunction(prefix + "_one");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.call(intPrefix + "_copy", c.i32_const(pOne), c.getLocal("pr")));
	}
	function buildAdd() {
		const f = module.addFunction(prefix + "_add");
		f.addParam("x", "i32");
		f.addParam("y", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.if(c.call(intPrefix + "_add", c.getLocal("x"), c.getLocal("y"), c.getLocal("r")), c.drop(c.call(intPrefix + "_sub", c.getLocal("r"), c.i32_const(pq), c.getLocal("r"))), c.if(c.call(intPrefix + "_gte", c.getLocal("r"), c.i32_const(pq)), c.drop(c.call(intPrefix + "_sub", c.getLocal("r"), c.i32_const(pq), c.getLocal("r"))))));
	}
	function buildSub() {
		const f = module.addFunction(prefix + "_sub");
		f.addParam("x", "i32");
		f.addParam("y", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.if(c.call(intPrefix + "_sub", c.getLocal("x"), c.getLocal("y"), c.getLocal("r")), c.drop(c.call(intPrefix + "_add", c.getLocal("r"), c.i32_const(pq), c.getLocal("r")))));
	}
	function buildNeg() {
		const f = module.addFunction(prefix + "_neg");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.call(prefix + "_sub", c.i32_const(pZero), c.getLocal("x"), c.getLocal("r")));
	}
	function buildIsNegative() {
		const f = module.addFunction(prefix + "_isNegative");
		f.addParam("x", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		const AUX = c.i32_const(module.alloc(n8));
		f.addCode(c.call(prefix + "_fromMontgomery", c.getLocal("x"), AUX), c.call(intPrefix + "_gte", AUX, c.i32_const(pePlusOne)));
	}
	function buildSign() {
		const f = module.addFunction(prefix + "_sign");
		f.addParam("x", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		const AUX = c.i32_const(module.alloc(n8));
		f.addCode(c.if(c.call(intPrefix + "_isZero", c.getLocal("x")), c.ret(c.i32_const(0))), c.call(prefix + "_fromMontgomery", c.getLocal("x"), AUX), c.if(c.call(intPrefix + "_gte", AUX, c.i32_const(pePlusOne)), c.ret(c.i32_const(-1))), c.ret(c.i32_const(1)));
	}
	function buildMReduct() {
		const carries = module.alloc(n32 * n32 * 8);
		const f = module.addFunction(prefix + "_mReduct");
		f.addParam("t", "i32");
		f.addParam("r", "i32");
		f.addLocal("np32", "i64");
		f.addLocal("c", "i64");
		f.addLocal("m", "i64");
		const c = f.getCodeBuilder();
		const np32 = Number(4294967296n - modInv(q, 4294967296n));
		f.addCode(c.setLocal("np32", c.i64_const(np32)));
		for (let i = 0; i < n32; i++) {
			f.addCode(c.setLocal("c", c.i64_const(0)));
			f.addCode(c.setLocal("m", c.i64_and(c.i64_mul(c.i64_load32_u(c.getLocal("t"), i * 4), c.getLocal("np32")), c.i64_const("0xFFFFFFFF"))));
			for (let j = 0; j < n32; j++) {
				f.addCode(c.setLocal("c", c.i64_add(c.i64_add(c.i64_load32_u(c.getLocal("t"), (i + j) * 4), c.i64_shr_u(c.getLocal("c"), c.i64_const(32))), c.i64_mul(c.i64_load32_u(c.i32_const(pq), j * 4), c.getLocal("m")))));
				f.addCode(c.i64_store32(c.getLocal("t"), (i + j) * 4, c.getLocal("c")));
			}
			f.addCode(c.i64_store32(c.i32_const(carries), i * 4, c.i64_shr_u(c.getLocal("c"), c.i64_const(32))));
		}
		f.addCode(c.call(prefix + "_add", c.i32_const(carries), c.i32_add(c.getLocal("t"), c.i32_const(n32 * 4)), c.getLocal("r")));
	}
	function buildMul() {
		const f = module.addFunction(prefix + "_mul");
		f.addParam("x", "i32");
		f.addParam("y", "i32");
		f.addParam("r", "i32");
		f.addLocal("c0", "i64");
		f.addLocal("c1", "i64");
		f.addLocal("np32", "i64");
		for (let i = 0; i < n32; i++) {
			f.addLocal("x" + i, "i64");
			f.addLocal("y" + i, "i64");
			f.addLocal("m" + i, "i64");
			f.addLocal("q" + i, "i64");
		}
		const c = f.getCodeBuilder();
		const np32 = Number(4294967296n - modInv(q, 4294967296n));
		f.addCode(c.setLocal("np32", c.i64_const(np32)));
		const loadX = [];
		const loadY = [];
		const loadQ = [];
		function mulij(i, j) {
			let X, Y;
			if (!loadX[i]) {
				X = c.teeLocal("x" + i, c.i64_load32_u(c.getLocal("x"), i * 4));
				loadX[i] = true;
			} else X = c.getLocal("x" + i);
			if (!loadY[j]) {
				Y = c.teeLocal("y" + j, c.i64_load32_u(c.getLocal("y"), j * 4));
				loadY[j] = true;
			} else Y = c.getLocal("y" + j);
			return c.i64_mul(X, Y);
		}
		function mulqm(i, j) {
			let Q, M;
			if (!loadQ[i]) {
				Q = c.teeLocal("q" + i, c.i64_load32_u(c.i32_const(0), pq + i * 4));
				loadQ[i] = true;
			} else Q = c.getLocal("q" + i);
			M = c.getLocal("m" + j);
			return c.i64_mul(Q, M);
		}
		let c0 = "c0";
		let c1 = "c1";
		for (let k = 0; k < n32 * 2 - 1; k++) {
			for (let i = Math.max(0, k - n32 + 1); i <= k && i < n32; i++) {
				const j = k - i;
				f.addCode(c.setLocal(c0, c.i64_add(c.i64_and(c.getLocal(c0), c.i64_const(4294967295)), mulij(i, j))));
				f.addCode(c.setLocal(c1, c.i64_add(c.getLocal(c1), c.i64_shr_u(c.getLocal(c0), c.i64_const(32)))));
			}
			for (let i = Math.max(1, k - n32 + 1); i <= k && i < n32; i++) {
				const j = k - i;
				f.addCode(c.setLocal(c0, c.i64_add(c.i64_and(c.getLocal(c0), c.i64_const(4294967295)), mulqm(i, j))));
				f.addCode(c.setLocal(c1, c.i64_add(c.getLocal(c1), c.i64_shr_u(c.getLocal(c0), c.i64_const(32)))));
			}
			if (k < n32) {
				f.addCode(c.setLocal("m" + k, c.i64_and(c.i64_mul(c.i64_and(c.getLocal(c0), c.i64_const(4294967295)), c.getLocal("np32")), c.i64_const("0xFFFFFFFF"))));
				f.addCode(c.setLocal(c0, c.i64_add(c.i64_and(c.getLocal(c0), c.i64_const(4294967295)), mulqm(0, k))));
				f.addCode(c.setLocal(c1, c.i64_add(c.getLocal(c1), c.i64_shr_u(c.getLocal(c0), c.i64_const(32)))));
			}
			if (k >= n32) f.addCode(c.i64_store32(c.getLocal("r"), (k - n32) * 4, c.getLocal(c0)));
			[c0, c1] = [c1, c0];
			f.addCode(c.setLocal(c1, c.i64_shr_u(c.getLocal(c0), c.i64_const(32))));
		}
		f.addCode(c.i64_store32(c.getLocal("r"), n32 * 4 - 4, c.getLocal(c0)));
		f.addCode(c.if(c.i32_wrap_i64(c.getLocal(c1)), c.drop(c.call(intPrefix + "_sub", c.getLocal("r"), c.i32_const(pq), c.getLocal("r"))), c.if(c.call(intPrefix + "_gte", c.getLocal("r"), c.i32_const(pq)), c.drop(c.call(intPrefix + "_sub", c.getLocal("r"), c.i32_const(pq), c.getLocal("r"))))));
	}
	function buildSquare() {
		const f = module.addFunction(prefix + "_square");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		f.addLocal("c0", "i64");
		f.addLocal("c1", "i64");
		f.addLocal("c0_old", "i64");
		f.addLocal("c1_old", "i64");
		f.addLocal("np32", "i64");
		for (let i = 0; i < n32; i++) {
			f.addLocal("x" + i, "i64");
			f.addLocal("m" + i, "i64");
			f.addLocal("q" + i, "i64");
		}
		const c = f.getCodeBuilder();
		const np32 = Number(4294967296n - modInv(q, 4294967296n));
		f.addCode(c.setLocal("np32", c.i64_const(np32)));
		const loadX = [];
		const loadQ = [];
		function mulij(i, j) {
			let X, Y;
			if (!loadX[i]) {
				X = c.teeLocal("x" + i, c.i64_load32_u(c.getLocal("x"), i * 4));
				loadX[i] = true;
			} else X = c.getLocal("x" + i);
			if (!loadX[j]) {
				Y = c.teeLocal("x" + j, c.i64_load32_u(c.getLocal("x"), j * 4));
				loadX[j] = true;
			} else Y = c.getLocal("x" + j);
			return c.i64_mul(X, Y);
		}
		function mulqm(i, j) {
			let Q, M;
			if (!loadQ[i]) {
				Q = c.teeLocal("q" + i, c.i64_load32_u(c.i32_const(0), pq + i * 4));
				loadQ[i] = true;
			} else Q = c.getLocal("q" + i);
			M = c.getLocal("m" + j);
			return c.i64_mul(Q, M);
		}
		let c0 = "c0";
		let c1 = "c1";
		let c0_old = "c0_old";
		let c1_old = "c1_old";
		for (let k = 0; k < n32 * 2 - 1; k++) {
			f.addCode(c.setLocal(c0, c.i64_const(0)), c.setLocal(c1, c.i64_const(0)));
			for (let i = Math.max(0, k - n32 + 1); i < k + 1 >> 1 && i < n32; i++) {
				const j = k - i;
				f.addCode(c.setLocal(c0, c.i64_add(c.i64_and(c.getLocal(c0), c.i64_const(4294967295)), mulij(i, j))));
				f.addCode(c.setLocal(c1, c.i64_add(c.getLocal(c1), c.i64_shr_u(c.getLocal(c0), c.i64_const(32)))));
			}
			f.addCode(c.setLocal(c0, c.i64_shl(c.i64_and(c.getLocal(c0), c.i64_const(4294967295)), c.i64_const(1))));
			f.addCode(c.setLocal(c1, c.i64_add(c.i64_shl(c.getLocal(c1), c.i64_const(1)), c.i64_shr_u(c.getLocal(c0), c.i64_const(32)))));
			if (k % 2 == 0) {
				f.addCode(c.setLocal(c0, c.i64_add(c.i64_and(c.getLocal(c0), c.i64_const(4294967295)), mulij(k >> 1, k >> 1))));
				f.addCode(c.setLocal(c1, c.i64_add(c.getLocal(c1), c.i64_shr_u(c.getLocal(c0), c.i64_const(32)))));
			}
			if (k > 0) {
				f.addCode(c.setLocal(c0, c.i64_add(c.i64_and(c.getLocal(c0), c.i64_const(4294967295)), c.i64_and(c.getLocal(c0_old), c.i64_const(4294967295)))));
				f.addCode(c.setLocal(c1, c.i64_add(c.i64_add(c.getLocal(c1), c.i64_shr_u(c.getLocal(c0), c.i64_const(32))), c.getLocal(c1_old))));
			}
			for (let i = Math.max(1, k - n32 + 1); i <= k && i < n32; i++) {
				const j = k - i;
				f.addCode(c.setLocal(c0, c.i64_add(c.i64_and(c.getLocal(c0), c.i64_const(4294967295)), mulqm(i, j))));
				f.addCode(c.setLocal(c1, c.i64_add(c.getLocal(c1), c.i64_shr_u(c.getLocal(c0), c.i64_const(32)))));
			}
			if (k < n32) {
				f.addCode(c.setLocal("m" + k, c.i64_and(c.i64_mul(c.i64_and(c.getLocal(c0), c.i64_const(4294967295)), c.getLocal("np32")), c.i64_const("0xFFFFFFFF"))));
				f.addCode(c.setLocal(c0, c.i64_add(c.i64_and(c.getLocal(c0), c.i64_const(4294967295)), mulqm(0, k))));
				f.addCode(c.setLocal(c1, c.i64_add(c.getLocal(c1), c.i64_shr_u(c.getLocal(c0), c.i64_const(32)))));
			}
			if (k >= n32) f.addCode(c.i64_store32(c.getLocal("r"), (k - n32) * 4, c.getLocal(c0)));
			f.addCode(c.setLocal(c0_old, c.getLocal(c1)), c.setLocal(c1_old, c.i64_shr_u(c.getLocal(c0_old), c.i64_const(32))));
		}
		f.addCode(c.i64_store32(c.getLocal("r"), n32 * 4 - 4, c.getLocal(c0_old)));
		f.addCode(c.if(c.i32_wrap_i64(c.getLocal(c1_old)), c.drop(c.call(intPrefix + "_sub", c.getLocal("r"), c.i32_const(pq), c.getLocal("r"))), c.if(c.call(intPrefix + "_gte", c.getLocal("r"), c.i32_const(pq)), c.drop(c.call(intPrefix + "_sub", c.getLocal("r"), c.i32_const(pq), c.getLocal("r"))))));
	}
	function buildSquareOld() {
		const f = module.addFunction(prefix + "_squareOld");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.call(prefix + "_mul", c.getLocal("x"), c.getLocal("x"), c.getLocal("r")));
	}
	function buildToMontgomery() {
		const f = module.addFunction(prefix + "_toMontgomery");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.call(prefix + "_mul", c.getLocal("x"), c.i32_const(pR2), c.getLocal("r")));
	}
	function buildFromMontgomery() {
		const pAux2 = module.alloc(n8 * 2);
		const f = module.addFunction(prefix + "_fromMontgomery");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.call(intPrefix + "_copy", c.getLocal("x"), c.i32_const(pAux2)));
		f.addCode(c.call(intPrefix + "_zero", c.i32_const(pAux2 + n8)));
		f.addCode(c.call(prefix + "_mReduct", c.i32_const(pAux2), c.getLocal("r")));
	}
	function buildInverse() {
		const f = module.addFunction(prefix + "_inverse");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.call(prefix + "_fromMontgomery", c.getLocal("x"), c.getLocal("r")));
		f.addCode(c.call(intPrefix + "_inverseMod", c.getLocal("r"), c.i32_const(pq), c.getLocal("r")));
		f.addCode(c.call(prefix + "_toMontgomery", c.getLocal("r"), c.getLocal("r")));
	}
	let _nqr = 2n;
	if (isPrime(q)) while (modPow(_nqr, _e, q) !== _minusOne) _nqr = _nqr + 1n;
	let s2 = 0;
	let _t = _minusOne;
	while (!isOdd(_t) && _t !== 0n) {
		s2++;
		_t = _t >> 1n;
	}
	const pt = module.alloc(n8, bigInt2BytesLE(_t, n8));
	const _nqrToT = modPow(_nqr, _t, q);
	const pNqrToT = module.alloc(bigInt2BytesLE((_nqrToT << BigInt(n64 * 64)) % q, n8));
	const _tPlusOneOver2 = _t + 1n >> 1n;
	const ptPlusOneOver2 = module.alloc(n8, bigInt2BytesLE(_tPlusOneOver2, n8));
	function buildSqrt() {
		const f = module.addFunction(prefix + "_sqrt");
		f.addParam("n", "i32");
		f.addParam("r", "i32");
		f.addLocal("m", "i32");
		f.addLocal("i", "i32");
		f.addLocal("j", "i32");
		const c = f.getCodeBuilder();
		const ONE = c.i32_const(pOne);
		const C = c.i32_const(module.alloc(n8));
		const T = c.i32_const(module.alloc(n8));
		const R = c.i32_const(module.alloc(n8));
		const SQ = c.i32_const(module.alloc(n8));
		const B = c.i32_const(module.alloc(n8));
		f.addCode(c.if(c.call(prefix + "_isZero", c.getLocal("n")), c.ret(c.call(prefix + "_zero", c.getLocal("r")))), c.setLocal("m", c.i32_const(s2)), c.call(prefix + "_copy", c.i32_const(pNqrToT), C), c.call(prefix + "_exp", c.getLocal("n"), c.i32_const(pt), c.i32_const(n8), T), c.call(prefix + "_exp", c.getLocal("n"), c.i32_const(ptPlusOneOver2), c.i32_const(n8), R), c.block(c.loop(c.br_if(1, c.call(prefix + "_eq", T, ONE)), c.call(prefix + "_square", T, SQ), c.setLocal("i", c.i32_const(1)), c.block(c.loop(c.br_if(1, c.call(prefix + "_eq", SQ, ONE)), c.call(prefix + "_square", SQ, SQ), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))), c.call(prefix + "_copy", C, B), c.setLocal("j", c.i32_sub(c.i32_sub(c.getLocal("m"), c.getLocal("i")), c.i32_const(1))), c.block(c.loop(c.br_if(1, c.i32_eqz(c.getLocal("j"))), c.call(prefix + "_square", B, B), c.setLocal("j", c.i32_sub(c.getLocal("j"), c.i32_const(1))), c.br(0))), c.setLocal("m", c.getLocal("i")), c.call(prefix + "_square", B, C), c.call(prefix + "_mul", T, C, T), c.call(prefix + "_mul", R, B, R), c.br(0))), c.if(c.call(prefix + "_isNegative", R), c.call(prefix + "_neg", R, c.getLocal("r")), c.call(prefix + "_copy", R, c.getLocal("r"))));
	}
	function buildIsSquare() {
		const f = module.addFunction(prefix + "_isSquare");
		f.addParam("n", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		const ONE = c.i32_const(pOne);
		const AUX = c.i32_const(module.alloc(n8));
		f.addCode(c.if(c.call(prefix + "_isZero", c.getLocal("n")), c.ret(c.i32_const(1))), c.call(prefix + "_exp", c.getLocal("n"), c.i32_const(pe), c.i32_const(n8), AUX), c.call(prefix + "_eq", AUX, ONE));
	}
	function buildLoad() {
		const f = module.addFunction(prefix + "_load");
		f.addParam("scalar", "i32");
		f.addParam("scalarLen", "i32");
		f.addParam("r", "i32");
		f.addLocal("p", "i32");
		f.addLocal("l", "i32");
		f.addLocal("i", "i32");
		f.addLocal("j", "i32");
		const c = f.getCodeBuilder();
		const R = c.i32_const(module.alloc(n8));
		const pAux = module.alloc(n8);
		const AUX = c.i32_const(pAux);
		f.addCode(c.call(intPrefix + "_zero", c.getLocal("r")), c.setLocal("i", c.i32_const(n8)), c.setLocal("p", c.getLocal("scalar")), c.block(c.loop(c.br_if(1, c.i32_gt_u(c.getLocal("i"), c.getLocal("scalarLen"))), c.if(c.i32_eq(c.getLocal("i"), c.i32_const(n8)), c.call(prefix + "_one", R), c.call(prefix + "_mul", R, c.i32_const(pR2), R)), c.call(prefix + "_mul", c.getLocal("p"), R, AUX), c.call(prefix + "_add", c.getLocal("r"), AUX, c.getLocal("r")), c.setLocal("p", c.i32_add(c.getLocal("p"), c.i32_const(n8))), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(n8))), c.br(0))), c.setLocal("l", c.i32_rem_u(c.getLocal("scalarLen"), c.i32_const(n8))), c.if(c.i32_eqz(c.getLocal("l")), c.ret([])), c.call(intPrefix + "_zero", AUX), c.setLocal("j", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("j"), c.getLocal("l"))), c.i32_store8(c.getLocal("j"), pAux, c.i32_load8_u(c.getLocal("p"))), c.setLocal("p", c.i32_add(c.getLocal("p"), c.i32_const(1))), c.setLocal("j", c.i32_add(c.getLocal("j"), c.i32_const(1))), c.br(0))), c.if(c.i32_eq(c.getLocal("i"), c.i32_const(n8)), c.call(prefix + "_one", R), c.call(prefix + "_mul", R, c.i32_const(pR2), R)), c.call(prefix + "_mul", AUX, R, AUX), c.call(prefix + "_add", c.getLocal("r"), AUX, c.getLocal("r")));
	}
	function buildTimesScalar$3() {
		const f = module.addFunction(prefix + "_timesScalar");
		f.addParam("x", "i32");
		f.addParam("scalar", "i32");
		f.addParam("scalarLen", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const AUX = c.i32_const(module.alloc(n8));
		f.addCode(c.call(prefix + "_load", c.getLocal("scalar"), c.getLocal("scalarLen"), AUX), c.call(prefix + "_toMontgomery", AUX, AUX), c.call(prefix + "_mul", c.getLocal("x"), AUX, c.getLocal("r")));
	}
	function buildIsOne() {
		const f = module.addFunction(prefix + "_isOne");
		f.addParam("x", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		f.addCode(c.ret(c.call(intPrefix + "_eq", c.getLocal("x"), c.i32_const(pOne))));
	}
	module.exportFunction(intPrefix + "_copy", prefix + "_copy");
	module.exportFunction(intPrefix + "_zero", prefix + "_zero");
	module.exportFunction(intPrefix + "_isZero", prefix + "_isZero");
	module.exportFunction(intPrefix + "_eq", prefix + "_eq");
	buildIsOne();
	buildAdd();
	buildSub();
	buildNeg();
	buildMReduct();
	buildMul();
	buildSquare();
	buildSquareOld();
	buildToMontgomery();
	buildFromMontgomery();
	buildIsNegative();
	buildSign();
	buildInverse();
	buildOne();
	buildLoad();
	buildTimesScalar$3();
	build_batchinverse_default(module, prefix);
	build_batchconvertion_default(module, prefix + "_batchToMontgomery", prefix + "_toMontgomery", n8, n8);
	build_batchconvertion_default(module, prefix + "_batchFromMontgomery", prefix + "_fromMontgomery", n8, n8);
	build_batchconvertion_default(module, prefix + "_batchNeg", prefix + "_neg", n8, n8);
	build_batchop_default(module, prefix + "_batchAdd", prefix + "_add", n8, n8);
	build_batchop_default(module, prefix + "_batchSub", prefix + "_sub", n8, n8);
	build_batchop_default(module, prefix + "_batchMul", prefix + "_mul", n8, n8);
	module.exportFunction(prefix + "_add");
	module.exportFunction(prefix + "_sub");
	module.exportFunction(prefix + "_neg");
	module.exportFunction(prefix + "_isNegative");
	module.exportFunction(prefix + "_isOne");
	module.exportFunction(prefix + "_sign");
	module.exportFunction(prefix + "_mReduct");
	module.exportFunction(prefix + "_mul");
	module.exportFunction(prefix + "_square");
	module.exportFunction(prefix + "_squareOld");
	module.exportFunction(prefix + "_fromMontgomery");
	module.exportFunction(prefix + "_toMontgomery");
	module.exportFunction(prefix + "_inverse");
	module.exportFunction(prefix + "_one");
	module.exportFunction(prefix + "_load");
	module.exportFunction(prefix + "_timesScalar");
	buildTimesScalar(module, prefix + "_exp", n8, prefix + "_mul", prefix + "_square", intPrefix + "_copy", prefix + "_one");
	module.exportFunction(prefix + "_exp");
	module.exportFunction(prefix + "_batchInverse");
	if (isPrime(q)) {
		buildSqrt();
		buildIsSquare();
		module.exportFunction(prefix + "_sqrt");
		module.exportFunction(prefix + "_isSquare");
	}
	module.exportFunction(prefix + "_batchToMontgomery");
	module.exportFunction(prefix + "_batchFromMontgomery");
	return prefix;
}
//#endregion
//#region src/build_f1.js
function buildF1(module, _q, _prefix, _f1mPrefix, _intPrefix) {
	const q = BigInt(_q);
	const n64 = Math.floor((bitLength(q - 1n) - 1) / 64) + 1;
	const n8 = n64 * 8;
	const prefix = _prefix || "f1";
	if (module.modules[prefix]) return prefix;
	module.modules[prefix] = { n64 };
	const intPrefix = _intPrefix || "int";
	const f1mPrefix = buildF1m(module, q, _f1mPrefix, intPrefix);
	const pR2 = module.modules[f1mPrefix].pR2;
	const pq = module.modules[f1mPrefix].pq;
	const pePlusOne = module.modules[f1mPrefix].pePlusOne;
	function buildMul() {
		const pAux1 = module.alloc(n8);
		const f = module.addFunction(prefix + "_mul");
		f.addParam("x", "i32");
		f.addParam("y", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.call(f1mPrefix + "_mul", c.getLocal("x"), c.getLocal("y"), c.i32_const(pAux1)));
		f.addCode(c.call(f1mPrefix + "_mul", c.i32_const(pAux1), c.i32_const(pR2), c.getLocal("r")));
	}
	function buildSquare() {
		const f = module.addFunction(prefix + "_square");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.call(prefix + "_mul", c.getLocal("x"), c.getLocal("x"), c.getLocal("r")));
	}
	function buildInverse() {
		const f = module.addFunction(prefix + "_inverse");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.call(intPrefix + "_inverseMod", c.getLocal("x"), c.i32_const(pq), c.getLocal("r")));
	}
	function buildIsNegative() {
		const f = module.addFunction(prefix + "_isNegative");
		f.addParam("x", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		f.addCode(c.call(intPrefix + "_gte", c.getLocal("x"), c.i32_const(pePlusOne)));
	}
	buildMul();
	buildSquare();
	buildInverse();
	buildIsNegative();
	module.exportFunction(f1mPrefix + "_add", prefix + "_add");
	module.exportFunction(f1mPrefix + "_sub", prefix + "_sub");
	module.exportFunction(f1mPrefix + "_neg", prefix + "_neg");
	module.exportFunction(prefix + "_mul");
	module.exportFunction(prefix + "_square");
	module.exportFunction(prefix + "_inverse");
	module.exportFunction(prefix + "_isNegative");
	module.exportFunction(f1mPrefix + "_copy", prefix + "_copy");
	module.exportFunction(f1mPrefix + "_zero", prefix + "_zero");
	module.exportFunction(f1mPrefix + "_one", prefix + "_one");
	module.exportFunction(f1mPrefix + "_isZero", prefix + "_isZero");
	module.exportFunction(f1mPrefix + "_eq", prefix + "_eq");
	return prefix;
}
//#endregion
//#region src/build_f2m.js
function buildF2m(module, mulNonResidueFn, prefix, f1mPrefix) {
	if (module.modules[prefix]) return prefix;
	const f1n8 = module.modules[f1mPrefix].n64 * 8;
	const q = module.modules[f1mPrefix].q;
	module.modules[prefix] = { n64: module.modules[f1mPrefix].n64 * 2 };
	function buildAdd() {
		const f = module.addFunction(prefix + "_add");
		f.addParam("x", "i32");
		f.addParam("y", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const y0 = c.getLocal("y");
		const y1 = c.i32_add(c.getLocal("y"), c.i32_const(f1n8));
		const r0 = c.getLocal("r");
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(f1n8));
		f.addCode(c.call(f1mPrefix + "_add", x0, y0, r0), c.call(f1mPrefix + "_add", x1, y1, r1));
	}
	function buildTimesScalar$2() {
		const f = module.addFunction(prefix + "_timesScalar");
		f.addParam("x", "i32");
		f.addParam("scalar", "i32");
		f.addParam("scalarLen", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const r0 = c.getLocal("r");
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(f1n8));
		f.addCode(c.call(f1mPrefix + "_timesScalar", x0, c.getLocal("scalar"), c.getLocal("scalarLen"), r0), c.call(f1mPrefix + "_timesScalar", x1, c.getLocal("scalar"), c.getLocal("scalarLen"), r1));
	}
	function buildSub() {
		const f = module.addFunction(prefix + "_sub");
		f.addParam("x", "i32");
		f.addParam("y", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const y0 = c.getLocal("y");
		const y1 = c.i32_add(c.getLocal("y"), c.i32_const(f1n8));
		const r0 = c.getLocal("r");
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(f1n8));
		f.addCode(c.call(f1mPrefix + "_sub", x0, y0, r0), c.call(f1mPrefix + "_sub", x1, y1, r1));
	}
	function buildNeg() {
		const f = module.addFunction(prefix + "_neg");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const r0 = c.getLocal("r");
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(f1n8));
		f.addCode(c.call(f1mPrefix + "_neg", x0, r0), c.call(f1mPrefix + "_neg", x1, r1));
	}
	function buildConjugate() {
		const f = module.addFunction(prefix + "_conjugate");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const r0 = c.getLocal("r");
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(f1n8));
		f.addCode(c.call(f1mPrefix + "_copy", x0, r0), c.call(f1mPrefix + "_neg", x1, r1));
	}
	function buildIsNegative() {
		const f = module.addFunction(prefix + "_isNegative");
		f.addParam("x", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		f.addCode(c.if(c.call(f1mPrefix + "_isZero", x1), c.ret(c.call(f1mPrefix + "_isNegative", x0))), c.ret(c.call(f1mPrefix + "_isNegative", x1)));
	}
	function buildMul() {
		const f = module.addFunction(prefix + "_mul");
		f.addParam("x", "i32");
		f.addParam("y", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const y0 = c.getLocal("y");
		const y1 = c.i32_add(c.getLocal("y"), c.i32_const(f1n8));
		const r0 = c.getLocal("r");
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(f1n8));
		const A = c.i32_const(module.alloc(f1n8));
		const B = c.i32_const(module.alloc(f1n8));
		const C = c.i32_const(module.alloc(f1n8));
		const D = c.i32_const(module.alloc(f1n8));
		f.addCode(c.call(f1mPrefix + "_mul", x0, y0, A), c.call(f1mPrefix + "_mul", x1, y1, B), c.call(f1mPrefix + "_add", x0, x1, C), c.call(f1mPrefix + "_add", y0, y1, D), c.call(f1mPrefix + "_mul", C, D, C), c.call(mulNonResidueFn, B, r0), c.call(f1mPrefix + "_add", A, r0, r0), c.call(f1mPrefix + "_add", A, B, r1), c.call(f1mPrefix + "_sub", C, r1, r1));
	}
	function buildMul1() {
		const f = module.addFunction(prefix + "_mul1");
		f.addParam("x", "i32");
		f.addParam("y", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const y = c.getLocal("y");
		const r0 = c.getLocal("r");
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(f1n8));
		f.addCode(c.call(f1mPrefix + "_mul", x0, y, r0), c.call(f1mPrefix + "_mul", x1, y, r1));
	}
	function buildSquare() {
		const f = module.addFunction(prefix + "_square");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const r0 = c.getLocal("r");
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(f1n8));
		const AB = c.i32_const(module.alloc(f1n8));
		const APB = c.i32_const(module.alloc(f1n8));
		const APNB = c.i32_const(module.alloc(f1n8));
		const ABPNAB = c.i32_const(module.alloc(f1n8));
		f.addCode(c.call(f1mPrefix + "_mul", x0, x1, AB), c.call(f1mPrefix + "_add", x0, x1, APB), c.call(mulNonResidueFn, x1, APNB), c.call(f1mPrefix + "_add", x0, APNB, APNB), c.call(mulNonResidueFn, AB, ABPNAB), c.call(f1mPrefix + "_add", ABPNAB, AB, ABPNAB), c.call(f1mPrefix + "_mul", APB, APNB, r0), c.call(f1mPrefix + "_sub", r0, ABPNAB, r0), c.call(f1mPrefix + "_add", AB, AB, r1));
	}
	function buildToMontgomery() {
		const f = module.addFunction(prefix + "_toMontgomery");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const r0 = c.getLocal("r");
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(f1n8));
		f.addCode(c.call(f1mPrefix + "_toMontgomery", x0, r0), c.call(f1mPrefix + "_toMontgomery", x1, r1));
	}
	function buildFromMontgomery() {
		const f = module.addFunction(prefix + "_fromMontgomery");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const r0 = c.getLocal("r");
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(f1n8));
		f.addCode(c.call(f1mPrefix + "_fromMontgomery", x0, r0), c.call(f1mPrefix + "_fromMontgomery", x1, r1));
	}
	function buildCopy() {
		const f = module.addFunction(prefix + "_copy");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const r0 = c.getLocal("r");
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(f1n8));
		f.addCode(c.call(f1mPrefix + "_copy", x0, r0), c.call(f1mPrefix + "_copy", x1, r1));
	}
	function buildZero() {
		const f = module.addFunction(prefix + "_zero");
		f.addParam("x", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		f.addCode(c.call(f1mPrefix + "_zero", x0), c.call(f1mPrefix + "_zero", x1));
	}
	function buildOne() {
		const f = module.addFunction(prefix + "_one");
		f.addParam("x", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		f.addCode(c.call(f1mPrefix + "_one", x0), c.call(f1mPrefix + "_zero", x1));
	}
	function buildEq() {
		const f = module.addFunction(prefix + "_eq");
		f.addParam("x", "i32");
		f.addParam("y", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const y0 = c.getLocal("y");
		const y1 = c.i32_add(c.getLocal("y"), c.i32_const(f1n8));
		f.addCode(c.i32_and(c.call(f1mPrefix + "_eq", x0, y0), c.call(f1mPrefix + "_eq", x1, y1)));
	}
	function buildIsZero() {
		const f = module.addFunction(prefix + "_isZero");
		f.addParam("x", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		f.addCode(c.i32_and(c.call(f1mPrefix + "_isZero", x0), c.call(f1mPrefix + "_isZero", x1)));
	}
	function buildInverse() {
		const f = module.addFunction(prefix + "_inverse");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const r0 = c.getLocal("r");
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(f1n8));
		const t0 = c.i32_const(module.alloc(f1n8));
		const t1 = c.i32_const(module.alloc(f1n8));
		const t2 = c.i32_const(module.alloc(f1n8));
		const t3 = c.i32_const(module.alloc(f1n8));
		f.addCode(c.call(f1mPrefix + "_square", x0, t0), c.call(f1mPrefix + "_square", x1, t1), c.call(mulNonResidueFn, t1, t2), c.call(f1mPrefix + "_sub", t0, t2, t2), c.call(f1mPrefix + "_inverse", t2, t3), c.call(f1mPrefix + "_mul", x0, t3, r0), c.call(f1mPrefix + "_mul", x1, t3, r1), c.call(f1mPrefix + "_neg", r1, r1));
	}
	function buildSign() {
		const f = module.addFunction(prefix + "_sign");
		f.addParam("x", "i32");
		f.addLocal("s", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		f.addCode(c.setLocal("s", c.call(f1mPrefix + "_sign", x1)), c.if(c.getLocal("s"), c.ret(c.getLocal("s"))), c.ret(c.call(f1mPrefix + "_sign", x0)));
	}
	function buildIsOne() {
		const f = module.addFunction(prefix + "_isOne");
		f.addParam("x", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		f.addCode(c.ret(c.i32_and(c.call(f1mPrefix + "_isOne", x0), c.call(f1mPrefix + "_isZero", x1))));
	}
	function buildSqrt() {
		const f = module.addFunction(prefix + "_sqrt");
		f.addParam("a", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		const e34 = c.i32_const(module.alloc(bigInt2BytesLE((BigInt(q || 0) - 3n) / 4n, f1n8)));
		const e12 = c.i32_const(module.alloc(bigInt2BytesLE((BigInt(q || 0) - 1n) / 2n, f1n8)));
		const a = c.getLocal("a");
		const a1 = c.i32_const(module.alloc(f1n8 * 2));
		const alpha = c.i32_const(module.alloc(f1n8 * 2));
		const a0 = c.i32_const(module.alloc(f1n8 * 2));
		const pn1 = module.alloc(f1n8 * 2);
		const n1 = c.i32_const(pn1);
		const n1a = c.i32_const(pn1);
		const n1b = c.i32_const(pn1 + f1n8);
		const x0 = c.i32_const(module.alloc(f1n8 * 2));
		const b = c.i32_const(module.alloc(f1n8 * 2));
		f.addCode(c.call(prefix + "_one", n1), c.call(prefix + "_neg", n1, n1), c.call(prefix + "_exp", a, e34, c.i32_const(f1n8), a1), c.call(prefix + "_square", a1, alpha), c.call(prefix + "_mul", a, alpha, alpha), c.call(prefix + "_conjugate", alpha, a0), c.call(prefix + "_mul", a0, alpha, a0), c.if(c.call(prefix + "_eq", a0, n1), c.unreachable()), c.call(prefix + "_mul", a1, a, x0), c.if(c.call(prefix + "_eq", alpha, n1), [
			...c.call(f1mPrefix + "_zero", n1a),
			...c.call(f1mPrefix + "_one", n1b),
			...c.call(prefix + "_mul", n1, x0, c.getLocal("pr"))
		], [
			...c.call(prefix + "_one", b),
			...c.call(prefix + "_add", b, alpha, b),
			...c.call(prefix + "_exp", b, e12, c.i32_const(f1n8), b),
			...c.call(prefix + "_mul", b, x0, c.getLocal("pr"))
		]));
	}
	function buildIsSquare() {
		const f = module.addFunction(prefix + "_isSquare");
		f.addParam("a", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		const e34 = c.i32_const(module.alloc(bigInt2BytesLE((BigInt(q || 0) - 3n) / 4n, f1n8)));
		const a = c.getLocal("a");
		const a1 = c.i32_const(module.alloc(f1n8 * 2));
		const alpha = c.i32_const(module.alloc(f1n8 * 2));
		const a0 = c.i32_const(module.alloc(f1n8 * 2));
		const pn1 = module.alloc(f1n8 * 2);
		const n1 = c.i32_const(pn1);
		f.addCode(c.call(prefix + "_one", n1), c.call(prefix + "_neg", n1, n1), c.call(prefix + "_exp", a, e34, c.i32_const(f1n8), a1), c.call(prefix + "_square", a1, alpha), c.call(prefix + "_mul", a, alpha, alpha), c.call(prefix + "_conjugate", alpha, a0), c.call(prefix + "_mul", a0, alpha, a0), c.if(c.call(prefix + "_eq", a0, n1), c.ret(c.i32_const(0))), c.ret(c.i32_const(1)));
	}
	buildIsZero();
	buildIsOne();
	buildZero();
	buildOne();
	buildCopy();
	buildMul();
	buildMul1();
	buildSquare();
	buildAdd();
	buildSub();
	buildNeg();
	buildConjugate();
	buildToMontgomery();
	buildFromMontgomery();
	buildEq();
	buildInverse();
	buildTimesScalar$2();
	buildSign();
	buildIsNegative();
	module.exportFunction(prefix + "_isZero");
	module.exportFunction(prefix + "_isOne");
	module.exportFunction(prefix + "_zero");
	module.exportFunction(prefix + "_one");
	module.exportFunction(prefix + "_copy");
	module.exportFunction(prefix + "_mul");
	module.exportFunction(prefix + "_mul1");
	module.exportFunction(prefix + "_square");
	module.exportFunction(prefix + "_add");
	module.exportFunction(prefix + "_sub");
	module.exportFunction(prefix + "_neg");
	module.exportFunction(prefix + "_sign");
	module.exportFunction(prefix + "_conjugate");
	module.exportFunction(prefix + "_fromMontgomery");
	module.exportFunction(prefix + "_toMontgomery");
	module.exportFunction(prefix + "_eq");
	module.exportFunction(prefix + "_inverse");
	build_batchinverse_default(module, prefix);
	buildTimesScalar(module, prefix + "_exp", f1n8 * 2, prefix + "_mul", prefix + "_square", prefix + "_copy", prefix + "_one");
	buildSqrt();
	buildIsSquare();
	module.exportFunction(prefix + "_exp");
	module.exportFunction(prefix + "_timesScalar");
	module.exportFunction(prefix + "_batchInverse");
	module.exportFunction(prefix + "_sqrt");
	module.exportFunction(prefix + "_isSquare");
	module.exportFunction(prefix + "_isNegative");
	return prefix;
}
//#endregion
//#region src/build_f3m.js
function buildF3m(module, mulNonResidueFn, prefix, f1mPrefix) {
	if (module.modules[prefix]) return prefix;
	const f1n8 = module.modules[f1mPrefix].n64 * 8;
	module.modules[prefix] = { n64: module.modules[f1mPrefix].n64 * 3 };
	function buildAdd() {
		const f = module.addFunction(prefix + "_add");
		f.addParam("x", "i32");
		f.addParam("y", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const x2 = c.i32_add(c.getLocal("x"), c.i32_const(2 * f1n8));
		const y0 = c.getLocal("y");
		const y1 = c.i32_add(c.getLocal("y"), c.i32_const(f1n8));
		const y2 = c.i32_add(c.getLocal("y"), c.i32_const(2 * f1n8));
		const r0 = c.getLocal("r");
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(f1n8));
		const r2 = c.i32_add(c.getLocal("r"), c.i32_const(2 * f1n8));
		f.addCode(c.call(f1mPrefix + "_add", x0, y0, r0), c.call(f1mPrefix + "_add", x1, y1, r1), c.call(f1mPrefix + "_add", x2, y2, r2));
	}
	function buildTimesScalar$1() {
		const f = module.addFunction(prefix + "_timesScalar");
		f.addParam("x", "i32");
		f.addParam("scalar", "i32");
		f.addParam("scalarLen", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const x2 = c.i32_add(c.getLocal("x"), c.i32_const(2 * f1n8));
		const r0 = c.getLocal("r");
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(f1n8));
		const r2 = c.i32_add(c.getLocal("r"), c.i32_const(2 * f1n8));
		f.addCode(c.call(f1mPrefix + "_timesScalar", x0, c.getLocal("scalar"), c.getLocal("scalarLen"), r0), c.call(f1mPrefix + "_timesScalar", x1, c.getLocal("scalar"), c.getLocal("scalarLen"), r1), c.call(f1mPrefix + "_timesScalar", x2, c.getLocal("scalar"), c.getLocal("scalarLen"), r2));
	}
	function buildSub() {
		const f = module.addFunction(prefix + "_sub");
		f.addParam("x", "i32");
		f.addParam("y", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const x2 = c.i32_add(c.getLocal("x"), c.i32_const(2 * f1n8));
		const y0 = c.getLocal("y");
		const y1 = c.i32_add(c.getLocal("y"), c.i32_const(f1n8));
		const y2 = c.i32_add(c.getLocal("y"), c.i32_const(2 * f1n8));
		const r0 = c.getLocal("r");
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(f1n8));
		const r2 = c.i32_add(c.getLocal("r"), c.i32_const(2 * f1n8));
		f.addCode(c.call(f1mPrefix + "_sub", x0, y0, r0), c.call(f1mPrefix + "_sub", x1, y1, r1), c.call(f1mPrefix + "_sub", x2, y2, r2));
	}
	function buildNeg() {
		const f = module.addFunction(prefix + "_neg");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const x2 = c.i32_add(c.getLocal("x"), c.i32_const(2 * f1n8));
		const r0 = c.getLocal("r");
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(f1n8));
		const r2 = c.i32_add(c.getLocal("r"), c.i32_const(2 * f1n8));
		f.addCode(c.call(f1mPrefix + "_neg", x0, r0), c.call(f1mPrefix + "_neg", x1, r1), c.call(f1mPrefix + "_neg", x2, r2));
	}
	function buildIsNegative() {
		const f = module.addFunction(prefix + "_isNegative");
		f.addParam("x", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const x2 = c.i32_add(c.getLocal("x"), c.i32_const(2 * f1n8));
		f.addCode(c.if(c.call(f1mPrefix + "_isZero", x2), c.if(c.call(f1mPrefix + "_isZero", x1), c.ret(c.call(f1mPrefix + "_isNegative", x0)), c.ret(c.call(f1mPrefix + "_isNegative", x1)))), c.ret(c.call(f1mPrefix + "_isNegative", x2)));
	}
	function buildMul() {
		const f = module.addFunction(prefix + "_mul");
		f.addParam("x", "i32");
		f.addParam("y", "i32");
		f.addParam("r", "i32");
		const cd = f.getCodeBuilder();
		const a = cd.getLocal("x");
		const b = cd.i32_add(cd.getLocal("x"), cd.i32_const(f1n8));
		const c = cd.i32_add(cd.getLocal("x"), cd.i32_const(2 * f1n8));
		const A = cd.getLocal("y");
		const B = cd.i32_add(cd.getLocal("y"), cd.i32_const(f1n8));
		const C = cd.i32_add(cd.getLocal("y"), cd.i32_const(2 * f1n8));
		const r0 = cd.getLocal("r");
		const r1 = cd.i32_add(cd.getLocal("r"), cd.i32_const(f1n8));
		const r2 = cd.i32_add(cd.getLocal("r"), cd.i32_const(2 * f1n8));
		const aA = cd.i32_const(module.alloc(f1n8));
		const bB = cd.i32_const(module.alloc(f1n8));
		const cC = cd.i32_const(module.alloc(f1n8));
		const a_b = cd.i32_const(module.alloc(f1n8));
		const A_B = cd.i32_const(module.alloc(f1n8));
		const a_c = cd.i32_const(module.alloc(f1n8));
		const A_C = cd.i32_const(module.alloc(f1n8));
		const b_c = cd.i32_const(module.alloc(f1n8));
		const B_C = cd.i32_const(module.alloc(f1n8));
		const aA_bB = cd.i32_const(module.alloc(f1n8));
		const aA_cC = cd.i32_const(module.alloc(f1n8));
		const bB_cC = cd.i32_const(module.alloc(f1n8));
		const AUX = cd.i32_const(module.alloc(f1n8));
		f.addCode(cd.call(f1mPrefix + "_mul", a, A, aA), cd.call(f1mPrefix + "_mul", b, B, bB), cd.call(f1mPrefix + "_mul", c, C, cC), cd.call(f1mPrefix + "_add", a, b, a_b), cd.call(f1mPrefix + "_add", A, B, A_B), cd.call(f1mPrefix + "_add", a, c, a_c), cd.call(f1mPrefix + "_add", A, C, A_C), cd.call(f1mPrefix + "_add", b, c, b_c), cd.call(f1mPrefix + "_add", B, C, B_C), cd.call(f1mPrefix + "_add", aA, bB, aA_bB), cd.call(f1mPrefix + "_add", aA, cC, aA_cC), cd.call(f1mPrefix + "_add", bB, cC, bB_cC), cd.call(f1mPrefix + "_mul", b_c, B_C, r0), cd.call(f1mPrefix + "_sub", r0, bB_cC, r0), cd.call(mulNonResidueFn, r0, r0), cd.call(f1mPrefix + "_add", aA, r0, r0), cd.call(f1mPrefix + "_mul", a_b, A_B, r1), cd.call(f1mPrefix + "_sub", r1, aA_bB, r1), cd.call(mulNonResidueFn, cC, AUX), cd.call(f1mPrefix + "_add", r1, AUX, r1), cd.call(f1mPrefix + "_mul", a_c, A_C, r2), cd.call(f1mPrefix + "_sub", r2, aA_cC, r2), cd.call(f1mPrefix + "_add", r2, bB, r2));
	}
	function buildSquare() {
		const f = module.addFunction(prefix + "_square");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const A = c.getLocal("x");
		const B = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const C = c.i32_add(c.getLocal("x"), c.i32_const(2 * f1n8));
		const r0 = c.getLocal("r");
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(f1n8));
		const r2 = c.i32_add(c.getLocal("r"), c.i32_const(2 * f1n8));
		const s0 = c.i32_const(module.alloc(f1n8));
		const ab = c.i32_const(module.alloc(f1n8));
		const s1 = c.i32_const(module.alloc(f1n8));
		const s2 = c.i32_const(module.alloc(f1n8));
		const bc = c.i32_const(module.alloc(f1n8));
		const s3 = c.i32_const(module.alloc(f1n8));
		const s4 = c.i32_const(module.alloc(f1n8));
		f.addCode(c.call(f1mPrefix + "_square", A, s0), c.call(f1mPrefix + "_mul", A, B, ab), c.call(f1mPrefix + "_add", ab, ab, s1), c.call(f1mPrefix + "_sub", A, B, s2), c.call(f1mPrefix + "_add", s2, C, s2), c.call(f1mPrefix + "_square", s2, s2), c.call(f1mPrefix + "_mul", B, C, bc), c.call(f1mPrefix + "_add", bc, bc, s3), c.call(f1mPrefix + "_square", C, s4), c.call(mulNonResidueFn, s3, r0), c.call(f1mPrefix + "_add", s0, r0, r0), c.call(mulNonResidueFn, s4, r1), c.call(f1mPrefix + "_add", s1, r1, r1), c.call(f1mPrefix + "_add", s0, s4, r2), c.call(f1mPrefix + "_sub", s3, r2, r2), c.call(f1mPrefix + "_add", s2, r2, r2), c.call(f1mPrefix + "_add", s1, r2, r2));
	}
	function buildToMontgomery() {
		const f = module.addFunction(prefix + "_toMontgomery");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const x2 = c.i32_add(c.getLocal("x"), c.i32_const(2 * f1n8));
		const r0 = c.getLocal("r");
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(f1n8));
		const r2 = c.i32_add(c.getLocal("r"), c.i32_const(2 * f1n8));
		f.addCode(c.call(f1mPrefix + "_toMontgomery", x0, r0), c.call(f1mPrefix + "_toMontgomery", x1, r1), c.call(f1mPrefix + "_toMontgomery", x2, r2));
	}
	function buildFromMontgomery() {
		const f = module.addFunction(prefix + "_fromMontgomery");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const x2 = c.i32_add(c.getLocal("x"), c.i32_const(2 * f1n8));
		const r0 = c.getLocal("r");
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(f1n8));
		const r2 = c.i32_add(c.getLocal("r"), c.i32_const(2 * f1n8));
		f.addCode(c.call(f1mPrefix + "_fromMontgomery", x0, r0), c.call(f1mPrefix + "_fromMontgomery", x1, r1), c.call(f1mPrefix + "_fromMontgomery", x2, r2));
	}
	function buildCopy() {
		const f = module.addFunction(prefix + "_copy");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const x2 = c.i32_add(c.getLocal("x"), c.i32_const(2 * f1n8));
		const r0 = c.getLocal("r");
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(f1n8));
		const r2 = c.i32_add(c.getLocal("r"), c.i32_const(2 * f1n8));
		f.addCode(c.call(f1mPrefix + "_copy", x0, r0), c.call(f1mPrefix + "_copy", x1, r1), c.call(f1mPrefix + "_copy", x2, r2));
	}
	function buildZero() {
		const f = module.addFunction(prefix + "_zero");
		f.addParam("x", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const x2 = c.i32_add(c.getLocal("x"), c.i32_const(2 * f1n8));
		f.addCode(c.call(f1mPrefix + "_zero", x0), c.call(f1mPrefix + "_zero", x1), c.call(f1mPrefix + "_zero", x2));
	}
	function buildOne() {
		const f = module.addFunction(prefix + "_one");
		f.addParam("x", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const x2 = c.i32_add(c.getLocal("x"), c.i32_const(2 * f1n8));
		f.addCode(c.call(f1mPrefix + "_one", x0), c.call(f1mPrefix + "_zero", x1), c.call(f1mPrefix + "_zero", x2));
	}
	function buildEq() {
		const f = module.addFunction(prefix + "_eq");
		f.addParam("x", "i32");
		f.addParam("y", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const x2 = c.i32_add(c.getLocal("x"), c.i32_const(2 * f1n8));
		const y0 = c.getLocal("y");
		const y1 = c.i32_add(c.getLocal("y"), c.i32_const(f1n8));
		const y2 = c.i32_add(c.getLocal("y"), c.i32_const(2 * f1n8));
		f.addCode(c.i32_and(c.i32_and(c.call(f1mPrefix + "_eq", x0, y0), c.call(f1mPrefix + "_eq", x1, y1)), c.call(f1mPrefix + "_eq", x2, y2)));
	}
	function buildIsZero() {
		const f = module.addFunction(prefix + "_isZero");
		f.addParam("x", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const x2 = c.i32_add(c.getLocal("x"), c.i32_const(2 * f1n8));
		f.addCode(c.i32_and(c.i32_and(c.call(f1mPrefix + "_isZero", x0), c.call(f1mPrefix + "_isZero", x1)), c.call(f1mPrefix + "_isZero", x2)));
	}
	function buildInverse() {
		const f = module.addFunction(prefix + "_inverse");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const x2 = c.i32_add(c.getLocal("x"), c.i32_const(2 * f1n8));
		const r0 = c.getLocal("r");
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(f1n8));
		const r2 = c.i32_add(c.getLocal("r"), c.i32_const(2 * f1n8));
		const t0 = c.i32_const(module.alloc(f1n8));
		const t1 = c.i32_const(module.alloc(f1n8));
		const t2 = c.i32_const(module.alloc(f1n8));
		const t3 = c.i32_const(module.alloc(f1n8));
		const t4 = c.i32_const(module.alloc(f1n8));
		const t5 = c.i32_const(module.alloc(f1n8));
		const c0 = c.i32_const(module.alloc(f1n8));
		const c1 = c.i32_const(module.alloc(f1n8));
		const c2 = c.i32_const(module.alloc(f1n8));
		const t6 = c.i32_const(module.alloc(f1n8));
		const AUX = c.i32_const(module.alloc(f1n8));
		f.addCode(c.call(f1mPrefix + "_square", x0, t0), c.call(f1mPrefix + "_square", x1, t1), c.call(f1mPrefix + "_square", x2, t2), c.call(f1mPrefix + "_mul", x0, x1, t3), c.call(f1mPrefix + "_mul", x0, x2, t4), c.call(f1mPrefix + "_mul", x1, x2, t5), c.call(mulNonResidueFn, t5, c0), c.call(f1mPrefix + "_sub", t0, c0, c0), c.call(mulNonResidueFn, t2, c1), c.call(f1mPrefix + "_sub", c1, t3, c1), c.call(f1mPrefix + "_sub", t1, t4, c2), c.call(f1mPrefix + "_mul", x2, c1, t6), c.call(f1mPrefix + "_mul", x1, c2, AUX), c.call(f1mPrefix + "_add", t6, AUX, t6), c.call(mulNonResidueFn, t6, t6), c.call(f1mPrefix + "_mul", x0, c0, AUX), c.call(f1mPrefix + "_add", AUX, t6, t6), c.call(f1mPrefix + "_inverse", t6, t6), c.call(f1mPrefix + "_mul", t6, c0, r0), c.call(f1mPrefix + "_mul", t6, c1, r1), c.call(f1mPrefix + "_mul", t6, c2, r2));
	}
	function buildSign() {
		const f = module.addFunction(prefix + "_sign");
		f.addParam("x", "i32");
		f.addLocal("s", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const x2 = c.i32_add(c.getLocal("x"), c.i32_const(2 * f1n8));
		f.addCode(c.setLocal("s", c.call(f1mPrefix + "_sign", x2)), c.if(c.getLocal("s"), c.ret(c.getLocal("s"))), c.setLocal("s", c.call(f1mPrefix + "_sign", x1)), c.if(c.getLocal("s"), c.ret(c.getLocal("s"))), c.ret(c.call(f1mPrefix + "_sign", x0)));
	}
	function buildIsOne() {
		const f = module.addFunction(prefix + "_isOne");
		f.addParam("x", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8));
		const x2 = c.i32_add(c.getLocal("x"), c.i32_const(f1n8 * 2));
		f.addCode(c.ret(c.i32_and(c.i32_and(c.call(f1mPrefix + "_isOne", x0), c.call(f1mPrefix + "_isZero", x1)), c.call(f1mPrefix + "_isZero", x2))));
	}
	buildIsZero();
	buildIsOne();
	buildZero();
	buildOne();
	buildCopy();
	buildMul();
	buildSquare();
	buildAdd();
	buildSub();
	buildNeg();
	buildSign();
	buildToMontgomery();
	buildFromMontgomery();
	buildEq();
	buildInverse();
	buildTimesScalar$1();
	buildIsNegative();
	module.exportFunction(prefix + "_isZero");
	module.exportFunction(prefix + "_isOne");
	module.exportFunction(prefix + "_zero");
	module.exportFunction(prefix + "_one");
	module.exportFunction(prefix + "_copy");
	module.exportFunction(prefix + "_mul");
	module.exportFunction(prefix + "_square");
	module.exportFunction(prefix + "_add");
	module.exportFunction(prefix + "_sub");
	module.exportFunction(prefix + "_neg");
	module.exportFunction(prefix + "_sign");
	module.exportFunction(prefix + "_fromMontgomery");
	module.exportFunction(prefix + "_toMontgomery");
	module.exportFunction(prefix + "_eq");
	module.exportFunction(prefix + "_inverse");
	build_batchinverse_default(module, prefix);
	buildTimesScalar(module, prefix + "_exp", f1n8 * 3, prefix + "_mul", prefix + "_square", prefix + "_copy", prefix + "_one");
	module.exportFunction(prefix + "_exp");
	module.exportFunction(prefix + "_timesScalar");
	module.exportFunction(prefix + "_batchInverse");
	module.exportFunction(prefix + "_isNegative");
	return prefix;
}
//#endregion
//#region src/build_timesscalarnaf.js
function buildTimesScalarNAF(module, fnName, elementLen, opAB, opAA, opAmB, opCopy, opInit) {
	const f = module.addFunction(fnName);
	f.addParam("base", "i32");
	f.addParam("scalar", "i32");
	f.addParam("scalarLength", "i32");
	f.addParam("r", "i32");
	f.addLocal("old0", "i32");
	f.addLocal("nbits", "i32");
	f.addLocal("i", "i32");
	f.addLocal("last", "i32");
	f.addLocal("cur", "i32");
	f.addLocal("carry", "i32");
	f.addLocal("p", "i32");
	const c = f.getCodeBuilder();
	const aux = c.i32_const(module.alloc(elementLen));
	function getBit(IDX) {
		return c.i32_and(c.i32_shr_u(c.i32_load(c.i32_add(c.getLocal("scalar"), c.i32_and(c.i32_shr_u(IDX, c.i32_const(3)), c.i32_const(4294967292)))), c.i32_and(IDX, c.i32_const(31))), c.i32_const(1));
	}
	function pushBit(b) {
		return [...c.i32_store8(c.getLocal("p"), c.i32_const(b)), ...c.setLocal("p", c.i32_add(c.getLocal("p"), c.i32_const(1)))];
	}
	f.addCode(c.if(c.i32_eqz(c.getLocal("scalarLength")), [...c.call(opInit, c.getLocal("r")), ...c.ret([])]), c.setLocal("nbits", c.i32_shl(c.getLocal("scalarLength"), c.i32_const(3))), c.setLocal("old0", c.i32_load(c.i32_const(0))), c.setLocal("p", c.getLocal("old0")), c.i32_store(c.i32_const(0), c.i32_and(c.i32_add(c.i32_add(c.getLocal("old0"), c.i32_const(32)), c.getLocal("nbits")), c.i32_const(4294967288))), c.setLocal("i", c.i32_const(1)), c.setLocal("last", getBit(c.i32_const(0))), c.setLocal("carry", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("nbits"))), c.setLocal("cur", getBit(c.getLocal("i"))), c.if(c.getLocal("last"), c.if(c.getLocal("cur"), c.if(c.getLocal("carry"), [
		...c.setLocal("last", c.i32_const(0)),
		...c.setLocal("carry", c.i32_const(1)),
		...pushBit(1)
	], [
		...c.setLocal("last", c.i32_const(0)),
		...c.setLocal("carry", c.i32_const(1)),
		...pushBit(255)
	]), c.if(c.getLocal("carry"), [
		...c.setLocal("last", c.i32_const(0)),
		...c.setLocal("carry", c.i32_const(1)),
		...pushBit(255)
	], [
		...c.setLocal("last", c.i32_const(0)),
		...c.setLocal("carry", c.i32_const(0)),
		...pushBit(1)
	])), c.if(c.getLocal("cur"), c.if(c.getLocal("carry"), [
		...c.setLocal("last", c.i32_const(0)),
		...c.setLocal("carry", c.i32_const(1)),
		...pushBit(0)
	], [
		...c.setLocal("last", c.i32_const(1)),
		...c.setLocal("carry", c.i32_const(0)),
		...pushBit(0)
	]), c.if(c.getLocal("carry"), [
		...c.setLocal("last", c.i32_const(1)),
		...c.setLocal("carry", c.i32_const(0)),
		...pushBit(0)
	], [
		...c.setLocal("last", c.i32_const(0)),
		...c.setLocal("carry", c.i32_const(0)),
		...pushBit(0)
	]))), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))), c.if(c.getLocal("last"), c.if(c.getLocal("carry"), [
		...pushBit(255),
		...pushBit(0),
		...pushBit(1)
	], [...pushBit(1)]), c.if(c.getLocal("carry"), [...pushBit(0), ...pushBit(1)])), c.setLocal("p", c.i32_sub(c.getLocal("p"), c.i32_const(1))), c.call(opCopy, c.getLocal("base"), aux), c.call(opInit, c.getLocal("r")), c.block(c.loop(c.call(opAA, c.getLocal("r"), c.getLocal("r")), c.setLocal("cur", c.i32_load8_u(c.getLocal("p"))), c.if(c.getLocal("cur"), c.if(c.i32_eq(c.getLocal("cur"), c.i32_const(1)), c.call(opAB, c.getLocal("r"), aux, c.getLocal("r")), c.call(opAmB, c.getLocal("r"), aux, c.getLocal("r")))), c.br_if(1, c.i32_eq(c.getLocal("old0"), c.getLocal("p"))), c.setLocal("p", c.i32_sub(c.getLocal("p"), c.i32_const(1))), c.br(0))), c.i32_store(c.i32_const(0), c.getLocal("old0")));
}
//#endregion
//#region src/build_multiexp.js
function buildMultiexp(module, prefix, fnName, opAdd, n8b) {
	const n8g = module.modules[prefix].n64 * 8;
	function buildGetChunk() {
		const f = module.addFunction(fnName + "_getChunk");
		f.addParam("pScalar", "i32");
		f.addParam("scalarSize", "i32");
		f.addParam("startBit", "i32");
		f.addParam("chunkSize", "i32");
		f.addLocal("bitsToEnd", "i32");
		f.addLocal("mask", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		f.addCode(c.setLocal("bitsToEnd", c.i32_sub(c.i32_mul(c.getLocal("scalarSize"), c.i32_const(8)), c.getLocal("startBit"))), c.if(c.i32_gt_s(c.getLocal("chunkSize"), c.getLocal("bitsToEnd")), c.setLocal("mask", c.i32_sub(c.i32_shl(c.i32_const(1), c.getLocal("bitsToEnd")), c.i32_const(1))), c.setLocal("mask", c.i32_sub(c.i32_shl(c.i32_const(1), c.getLocal("chunkSize")), c.i32_const(1)))), c.i32_and(c.i32_shr_u(c.i32_load(c.i32_add(c.getLocal("pScalar"), c.i32_shr_u(c.getLocal("startBit"), c.i32_const(3))), 0, 0), c.i32_and(c.getLocal("startBit"), c.i32_const(7))), c.getLocal("mask")));
	}
	function buildMutiexpChunk() {
		const f = module.addFunction(fnName + "_chunk");
		f.addParam("pBases", "i32");
		f.addParam("pScalars", "i32");
		f.addParam("scalarSize", "i32");
		f.addParam("n", "i32");
		f.addParam("startBit", "i32");
		f.addParam("chunkSize", "i32");
		f.addParam("pr", "i32");
		f.addLocal("nChunks", "i32");
		f.addLocal("itScalar", "i32");
		f.addLocal("endScalar", "i32");
		f.addLocal("itBase", "i32");
		f.addLocal("i", "i32");
		f.addLocal("j", "i32");
		f.addLocal("nTable", "i32");
		f.addLocal("pTable", "i32");
		f.addLocal("idx", "i32");
		f.addLocal("pIdxTable", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.if(c.i32_eqz(c.getLocal("n")), [...c.call(prefix + "_zero", c.getLocal("pr")), ...c.ret([])]), c.setLocal("nTable", c.i32_shl(c.i32_const(1), c.getLocal("chunkSize"))), c.setLocal("pTable", c.i32_load(c.i32_const(0))), c.i32_store(c.i32_const(0), c.i32_add(c.getLocal("pTable"), c.i32_mul(c.getLocal("nTable"), c.i32_const(n8g)))), c.setLocal("j", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("j"), c.getLocal("nTable"))), c.call(prefix + "_zero", c.i32_add(c.getLocal("pTable"), c.i32_mul(c.getLocal("j"), c.i32_const(n8g)))), c.setLocal("j", c.i32_add(c.getLocal("j"), c.i32_const(1))), c.br(0))), c.setLocal("itBase", c.getLocal("pBases")), c.setLocal("itScalar", c.getLocal("pScalars")), c.setLocal("endScalar", c.i32_add(c.getLocal("pScalars"), c.i32_mul(c.getLocal("n"), c.getLocal("scalarSize")))), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("itScalar"), c.getLocal("endScalar"))), c.setLocal("idx", c.call(fnName + "_getChunk", c.getLocal("itScalar"), c.getLocal("scalarSize"), c.getLocal("startBit"), c.getLocal("chunkSize"))), c.if(c.getLocal("idx"), [...c.setLocal("pIdxTable", c.i32_add(c.getLocal("pTable"), c.i32_mul(c.i32_sub(c.getLocal("idx"), c.i32_const(1)), c.i32_const(n8g)))), ...c.call(opAdd, c.getLocal("pIdxTable"), c.getLocal("itBase"), c.getLocal("pIdxTable"))]), c.setLocal("itScalar", c.i32_add(c.getLocal("itScalar"), c.getLocal("scalarSize"))), c.setLocal("itBase", c.i32_add(c.getLocal("itBase"), c.i32_const(n8b))), c.br(0))), c.call(fnName + "_reduceTable", c.getLocal("pTable"), c.getLocal("chunkSize")), c.call(prefix + "_copy", c.getLocal("pTable"), c.getLocal("pr")), c.i32_store(c.i32_const(0), c.getLocal("pTable")));
	}
	function buildMultiexp() {
		const f = module.addFunction(fnName);
		f.addParam("pBases", "i32");
		f.addParam("pScalars", "i32");
		f.addParam("scalarSize", "i32");
		f.addParam("n", "i32");
		f.addParam("pr", "i32");
		f.addLocal("chunkSize", "i32");
		f.addLocal("nChunks", "i32");
		f.addLocal("itScalar", "i32");
		f.addLocal("endScalar", "i32");
		f.addLocal("itBase", "i32");
		f.addLocal("itBit", "i32");
		f.addLocal("i", "i32");
		f.addLocal("j", "i32");
		f.addLocal("nTable", "i32");
		f.addLocal("pTable", "i32");
		f.addLocal("idx", "i32");
		f.addLocal("pIdxTable", "i32");
		const c = f.getCodeBuilder();
		const aux = c.i32_const(module.alloc(n8g));
		const pTSizes = module.alloc([
			17,
			17,
			17,
			17,
			17,
			17,
			17,
			17,
			17,
			17,
			16,
			16,
			15,
			14,
			13,
			13,
			12,
			11,
			10,
			9,
			8,
			7,
			7,
			6,
			5,
			4,
			3,
			2,
			1,
			1,
			1,
			1
		]);
		f.addCode(c.call(prefix + "_zero", c.getLocal("pr")), c.if(c.i32_eqz(c.getLocal("n")), c.ret([])), c.setLocal("chunkSize", c.i32_load8_u(c.i32_clz(c.getLocal("n")), pTSizes)), c.setLocal("nChunks", c.i32_add(c.i32_div_u(c.i32_sub(c.i32_shl(c.getLocal("scalarSize"), c.i32_const(3)), c.i32_const(1)), c.getLocal("chunkSize")), c.i32_const(1))), c.setLocal("itBit", c.i32_mul(c.i32_sub(c.getLocal("nChunks"), c.i32_const(1)), c.getLocal("chunkSize"))), c.block(c.loop(c.br_if(1, c.i32_lt_s(c.getLocal("itBit"), c.i32_const(0))), c.if(c.i32_eqz(c.call(prefix + "_isZero", c.getLocal("pr"))), [...c.setLocal("j", c.i32_const(0)), ...c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("j"), c.getLocal("chunkSize"))), c.call(prefix + "_double", c.getLocal("pr"), c.getLocal("pr")), c.setLocal("j", c.i32_add(c.getLocal("j"), c.i32_const(1))), c.br(0)))]), c.call(fnName + "_chunk", c.getLocal("pBases"), c.getLocal("pScalars"), c.getLocal("scalarSize"), c.getLocal("n"), c.getLocal("itBit"), c.getLocal("chunkSize"), aux), c.call(prefix + "_add", c.getLocal("pr"), aux, c.getLocal("pr")), c.setLocal("itBit", c.i32_sub(c.getLocal("itBit"), c.getLocal("chunkSize"))), c.br(0))));
	}
	function buildReduceTable() {
		const f = module.addFunction(fnName + "_reduceTable");
		f.addParam("pTable", "i32");
		f.addParam("p", "i32");
		f.addLocal("half", "i32");
		f.addLocal("it1", "i32");
		f.addLocal("it2", "i32");
		f.addLocal("pAcc", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.if(c.i32_eq(c.getLocal("p"), c.i32_const(1)), c.ret([])), c.setLocal("half", c.i32_shl(c.i32_const(1), c.i32_sub(c.getLocal("p"), c.i32_const(1)))), c.setLocal("it1", c.getLocal("pTable")), c.setLocal("it2", c.i32_add(c.getLocal("pTable"), c.i32_mul(c.getLocal("half"), c.i32_const(n8g)))), c.setLocal("pAcc", c.i32_sub(c.getLocal("it2"), c.i32_const(n8g))), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("it1"), c.getLocal("pAcc"))), c.call(prefix + "_add", c.getLocal("it1"), c.getLocal("it2"), c.getLocal("it1")), c.call(prefix + "_add", c.getLocal("pAcc"), c.getLocal("it2"), c.getLocal("pAcc")), c.setLocal("it1", c.i32_add(c.getLocal("it1"), c.i32_const(n8g))), c.setLocal("it2", c.i32_add(c.getLocal("it2"), c.i32_const(n8g))), c.br(0))), c.call(fnName + "_reduceTable", c.getLocal("pTable"), c.i32_sub(c.getLocal("p"), c.i32_const(1))), c.setLocal("p", c.i32_sub(c.getLocal("p"), c.i32_const(1))), c.block(c.loop(c.br_if(1, c.i32_eqz(c.getLocal("p"))), c.call(prefix + "_double", c.getLocal("pAcc"), c.getLocal("pAcc")), c.setLocal("p", c.i32_sub(c.getLocal("p"), c.i32_const(1))), c.br(0))), c.call(prefix + "_add", c.getLocal("pTable"), c.getLocal("pAcc"), c.getLocal("pTable")));
	}
	buildGetChunk();
	buildReduceTable();
	buildMutiexpChunk();
	buildMultiexp();
	module.exportFunction(fnName);
	module.exportFunction(fnName + "_chunk");
}
//#endregion
//#region src/build_curve_jacobian_a0.js
function buildCurve(module, prefix, prefixField, pB) {
	const n64 = module.modules[prefixField].n64;
	const n8 = n64 * 8;
	if (module.modules[prefix]) return prefix;
	module.modules[prefix] = { n64: n64 * 3 };
	function buildIsZero() {
		const f = module.addFunction(prefix + "_isZero");
		f.addParam("p1", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		f.addCode(c.call(prefixField + "_isZero", c.i32_add(c.getLocal("p1"), c.i32_const(n8 * 2))));
	}
	function buildIsZeroAffine() {
		const f = module.addFunction(prefix + "_isZeroAffine");
		f.addParam("p1", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		f.addCode(c.i32_and(c.call(prefixField + "_isZero", c.getLocal("p1")), c.call(prefixField + "_isZero", c.i32_add(c.getLocal("p1"), c.i32_const(n8)))));
	}
	function buildCopy() {
		const f = module.addFunction(prefix + "_copy");
		f.addParam("ps", "i32");
		f.addParam("pd", "i32");
		const c = f.getCodeBuilder();
		for (let i = 0; i < n64 * 3; i++) f.addCode(c.i64_store(c.getLocal("pd"), i * 8, c.i64_load(c.getLocal("ps"), i * 8)));
	}
	function buildCopyAffine() {
		const f = module.addFunction(prefix + "_copyAffine");
		f.addParam("ps", "i32");
		f.addParam("pd", "i32");
		const c = f.getCodeBuilder();
		for (let i = 0; i < n64 * 2; i++) f.addCode(c.i64_store(c.getLocal("pd"), i * 8, c.i64_load(c.getLocal("ps"), i * 8)));
	}
	function buildZero() {
		const f = module.addFunction(prefix + "_zero");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.call(prefixField + "_zero", c.getLocal("pr")));
		f.addCode(c.call(prefixField + "_one", c.i32_add(c.getLocal("pr"), c.i32_const(n8))));
		f.addCode(c.call(prefixField + "_zero", c.i32_add(c.getLocal("pr"), c.i32_const(n8 * 2))));
	}
	function buildZeroAffine() {
		const f = module.addFunction(prefix + "_zeroAffine");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.call(prefixField + "_zero", c.getLocal("pr")));
		f.addCode(c.call(prefixField + "_zero", c.i32_add(c.getLocal("pr"), c.i32_const(n8))));
	}
	function buildEq() {
		const f = module.addFunction(prefix + "_eq");
		f.addParam("p1", "i32");
		f.addParam("p2", "i32");
		f.setReturnType("i32");
		f.addLocal("z1", "i32");
		f.addLocal("z2", "i32");
		const c = f.getCodeBuilder();
		const x1 = c.getLocal("p1");
		const y1 = c.i32_add(c.getLocal("p1"), c.i32_const(n8));
		f.addCode(c.setLocal("z1", c.i32_add(c.getLocal("p1"), c.i32_const(n8 * 2))));
		const z1 = c.getLocal("z1");
		const x2 = c.getLocal("p2");
		const y2 = c.i32_add(c.getLocal("p2"), c.i32_const(n8));
		f.addCode(c.setLocal("z2", c.i32_add(c.getLocal("p2"), c.i32_const(n8 * 2))));
		const z2 = c.getLocal("z2");
		const Z1Z1 = c.i32_const(module.alloc(n8));
		const Z2Z2 = c.i32_const(module.alloc(n8));
		const U1 = c.i32_const(module.alloc(n8));
		const U2 = c.i32_const(module.alloc(n8));
		const Z1_cubed = c.i32_const(module.alloc(n8));
		const Z2_cubed = c.i32_const(module.alloc(n8));
		const S1 = c.i32_const(module.alloc(n8));
		const S2 = c.i32_const(module.alloc(n8));
		f.addCode(c.if(c.call(prefix + "_isZero", c.getLocal("p1")), c.ret(c.call(prefix + "_isZero", c.getLocal("p2")))), c.if(c.call(prefix + "_isZero", c.getLocal("p2")), c.ret(c.i32_const(0))), c.if(c.call(prefixField + "_isOne", z1), c.ret(c.call(prefix + "_eqMixed", c.getLocal("p2"), c.getLocal("p1")))), c.if(c.call(prefixField + "_isOne", z2), c.ret(c.call(prefix + "_eqMixed", c.getLocal("p1"), c.getLocal("p2")))), c.call(prefixField + "_square", z1, Z1Z1), c.call(prefixField + "_square", z2, Z2Z2), c.call(prefixField + "_mul", x1, Z2Z2, U1), c.call(prefixField + "_mul", x2, Z1Z1, U2), c.call(prefixField + "_mul", z1, Z1Z1, Z1_cubed), c.call(prefixField + "_mul", z2, Z2Z2, Z2_cubed), c.call(prefixField + "_mul", y1, Z2_cubed, S1), c.call(prefixField + "_mul", y2, Z1_cubed, S2), c.if(c.call(prefixField + "_eq", U1, U2), c.if(c.call(prefixField + "_eq", S1, S2), c.ret(c.i32_const(1)))), c.ret(c.i32_const(0)));
	}
	function buildEqMixed() {
		const f = module.addFunction(prefix + "_eqMixed");
		f.addParam("p1", "i32");
		f.addParam("p2", "i32");
		f.setReturnType("i32");
		f.addLocal("z1", "i32");
		const c = f.getCodeBuilder();
		const x1 = c.getLocal("p1");
		const y1 = c.i32_add(c.getLocal("p1"), c.i32_const(n8));
		f.addCode(c.setLocal("z1", c.i32_add(c.getLocal("p1"), c.i32_const(n8 * 2))));
		const z1 = c.getLocal("z1");
		const x2 = c.getLocal("p2");
		const y2 = c.i32_add(c.getLocal("p2"), c.i32_const(n8));
		const Z1Z1 = c.i32_const(module.alloc(n8));
		const U2 = c.i32_const(module.alloc(n8));
		const Z1_cubed = c.i32_const(module.alloc(n8));
		const S2 = c.i32_const(module.alloc(n8));
		f.addCode(c.if(c.call(prefix + "_isZero", c.getLocal("p1")), c.ret(c.call(prefix + "_isZeroAffine", c.getLocal("p2")))), c.if(c.call(prefix + "_isZeroAffine", c.getLocal("p2")), c.ret(c.i32_const(0))), c.if(c.call(prefixField + "_isOne", z1), c.ret(c.call(prefix + "_eqAffine", c.getLocal("p1"), c.getLocal("p2")))), c.call(prefixField + "_square", z1, Z1Z1), c.call(prefixField + "_mul", x2, Z1Z1, U2), c.call(prefixField + "_mul", z1, Z1Z1, Z1_cubed), c.call(prefixField + "_mul", y2, Z1_cubed, S2), c.if(c.call(prefixField + "_eq", x1, U2), c.if(c.call(prefixField + "_eq", y1, S2), c.ret(c.i32_const(1)))), c.ret(c.i32_const(0)));
	}
	function buildDouble() {
		const f = module.addFunction(prefix + "_double");
		f.addParam("p1", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		const x = c.getLocal("p1");
		const y = c.i32_add(c.getLocal("p1"), c.i32_const(n8));
		const z = c.i32_add(c.getLocal("p1"), c.i32_const(n8 * 2));
		const x3 = c.getLocal("pr");
		const y3 = c.i32_add(c.getLocal("pr"), c.i32_const(n8));
		const z3 = c.i32_add(c.getLocal("pr"), c.i32_const(n8 * 2));
		const A = c.i32_const(module.alloc(n8));
		const B = c.i32_const(module.alloc(n8));
		const C = c.i32_const(module.alloc(n8));
		const D = c.i32_const(module.alloc(n8));
		const E = c.i32_const(module.alloc(n8));
		const F = c.i32_const(module.alloc(n8));
		const G = c.i32_const(module.alloc(n8));
		const eightC = c.i32_const(module.alloc(n8));
		f.addCode(c.if(c.call(prefix + "_isZero", c.getLocal("p1")), [...c.call(prefix + "_copy", c.getLocal("p1"), c.getLocal("pr")), ...c.ret([])]), c.if(c.call(prefixField + "_isOne", z), [...c.ret(c.call(prefix + "_doubleAffine", c.getLocal("p1"), c.getLocal("pr"))), ...c.ret([])]), c.call(prefixField + "_square", x, A), c.call(prefixField + "_square", y, B), c.call(prefixField + "_square", B, C), c.call(prefixField + "_add", x, B, D), c.call(prefixField + "_square", D, D), c.call(prefixField + "_sub", D, A, D), c.call(prefixField + "_sub", D, C, D), c.call(prefixField + "_add", D, D, D), c.call(prefixField + "_add", A, A, E), c.call(prefixField + "_add", E, A, E), c.call(prefixField + "_square", E, F), c.call(prefixField + "_mul", y, z, G), c.call(prefixField + "_add", D, D, x3), c.call(prefixField + "_sub", F, x3, x3), c.call(prefixField + "_add", C, C, eightC), c.call(prefixField + "_add", eightC, eightC, eightC), c.call(prefixField + "_add", eightC, eightC, eightC), c.call(prefixField + "_sub", D, x3, y3), c.call(prefixField + "_mul", y3, E, y3), c.call(prefixField + "_sub", y3, eightC, y3), c.call(prefixField + "_add", G, G, z3));
	}
	function buildDoubleAffine() {
		const f = module.addFunction(prefix + "_doubleAffine");
		f.addParam("p1", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		const x = c.getLocal("p1");
		const y = c.i32_add(c.getLocal("p1"), c.i32_const(n8));
		const x3 = c.getLocal("pr");
		const y3 = c.i32_add(c.getLocal("pr"), c.i32_const(n8));
		const z3 = c.i32_add(c.getLocal("pr"), c.i32_const(n8 * 2));
		const XX = c.i32_const(module.alloc(n8));
		const YY = c.i32_const(module.alloc(n8));
		const YYYY = c.i32_const(module.alloc(n8));
		const S = c.i32_const(module.alloc(n8));
		const M = c.i32_const(module.alloc(n8));
		const eightYYYY = c.i32_const(module.alloc(n8));
		f.addCode(c.if(c.call(prefix + "_isZeroAffine", c.getLocal("p1")), [...c.call(prefix + "_toJacobian", c.getLocal("p1"), c.getLocal("pr")), ...c.ret([])]), c.call(prefixField + "_square", x, XX), c.call(prefixField + "_square", y, YY), c.call(prefixField + "_square", YY, YYYY), c.call(prefixField + "_add", x, YY, S), c.call(prefixField + "_square", S, S), c.call(prefixField + "_sub", S, XX, S), c.call(prefixField + "_sub", S, YYYY, S), c.call(prefixField + "_add", S, S, S), c.call(prefixField + "_add", XX, XX, M), c.call(prefixField + "_add", M, XX, M), c.call(prefixField + "_add", y, y, z3), c.call(prefixField + "_square", M, x3), c.call(prefixField + "_sub", x3, S, x3), c.call(prefixField + "_sub", x3, S, x3), c.call(prefixField + "_add", YYYY, YYYY, eightYYYY), c.call(prefixField + "_add", eightYYYY, eightYYYY, eightYYYY), c.call(prefixField + "_add", eightYYYY, eightYYYY, eightYYYY), c.call(prefixField + "_sub", S, x3, y3), c.call(prefixField + "_mul", y3, M, y3), c.call(prefixField + "_sub", y3, eightYYYY, y3));
	}
	function buildEqAffine() {
		const f = module.addFunction(prefix + "_eqAffine");
		f.addParam("p1", "i32");
		f.addParam("p2", "i32");
		f.setReturnType("i32");
		f.addLocal("z1", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.ret(c.i32_and(c.call(prefixField + "_eq", c.getLocal("p1"), c.getLocal("p2")), c.call(prefixField + "_eq", c.i32_add(c.getLocal("p1"), c.i32_const(n8)), c.i32_add(c.getLocal("p2"), c.i32_const(n8))))));
	}
	function buildToMontgomery() {
		const f = module.addFunction(prefix + "_toMontgomery");
		f.addParam("p1", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.call(prefixField + "_toMontgomery", c.getLocal("p1"), c.getLocal("pr")));
		for (let i = 1; i < 3; i++) f.addCode(c.call(prefixField + "_toMontgomery", c.i32_add(c.getLocal("p1"), c.i32_const(i * n8)), c.i32_add(c.getLocal("pr"), c.i32_const(i * n8))));
	}
	function buildToMontgomeryAffine() {
		const f = module.addFunction(prefix + "_toMontgomeryAffine");
		f.addParam("p1", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.call(prefixField + "_toMontgomery", c.getLocal("p1"), c.getLocal("pr")));
		for (let i = 1; i < 2; i++) f.addCode(c.call(prefixField + "_toMontgomery", c.i32_add(c.getLocal("p1"), c.i32_const(i * n8)), c.i32_add(c.getLocal("pr"), c.i32_const(i * n8))));
	}
	function buildFromMontgomery() {
		const f = module.addFunction(prefix + "_fromMontgomery");
		f.addParam("p1", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.call(prefixField + "_fromMontgomery", c.getLocal("p1"), c.getLocal("pr")));
		for (let i = 1; i < 3; i++) f.addCode(c.call(prefixField + "_fromMontgomery", c.i32_add(c.getLocal("p1"), c.i32_const(i * n8)), c.i32_add(c.getLocal("pr"), c.i32_const(i * n8))));
	}
	function buildFromMontgomeryAffine() {
		const f = module.addFunction(prefix + "_fromMontgomeryAffine");
		f.addParam("p1", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.call(prefixField + "_fromMontgomery", c.getLocal("p1"), c.getLocal("pr")));
		for (let i = 1; i < 2; i++) f.addCode(c.call(prefixField + "_fromMontgomery", c.i32_add(c.getLocal("p1"), c.i32_const(i * n8)), c.i32_add(c.getLocal("pr"), c.i32_const(i * n8))));
	}
	function buildAdd() {
		const f = module.addFunction(prefix + "_add");
		f.addParam("p1", "i32");
		f.addParam("p2", "i32");
		f.addParam("pr", "i32");
		f.addLocal("z1", "i32");
		f.addLocal("z2", "i32");
		const c = f.getCodeBuilder();
		const x1 = c.getLocal("p1");
		const y1 = c.i32_add(c.getLocal("p1"), c.i32_const(n8));
		f.addCode(c.setLocal("z1", c.i32_add(c.getLocal("p1"), c.i32_const(n8 * 2))));
		const z1 = c.getLocal("z1");
		const x2 = c.getLocal("p2");
		const y2 = c.i32_add(c.getLocal("p2"), c.i32_const(n8));
		f.addCode(c.setLocal("z2", c.i32_add(c.getLocal("p2"), c.i32_const(n8 * 2))));
		const z2 = c.getLocal("z2");
		const x3 = c.getLocal("pr");
		const y3 = c.i32_add(c.getLocal("pr"), c.i32_const(n8));
		const z3 = c.i32_add(c.getLocal("pr"), c.i32_const(n8 * 2));
		const Z1Z1 = c.i32_const(module.alloc(n8));
		const Z2Z2 = c.i32_const(module.alloc(n8));
		const U1 = c.i32_const(module.alloc(n8));
		const U2 = c.i32_const(module.alloc(n8));
		const Z1_cubed = c.i32_const(module.alloc(n8));
		const Z2_cubed = c.i32_const(module.alloc(n8));
		const S1 = c.i32_const(module.alloc(n8));
		const S2 = c.i32_const(module.alloc(n8));
		const H = c.i32_const(module.alloc(n8));
		const S2_minus_S1 = c.i32_const(module.alloc(n8));
		const I = c.i32_const(module.alloc(n8));
		const J = c.i32_const(module.alloc(n8));
		const r = c.i32_const(module.alloc(n8));
		const r2 = c.i32_const(module.alloc(n8));
		const V = c.i32_const(module.alloc(n8));
		const V2 = c.i32_const(module.alloc(n8));
		const S1_J2 = c.i32_const(module.alloc(n8));
		f.addCode(c.if(c.call(prefix + "_isZero", c.getLocal("p1")), [...c.call(prefix + "_copy", c.getLocal("p2"), c.getLocal("pr")), ...c.ret([])]), c.if(c.call(prefix + "_isZero", c.getLocal("p2")), [...c.call(prefix + "_copy", c.getLocal("p1"), c.getLocal("pr")), ...c.ret([])]), c.if(c.call(prefixField + "_isOne", z1), [...c.call(prefix + "_addMixed", x2, x1, x3), ...c.ret([])]), c.if(c.call(prefixField + "_isOne", z2), [...c.call(prefix + "_addMixed", x1, x2, x3), ...c.ret([])]), c.call(prefixField + "_square", z1, Z1Z1), c.call(prefixField + "_square", z2, Z2Z2), c.call(prefixField + "_mul", x1, Z2Z2, U1), c.call(prefixField + "_mul", x2, Z1Z1, U2), c.call(prefixField + "_mul", z1, Z1Z1, Z1_cubed), c.call(prefixField + "_mul", z2, Z2Z2, Z2_cubed), c.call(prefixField + "_mul", y1, Z2_cubed, S1), c.call(prefixField + "_mul", y2, Z1_cubed, S2), c.if(c.call(prefixField + "_eq", U1, U2), c.if(c.call(prefixField + "_eq", S1, S2), [...c.call(prefix + "_double", c.getLocal("p1"), c.getLocal("pr")), ...c.ret([])])), c.call(prefixField + "_sub", U2, U1, H), c.call(prefixField + "_sub", S2, S1, S2_minus_S1), c.call(prefixField + "_add", H, H, I), c.call(prefixField + "_square", I, I), c.call(prefixField + "_mul", H, I, J), c.call(prefixField + "_add", S2_minus_S1, S2_minus_S1, r), c.call(prefixField + "_mul", U1, I, V), c.call(prefixField + "_square", r, r2), c.call(prefixField + "_add", V, V, V2), c.call(prefixField + "_sub", r2, J, x3), c.call(prefixField + "_sub", x3, V2, x3), c.call(prefixField + "_mul", S1, J, S1_J2), c.call(prefixField + "_add", S1_J2, S1_J2, S1_J2), c.call(prefixField + "_sub", V, x3, y3), c.call(prefixField + "_mul", y3, r, y3), c.call(prefixField + "_sub", y3, S1_J2, y3), c.call(prefixField + "_add", z1, z2, z3), c.call(prefixField + "_square", z3, z3), c.call(prefixField + "_sub", z3, Z1Z1, z3), c.call(prefixField + "_sub", z3, Z2Z2, z3), c.call(prefixField + "_mul", z3, H, z3));
	}
	function buildAddMixed() {
		const f = module.addFunction(prefix + "_addMixed");
		f.addParam("p1", "i32");
		f.addParam("p2", "i32");
		f.addParam("pr", "i32");
		f.addLocal("z1", "i32");
		const c = f.getCodeBuilder();
		const x1 = c.getLocal("p1");
		const y1 = c.i32_add(c.getLocal("p1"), c.i32_const(n8));
		f.addCode(c.setLocal("z1", c.i32_add(c.getLocal("p1"), c.i32_const(n8 * 2))));
		const z1 = c.getLocal("z1");
		const x2 = c.getLocal("p2");
		const y2 = c.i32_add(c.getLocal("p2"), c.i32_const(n8));
		const x3 = c.getLocal("pr");
		const y3 = c.i32_add(c.getLocal("pr"), c.i32_const(n8));
		const z3 = c.i32_add(c.getLocal("pr"), c.i32_const(n8 * 2));
		const Z1Z1 = c.i32_const(module.alloc(n8));
		const U2 = c.i32_const(module.alloc(n8));
		const Z1_cubed = c.i32_const(module.alloc(n8));
		const S2 = c.i32_const(module.alloc(n8));
		const H = c.i32_const(module.alloc(n8));
		const HH = c.i32_const(module.alloc(n8));
		const S2_minus_y1 = c.i32_const(module.alloc(n8));
		const I = c.i32_const(module.alloc(n8));
		const J = c.i32_const(module.alloc(n8));
		const r = c.i32_const(module.alloc(n8));
		const r2 = c.i32_const(module.alloc(n8));
		const V = c.i32_const(module.alloc(n8));
		const V2 = c.i32_const(module.alloc(n8));
		const y1_J2 = c.i32_const(module.alloc(n8));
		f.addCode(c.if(c.call(prefix + "_isZero", c.getLocal("p1")), [
			...c.call(prefix + "_copyAffine", c.getLocal("p2"), c.getLocal("pr")),
			...c.call(prefixField + "_one", c.i32_add(c.getLocal("pr"), c.i32_const(n8 * 2))),
			...c.ret([])
		]), c.if(c.call(prefix + "_isZeroAffine", c.getLocal("p2")), [...c.call(prefix + "_copy", c.getLocal("p1"), c.getLocal("pr")), ...c.ret([])]), c.if(c.call(prefixField + "_isOne", z1), [...c.call(prefix + "_addAffine", x1, x2, x3), ...c.ret([])]), c.call(prefixField + "_square", z1, Z1Z1), c.call(prefixField + "_mul", x2, Z1Z1, U2), c.call(prefixField + "_mul", z1, Z1Z1, Z1_cubed), c.call(prefixField + "_mul", y2, Z1_cubed, S2), c.if(c.call(prefixField + "_eq", x1, U2), c.if(c.call(prefixField + "_eq", y1, S2), [...c.call(prefix + "_doubleAffine", c.getLocal("p2"), c.getLocal("pr")), ...c.ret([])])), c.call(prefixField + "_sub", U2, x1, H), c.call(prefixField + "_sub", S2, y1, S2_minus_y1), c.call(prefixField + "_square", H, HH), c.call(prefixField + "_add", HH, HH, I), c.call(prefixField + "_add", I, I, I), c.call(prefixField + "_mul", H, I, J), c.call(prefixField + "_add", S2_minus_y1, S2_minus_y1, r), c.call(prefixField + "_mul", x1, I, V), c.call(prefixField + "_square", r, r2), c.call(prefixField + "_add", V, V, V2), c.call(prefixField + "_sub", r2, J, x3), c.call(prefixField + "_sub", x3, V2, x3), c.call(prefixField + "_mul", y1, J, y1_J2), c.call(prefixField + "_add", y1_J2, y1_J2, y1_J2), c.call(prefixField + "_sub", V, x3, y3), c.call(prefixField + "_mul", y3, r, y3), c.call(prefixField + "_sub", y3, y1_J2, y3), c.call(prefixField + "_add", z1, H, z3), c.call(prefixField + "_square", z3, z3), c.call(prefixField + "_sub", z3, Z1Z1, z3), c.call(prefixField + "_sub", z3, HH, z3));
	}
	function buildAddAffine() {
		const f = module.addFunction(prefix + "_addAffine");
		f.addParam("p1", "i32");
		f.addParam("p2", "i32");
		f.addParam("pr", "i32");
		f.addLocal("z1", "i32");
		const c = f.getCodeBuilder();
		const x1 = c.getLocal("p1");
		const y1 = c.i32_add(c.getLocal("p1"), c.i32_const(n8));
		f.addCode(c.setLocal("z1", c.i32_add(c.getLocal("p1"), c.i32_const(n8 * 2))));
		const x2 = c.getLocal("p2");
		const y2 = c.i32_add(c.getLocal("p2"), c.i32_const(n8));
		const x3 = c.getLocal("pr");
		const y3 = c.i32_add(c.getLocal("pr"), c.i32_const(n8));
		const z3 = c.i32_add(c.getLocal("pr"), c.i32_const(n8 * 2));
		const H = c.i32_const(module.alloc(n8));
		const HH = c.i32_const(module.alloc(n8));
		const y2_minus_y1 = c.i32_const(module.alloc(n8));
		const I = c.i32_const(module.alloc(n8));
		const J = c.i32_const(module.alloc(n8));
		const r = c.i32_const(module.alloc(n8));
		const r2 = c.i32_const(module.alloc(n8));
		const V = c.i32_const(module.alloc(n8));
		const V2 = c.i32_const(module.alloc(n8));
		const y1_J2 = c.i32_const(module.alloc(n8));
		f.addCode(c.if(c.call(prefix + "_isZeroAffine", c.getLocal("p1")), [
			...c.call(prefix + "_copyAffine", c.getLocal("p2"), c.getLocal("pr")),
			...c.call(prefixField + "_one", c.i32_add(c.getLocal("pr"), c.i32_const(n8 * 2))),
			...c.ret([])
		]), c.if(c.call(prefix + "_isZeroAffine", c.getLocal("p2")), [
			...c.call(prefix + "_copyAffine", c.getLocal("p1"), c.getLocal("pr")),
			...c.call(prefixField + "_one", c.i32_add(c.getLocal("pr"), c.i32_const(n8 * 2))),
			...c.ret([])
		]), c.if(c.call(prefixField + "_eq", x1, x2), c.if(c.call(prefixField + "_eq", y1, y2), [...c.call(prefix + "_doubleAffine", c.getLocal("p2"), c.getLocal("pr")), ...c.ret([])])), c.call(prefixField + "_sub", x2, x1, H), c.call(prefixField + "_sub", y2, y1, y2_minus_y1), c.call(prefixField + "_square", H, HH), c.call(prefixField + "_add", HH, HH, I), c.call(prefixField + "_add", I, I, I), c.call(prefixField + "_mul", H, I, J), c.call(prefixField + "_add", y2_minus_y1, y2_minus_y1, r), c.call(prefixField + "_mul", x1, I, V), c.call(prefixField + "_square", r, r2), c.call(prefixField + "_add", V, V, V2), c.call(prefixField + "_sub", r2, J, x3), c.call(prefixField + "_sub", x3, V2, x3), c.call(prefixField + "_mul", y1, J, y1_J2), c.call(prefixField + "_add", y1_J2, y1_J2, y1_J2), c.call(prefixField + "_sub", V, x3, y3), c.call(prefixField + "_mul", y3, r, y3), c.call(prefixField + "_sub", y3, y1_J2, y3), c.call(prefixField + "_add", H, H, z3));
	}
	function buildNeg() {
		const f = module.addFunction(prefix + "_neg");
		f.addParam("p1", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		const x = c.getLocal("p1");
		const y = c.i32_add(c.getLocal("p1"), c.i32_const(n8));
		const z = c.i32_add(c.getLocal("p1"), c.i32_const(n8 * 2));
		const x3 = c.getLocal("pr");
		const y3 = c.i32_add(c.getLocal("pr"), c.i32_const(n8));
		const z3 = c.i32_add(c.getLocal("pr"), c.i32_const(n8 * 2));
		f.addCode(c.call(prefixField + "_copy", x, x3), c.call(prefixField + "_neg", y, y3), c.call(prefixField + "_copy", z, z3));
	}
	function buildNegAffine() {
		const f = module.addFunction(prefix + "_negAffine");
		f.addParam("p1", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		const x = c.getLocal("p1");
		const y = c.i32_add(c.getLocal("p1"), c.i32_const(n8));
		const x3 = c.getLocal("pr");
		const y3 = c.i32_add(c.getLocal("pr"), c.i32_const(n8));
		f.addCode(c.call(prefixField + "_copy", x, x3), c.call(prefixField + "_neg", y, y3));
	}
	function buildSub() {
		const f = module.addFunction(prefix + "_sub");
		f.addParam("p1", "i32");
		f.addParam("p2", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		const AUX = c.i32_const(module.alloc(n8 * 3));
		f.addCode(c.call(prefix + "_neg", c.getLocal("p2"), AUX), c.call(prefix + "_add", c.getLocal("p1"), AUX, c.getLocal("pr")));
	}
	function buildSubMixed() {
		const f = module.addFunction(prefix + "_subMixed");
		f.addParam("p1", "i32");
		f.addParam("p2", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		const AUX = c.i32_const(module.alloc(n8 * 3));
		f.addCode(c.call(prefix + "_negAffine", c.getLocal("p2"), AUX), c.call(prefix + "_addMixed", c.getLocal("p1"), AUX, c.getLocal("pr")));
	}
	function buildSubAffine() {
		const f = module.addFunction(prefix + "_subAffine");
		f.addParam("p1", "i32");
		f.addParam("p2", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		const AUX = c.i32_const(module.alloc(n8 * 3));
		f.addCode(c.call(prefix + "_negAffine", c.getLocal("p2"), AUX), c.call(prefix + "_addAffine", c.getLocal("p1"), AUX, c.getLocal("pr")));
	}
	function buildNormalize() {
		const f = module.addFunction(prefix + "_normalize");
		f.addParam("p1", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		const x = c.getLocal("p1");
		const y = c.i32_add(c.getLocal("p1"), c.i32_const(n8));
		const z = c.i32_add(c.getLocal("p1"), c.i32_const(n8 * 2));
		const x3 = c.getLocal("pr");
		const y3 = c.i32_add(c.getLocal("pr"), c.i32_const(n8));
		const z3 = c.i32_add(c.getLocal("pr"), c.i32_const(n8 * 2));
		const Z_inv = c.i32_const(module.alloc(n8));
		const Z2_inv = c.i32_const(module.alloc(n8));
		const Z3_inv = c.i32_const(module.alloc(n8));
		f.addCode(c.if(c.call(prefix + "_isZero", c.getLocal("p1")), c.call(prefix + "_zero", c.getLocal("pr")), [
			...c.call(prefixField + "_inverse", z, Z_inv),
			...c.call(prefixField + "_square", Z_inv, Z2_inv),
			...c.call(prefixField + "_mul", Z_inv, Z2_inv, Z3_inv),
			...c.call(prefixField + "_mul", x, Z2_inv, x3),
			...c.call(prefixField + "_mul", y, Z3_inv, y3),
			...c.call(prefixField + "_one", z3)
		]));
	}
	function buildToAffine() {
		const f = module.addFunction(prefix + "_toAffine");
		f.addParam("p1", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		const x = c.getLocal("p1");
		const y = c.i32_add(c.getLocal("p1"), c.i32_const(n8));
		const z = c.i32_add(c.getLocal("p1"), c.i32_const(n8 * 2));
		const x3 = c.getLocal("pr");
		const y3 = c.i32_add(c.getLocal("pr"), c.i32_const(n8));
		const Z_inv = c.i32_const(module.alloc(n8));
		const Z2_inv = c.i32_const(module.alloc(n8));
		const Z3_inv = c.i32_const(module.alloc(n8));
		f.addCode(c.if(c.call(prefix + "_isZero", c.getLocal("p1")), [...c.call(prefixField + "_zero", x3), ...c.call(prefixField + "_zero", y3)], [
			...c.call(prefixField + "_inverse", z, Z_inv),
			...c.call(prefixField + "_square", Z_inv, Z2_inv),
			...c.call(prefixField + "_mul", Z_inv, Z2_inv, Z3_inv),
			...c.call(prefixField + "_mul", x, Z2_inv, x3),
			...c.call(prefixField + "_mul", y, Z3_inv, y3)
		]));
	}
	function buildToJacobian() {
		const f = module.addFunction(prefix + "_toJacobian");
		f.addParam("p1", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		const x = c.getLocal("p1");
		const y = c.i32_add(c.getLocal("p1"), c.i32_const(n8));
		const x3 = c.getLocal("pr");
		const y3 = c.i32_add(c.getLocal("pr"), c.i32_const(n8));
		const z3 = c.i32_add(c.getLocal("pr"), c.i32_const(n8 * 2));
		f.addCode(c.if(c.call(prefix + "_isZeroAffine", c.getLocal("p1")), c.call(prefix + "_zero", c.getLocal("pr")), [
			...c.call(prefixField + "_one", z3),
			...c.call(prefixField + "_copy", y, y3),
			...c.call(prefixField + "_copy", x, x3)
		]));
	}
	function buildBatchToAffine() {
		const f = module.addFunction(prefix + "_batchToAffine");
		f.addParam("pIn", "i32");
		f.addParam("n", "i32");
		f.addParam("pOut", "i32");
		f.addLocal("pAux", "i32");
		f.addLocal("itIn", "i32");
		f.addLocal("itAux", "i32");
		f.addLocal("itOut", "i32");
		f.addLocal("i", "i32");
		const c = f.getCodeBuilder();
		const tmp = c.i32_const(module.alloc(n8));
		f.addCode(c.setLocal("pAux", c.i32_load(c.i32_const(0))), c.i32_store(c.i32_const(0), c.i32_add(c.getLocal("pAux"), c.i32_mul(c.getLocal("n"), c.i32_const(n8)))), c.call(prefixField + "_batchInverse", c.i32_add(c.getLocal("pIn"), c.i32_const(n8 * 2)), c.i32_const(n8 * 3), c.getLocal("n"), c.getLocal("pAux"), c.i32_const(n8)), c.setLocal("itIn", c.getLocal("pIn")), c.setLocal("itAux", c.getLocal("pAux")), c.setLocal("itOut", c.getLocal("pOut")), c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("n"))), c.if(c.call(prefixField + "_isZero", c.getLocal("itAux")), [...c.call(prefixField + "_zero", c.getLocal("itOut")), ...c.call(prefixField + "_zero", c.i32_add(c.getLocal("itOut"), c.i32_const(n8)))], [
			...c.call(prefixField + "_mul", c.getLocal("itAux"), c.i32_add(c.getLocal("itIn"), c.i32_const(n8)), tmp),
			...c.call(prefixField + "_square", c.getLocal("itAux"), c.getLocal("itAux")),
			...c.call(prefixField + "_mul", c.getLocal("itAux"), c.getLocal("itIn"), c.getLocal("itOut")),
			...c.call(prefixField + "_mul", c.getLocal("itAux"), tmp, c.i32_add(c.getLocal("itOut"), c.i32_const(n8)))
		]), c.setLocal("itIn", c.i32_add(c.getLocal("itIn"), c.i32_const(n8 * 3))), c.setLocal("itOut", c.i32_add(c.getLocal("itOut"), c.i32_const(n8 * 2))), c.setLocal("itAux", c.i32_add(c.getLocal("itAux"), c.i32_const(n8))), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))), c.i32_store(c.i32_const(0), c.getLocal("pAux")));
	}
	function buildReverseBytes() {
		const f = module.addFunction(prefix + "__reverseBytes");
		f.addParam("pIn", "i32");
		f.addParam("n", "i32");
		f.addParam("pOut", "i32");
		f.addLocal("itOut", "i32");
		f.addLocal("itIn", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.setLocal("itOut", c.i32_sub(c.i32_add(c.getLocal("pOut"), c.getLocal("n")), c.i32_const(1))), c.setLocal("itIn", c.getLocal("pIn")), c.block(c.loop(c.br_if(1, c.i32_lt_s(c.getLocal("itOut"), c.getLocal("pOut"))), c.i32_store8(c.getLocal("itOut"), c.i32_load8_u(c.getLocal("itIn"))), c.setLocal("itOut", c.i32_sub(c.getLocal("itOut"), c.i32_const(1))), c.setLocal("itIn", c.i32_add(c.getLocal("itIn"), c.i32_const(1))), c.br(0))));
	}
	function buildLEMtoC() {
		const f = module.addFunction(prefix + "_LEMtoC");
		f.addParam("pIn", "i32");
		f.addParam("pOut", "i32");
		const c = f.getCodeBuilder();
		const tmp = c.i32_const(module.alloc(n8));
		f.addCode(c.if(c.call(prefix + "_isZeroAffine", c.getLocal("pIn")), [
			...c.call(prefixField + "_zero", c.getLocal("pOut")),
			...c.i32_store8(c.getLocal("pOut"), c.i32_const(64)),
			...c.ret([])
		]), c.call(prefixField + "_fromMontgomery", c.getLocal("pIn"), tmp), c.call(prefix + "__reverseBytes", tmp, c.i32_const(n8), c.getLocal("pOut")), c.if(c.i32_eq(c.call(prefixField + "_sign", c.i32_add(c.getLocal("pIn"), c.i32_const(n8))), c.i32_const(-1)), c.i32_store8(c.getLocal("pOut"), c.i32_or(c.i32_load8_u(c.getLocal("pOut")), c.i32_const(128)))));
	}
	function buildLEMtoU() {
		const f = module.addFunction(prefix + "_LEMtoU");
		f.addParam("pIn", "i32");
		f.addParam("pOut", "i32");
		const c = f.getCodeBuilder();
		const pTmp = module.alloc(n8 * 2);
		const tmp = c.i32_const(pTmp);
		const tmpX = c.i32_const(pTmp);
		const tmpY = c.i32_const(pTmp + n8);
		f.addCode(c.if(c.call(prefix + "_isZeroAffine", c.getLocal("pIn")), [...c.call(prefix + "_zeroAffine", c.getLocal("pOut")), ...c.ret([])]), c.call(prefix + "_fromMontgomeryAffine", c.getLocal("pIn"), tmp), c.call(prefix + "__reverseBytes", tmpX, c.i32_const(n8), c.getLocal("pOut")), c.call(prefix + "__reverseBytes", tmpY, c.i32_const(n8), c.i32_add(c.getLocal("pOut"), c.i32_const(n8))));
	}
	function buildUtoLEM() {
		const f = module.addFunction(prefix + "_UtoLEM");
		f.addParam("pIn", "i32");
		f.addParam("pOut", "i32");
		const c = f.getCodeBuilder();
		const pTmp = module.alloc(n8 * 2);
		const tmp = c.i32_const(pTmp);
		const tmpX = c.i32_const(pTmp);
		const tmpY = c.i32_const(pTmp + n8);
		f.addCode(c.if(c.i32_and(c.i32_load8_u(c.getLocal("pIn")), c.i32_const(64)), [...c.call(prefix + "_zeroAffine", c.getLocal("pOut")), ...c.ret([])]), c.call(prefix + "__reverseBytes", c.getLocal("pIn"), c.i32_const(n8), tmpX), c.call(prefix + "__reverseBytes", c.i32_add(c.getLocal("pIn"), c.i32_const(n8)), c.i32_const(n8), tmpY), c.call(prefix + "_toMontgomeryAffine", tmp, c.getLocal("pOut")));
	}
	function buildCtoLEM() {
		const f = module.addFunction(prefix + "_CtoLEM");
		f.addParam("pIn", "i32");
		f.addParam("pOut", "i32");
		f.addLocal("firstByte", "i32");
		f.addLocal("greatest", "i32");
		const c = f.getCodeBuilder();
		const pTmp = module.alloc(n8 * 2);
		const tmpX = c.i32_const(pTmp);
		const tmpY = c.i32_const(pTmp + n8);
		f.addCode(c.setLocal("firstByte", c.i32_load8_u(c.getLocal("pIn"))), c.if(c.i32_and(c.getLocal("firstByte"), c.i32_const(64)), [...c.call(prefix + "_zeroAffine", c.getLocal("pOut")), ...c.ret([])]), c.setLocal("greatest", c.i32_and(c.getLocal("firstByte"), c.i32_const(128))), c.call(prefixField + "_copy", c.getLocal("pIn"), tmpY), c.i32_store8(tmpY, c.i32_and(c.getLocal("firstByte"), c.i32_const(63))), c.call(prefix + "__reverseBytes", tmpY, c.i32_const(n8), tmpX), c.call(prefixField + "_toMontgomery", tmpX, c.getLocal("pOut")), c.call(prefixField + "_square", c.getLocal("pOut"), tmpY), c.call(prefixField + "_mul", c.getLocal("pOut"), tmpY, tmpY), c.call(prefixField + "_add", tmpY, c.i32_const(pB), tmpY), c.call(prefixField + "_sqrt", tmpY, tmpY), c.call(prefixField + "_neg", tmpY, tmpX), c.if(c.i32_eq(c.call(prefixField + "_sign", tmpY), c.i32_const(-1)), c.if(c.getLocal("greatest"), c.call(prefixField + "_copy", tmpY, c.i32_add(c.getLocal("pOut"), c.i32_const(n8))), c.call(prefixField + "_neg", tmpY, c.i32_add(c.getLocal("pOut"), c.i32_const(n8)))), c.if(c.getLocal("greatest"), c.call(prefixField + "_neg", tmpY, c.i32_add(c.getLocal("pOut"), c.i32_const(n8))), c.call(prefixField + "_copy", tmpY, c.i32_add(c.getLocal("pOut"), c.i32_const(n8))))));
	}
	function buildInCurveAffine() {
		const f = module.addFunction(prefix + "_inCurveAffine");
		f.addParam("pIn", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		const x = c.getLocal("pIn");
		const y = c.i32_add(c.getLocal("pIn"), c.i32_const(n8));
		const y2 = c.i32_const(module.alloc(n8));
		const x3b = c.i32_const(module.alloc(n8));
		f.addCode(c.call(prefixField + "_square", y, y2), c.call(prefixField + "_square", x, x3b), c.call(prefixField + "_mul", x, x3b, x3b), c.call(prefixField + "_add", x3b, c.i32_const(pB), x3b), c.ret(c.call(prefixField + "_eq", y2, x3b)));
	}
	function buildInCurve() {
		const f = module.addFunction(prefix + "_inCurve");
		f.addParam("pIn", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		const aux = c.i32_const(module.alloc(n8 * 2));
		f.addCode(c.call(prefix + "_toAffine", c.getLocal("pIn"), aux), c.ret(c.call(prefix + "_inCurveAffine", aux)));
	}
	buildIsZeroAffine();
	buildIsZero();
	buildZeroAffine();
	buildZero();
	buildCopyAffine();
	buildCopy();
	buildToJacobian();
	buildEqAffine();
	buildEqMixed();
	buildEq();
	buildDoubleAffine();
	buildDouble();
	buildAddAffine();
	buildAddMixed();
	buildAdd();
	buildNegAffine();
	buildNeg();
	buildSubAffine();
	buildSubMixed();
	buildSub();
	buildFromMontgomeryAffine();
	buildFromMontgomery();
	buildToMontgomeryAffine();
	buildToMontgomery();
	buildToAffine();
	buildInCurveAffine();
	buildInCurve();
	buildBatchToAffine();
	buildNormalize();
	buildReverseBytes();
	buildLEMtoU();
	buildLEMtoC();
	buildUtoLEM();
	buildCtoLEM();
	build_batchconvertion_default(module, prefix + "_batchLEMtoU", prefix + "_LEMtoU", n8 * 2, n8 * 2);
	build_batchconvertion_default(module, prefix + "_batchLEMtoC", prefix + "_LEMtoC", n8 * 2, n8);
	build_batchconvertion_default(module, prefix + "_batchUtoLEM", prefix + "_UtoLEM", n8 * 2, n8 * 2);
	build_batchconvertion_default(module, prefix + "_batchCtoLEM", prefix + "_CtoLEM", n8, n8 * 2, true);
	build_batchconvertion_default(module, prefix + "_batchToJacobian", prefix + "_toJacobian", n8 * 2, n8 * 3, true);
	buildMultiexp(module, prefix, prefix + "_multiexp", prefix + "_add", n8 * 3);
	buildMultiexp(module, prefix, prefix + "_multiexpAffine", prefix + "_addMixed", n8 * 2);
	buildTimesScalarNAF(module, prefix + "_timesScalar", n8 * 3, prefix + "_add", prefix + "_double", prefix + "_sub", prefix + "_copy", prefix + "_zero");
	buildTimesScalarNAF(module, prefix + "_timesScalarAffine", n8 * 2, prefix + "_addMixed", prefix + "_double", prefix + "_subMixed", prefix + "_copyAffine", prefix + "_zero");
	module.exportFunction(prefix + "_isZero");
	module.exportFunction(prefix + "_isZeroAffine");
	module.exportFunction(prefix + "_eq");
	module.exportFunction(prefix + "_eqMixed");
	module.exportFunction(prefix + "_eqAffine");
	module.exportFunction(prefix + "_copy");
	module.exportFunction(prefix + "_copyAffine");
	module.exportFunction(prefix + "_zero");
	module.exportFunction(prefix + "_zeroAffine");
	module.exportFunction(prefix + "_double");
	module.exportFunction(prefix + "_doubleAffine");
	module.exportFunction(prefix + "_add");
	module.exportFunction(prefix + "_addMixed");
	module.exportFunction(prefix + "_addAffine");
	module.exportFunction(prefix + "_neg");
	module.exportFunction(prefix + "_negAffine");
	module.exportFunction(prefix + "_sub");
	module.exportFunction(prefix + "_subMixed");
	module.exportFunction(prefix + "_subAffine");
	module.exportFunction(prefix + "_fromMontgomery");
	module.exportFunction(prefix + "_fromMontgomeryAffine");
	module.exportFunction(prefix + "_toMontgomery");
	module.exportFunction(prefix + "_toMontgomeryAffine");
	module.exportFunction(prefix + "_timesScalar");
	module.exportFunction(prefix + "_timesScalarAffine");
	module.exportFunction(prefix + "_normalize");
	module.exportFunction(prefix + "_LEMtoU");
	module.exportFunction(prefix + "_LEMtoC");
	module.exportFunction(prefix + "_UtoLEM");
	module.exportFunction(prefix + "_CtoLEM");
	module.exportFunction(prefix + "_batchLEMtoU");
	module.exportFunction(prefix + "_batchLEMtoC");
	module.exportFunction(prefix + "_batchUtoLEM");
	module.exportFunction(prefix + "_batchCtoLEM");
	module.exportFunction(prefix + "_toAffine");
	module.exportFunction(prefix + "_toJacobian");
	module.exportFunction(prefix + "_batchToAffine");
	module.exportFunction(prefix + "_batchToJacobian");
	module.exportFunction(prefix + "_inCurve");
	module.exportFunction(prefix + "_inCurveAffine");
	return prefix;
}
//#endregion
//#region src/build_fft.js
function buildFFT(module, prefix, gPrefix, fPrefix, opGtimesF) {
	const n8f = module.modules[fPrefix].n64 * 8;
	const n8g = module.modules[gPrefix].n64 * 8;
	const q = module.modules[fPrefix].q;
	let rem = q - 1n;
	let maxBits = 0;
	while (!isOdd(rem)) {
		maxBits++;
		rem = rem >> 1n;
	}
	let nr = 2n;
	while (modPow(nr, q >> 1n, q) === 1n) nr = nr + 1n;
	const w = new Array(maxBits + 1);
	w[maxBits] = modPow(nr, rem, q);
	let n = maxBits - 1;
	while (n >= 0) {
		w[n] = modPow(w[n + 1], 2n, q);
		n--;
	}
	const bytes = [];
	const R = (1n << BigInt(n8f * 8)) % q;
	for (let i = 0; i < w.length; i++) {
		const m = w[i] * R % q;
		bytes.push(...bigInt2BytesLE(m, n8f));
	}
	const ROOTs = module.alloc(bytes);
	const i2 = new Array(maxBits + 1);
	i2[0] = 1n;
	for (let i = 1; i <= maxBits; i++) i2[i] = i2[i - 1] * 2n;
	const bytesi2 = [];
	for (let i = 0; i <= maxBits; i++) {
		const m = modInv(i2[i], q) * R % q;
		bytesi2.push(...bigInt2BytesLE(m, n8f));
	}
	const INV2 = module.alloc(bytesi2);
	const shift = modPow(nr, 2n, q);
	const bytesShiftToSmallM = [];
	const bytesSConst = [];
	for (let i = 0; i <= maxBits; i++) {
		const shiftToSmallM = modPow(shift, 2n ** BigInt(i), q);
		const sConst = modInv(q + 1n - shiftToSmallM, q);
		bytesShiftToSmallM.push(...bigInt2BytesLE(shiftToSmallM * R % q, n8f));
		bytesSConst.push(...bigInt2BytesLE(sConst * R % q, n8f));
	}
	const SHIFT_TO_M = module.alloc(bytesShiftToSmallM);
	const SCONST = module.alloc(bytesSConst);
	function rev(x) {
		let r = 0;
		for (let i = 0; i < 8; i++) if (x & 1 << i) r = r | 128 >> i;
		return r;
	}
	const rtable = Array(256);
	for (let i = 0; i < 256; i++) rtable[i] = rev(i);
	const REVTABLE = module.alloc(rtable);
	function buildLog2() {
		const f = module.addFunction(prefix + "__log2");
		f.addParam("n", "i32");
		f.setReturnType("i32");
		f.addLocal("bits", "i32");
		f.addLocal("aux", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.setLocal("aux", c.i32_shr_u(c.getLocal("n"), c.i32_const(1))));
		f.addCode(c.setLocal("bits", c.i32_const(0)));
		f.addCode(c.block(c.loop(c.br_if(1, c.i32_eqz(c.getLocal("aux"))), c.setLocal("aux", c.i32_shr_u(c.getLocal("aux"), c.i32_const(1))), c.setLocal("bits", c.i32_add(c.getLocal("bits"), c.i32_const(1))), c.br(0))));
		f.addCode(c.if(c.i32_ne(c.getLocal("n"), c.i32_shl(c.i32_const(1), c.getLocal("bits"))), c.unreachable()));
		f.addCode(c.if(c.i32_gt_u(c.getLocal("bits"), c.i32_const(maxBits)), c.unreachable()));
		f.addCode(c.getLocal("bits"));
	}
	function buildFFT() {
		const f = module.addFunction(prefix + "_fft");
		f.addParam("px", "i32");
		f.addParam("n", "i32");
		f.addLocal("bits", "i32");
		const c = f.getCodeBuilder();
		const One = c.i32_const(module.alloc(n8f));
		f.addCode(c.setLocal("bits", c.call(prefix + "__log2", c.getLocal("n"))), c.call(fPrefix + "_one", One), c.call(prefix + "_rawfft", c.getLocal("px"), c.getLocal("bits"), c.i32_const(0), One));
	}
	function buildIFFT() {
		const f = module.addFunction(prefix + "_ifft");
		f.addParam("px", "i32");
		f.addParam("n", "i32");
		f.addLocal("bits", "i32");
		f.addLocal("pInv2", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.setLocal("bits", c.call(prefix + "__log2", c.getLocal("n"))), c.setLocal("pInv2", c.i32_add(c.i32_const(INV2), c.i32_mul(c.getLocal("bits"), c.i32_const(n8f)))), c.call(prefix + "_rawfft", c.getLocal("px"), c.getLocal("bits"), c.i32_const(1), c.getLocal("pInv2")));
	}
	function buildRawFFT() {
		const f = module.addFunction(prefix + "_rawfft");
		f.addParam("px", "i32");
		f.addParam("bits", "i32");
		f.addParam("reverse", "i32");
		f.addParam("mulFactor", "i32");
		f.addLocal("s", "i32");
		f.addLocal("k", "i32");
		f.addLocal("j", "i32");
		f.addLocal("m", "i32");
		f.addLocal("mdiv2", "i32");
		f.addLocal("n", "i32");
		f.addLocal("pwm", "i32");
		f.addLocal("idx1", "i32");
		f.addLocal("idx2", "i32");
		const c = f.getCodeBuilder();
		const W = c.i32_const(module.alloc(n8f));
		const T = c.i32_const(module.alloc(n8g));
		const U = c.i32_const(module.alloc(n8g));
		f.addCode(c.call(prefix + "__reversePermutation", c.getLocal("px"), c.getLocal("bits")), c.setLocal("n", c.i32_shl(c.i32_const(1), c.getLocal("bits"))), c.setLocal("s", c.i32_const(1)), c.block(c.loop(c.br_if(1, c.i32_gt_u(c.getLocal("s"), c.getLocal("bits"))), c.setLocal("m", c.i32_shl(c.i32_const(1), c.getLocal("s"))), c.setLocal("pwm", c.i32_add(c.i32_const(ROOTs), c.i32_mul(c.getLocal("s"), c.i32_const(n8f)))), c.setLocal("k", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_ge_u(c.getLocal("k"), c.getLocal("n"))), c.call(fPrefix + "_one", W), c.setLocal("mdiv2", c.i32_shr_u(c.getLocal("m"), c.i32_const(1))), c.setLocal("j", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_ge_u(c.getLocal("j"), c.getLocal("mdiv2"))), c.setLocal("idx1", c.i32_add(c.getLocal("px"), c.i32_mul(c.i32_add(c.getLocal("k"), c.getLocal("j")), c.i32_const(n8g)))), c.setLocal("idx2", c.i32_add(c.getLocal("idx1"), c.i32_mul(c.getLocal("mdiv2"), c.i32_const(n8g)))), c.call(opGtimesF, c.getLocal("idx2"), W, T), c.call(gPrefix + "_copy", c.getLocal("idx1"), U), c.call(gPrefix + "_add", U, T, c.getLocal("idx1")), c.call(gPrefix + "_sub", U, T, c.getLocal("idx2")), c.call(fPrefix + "_mul", W, c.getLocal("pwm"), W), c.setLocal("j", c.i32_add(c.getLocal("j"), c.i32_const(1))), c.br(0))), c.setLocal("k", c.i32_add(c.getLocal("k"), c.getLocal("m"))), c.br(0))), c.setLocal("s", c.i32_add(c.getLocal("s"), c.i32_const(1))), c.br(0))), c.call(prefix + "__fftFinal", c.getLocal("px"), c.getLocal("bits"), c.getLocal("reverse"), c.getLocal("mulFactor")));
	}
	function buildFinalInverse() {
		const f = module.addFunction(prefix + "__fftFinal");
		f.addParam("px", "i32");
		f.addParam("bits", "i32");
		f.addParam("reverse", "i32");
		f.addParam("mulFactor", "i32");
		f.addLocal("n", "i32");
		f.addLocal("ndiv2", "i32");
		f.addLocal("pInv2", "i32");
		f.addLocal("i", "i32");
		f.addLocal("mask", "i32");
		f.addLocal("idx1", "i32");
		f.addLocal("idx2", "i32");
		const c = f.getCodeBuilder();
		const T = c.i32_const(module.alloc(n8g));
		f.addCode(c.if(c.i32_and(c.i32_eqz(c.getLocal("reverse")), c.call(fPrefix + "_isOne", c.getLocal("mulFactor"))), c.ret([])), c.setLocal("n", c.i32_shl(c.i32_const(1), c.getLocal("bits"))), c.setLocal("mask", c.i32_sub(c.getLocal("n"), c.i32_const(1))), c.setLocal("i", c.i32_const(1)), c.setLocal("ndiv2", c.i32_shr_u(c.getLocal("n"), c.i32_const(1))), c.block(c.loop(c.br_if(1, c.i32_ge_u(c.getLocal("i"), c.getLocal("ndiv2"))), c.setLocal("idx1", c.i32_add(c.getLocal("px"), c.i32_mul(c.getLocal("i"), c.i32_const(n8g)))), c.setLocal("idx2", c.i32_add(c.getLocal("px"), c.i32_mul(c.i32_sub(c.getLocal("n"), c.getLocal("i")), c.i32_const(n8g)))), c.if(c.getLocal("reverse"), c.if(c.call(fPrefix + "_isOne", c.getLocal("mulFactor")), [
			...c.call(gPrefix + "_copy", c.getLocal("idx1"), T),
			...c.call(gPrefix + "_copy", c.getLocal("idx2"), c.getLocal("idx1")),
			...c.call(gPrefix + "_copy", T, c.getLocal("idx2"))
		], [
			...c.call(gPrefix + "_copy", c.getLocal("idx1"), T),
			...c.call(opGtimesF, c.getLocal("idx2"), c.getLocal("mulFactor"), c.getLocal("idx1")),
			...c.call(opGtimesF, T, c.getLocal("mulFactor"), c.getLocal("idx2"))
		]), c.if(c.call(fPrefix + "_isOne", c.getLocal("mulFactor")), [], [...c.call(opGtimesF, c.getLocal("idx1"), c.getLocal("mulFactor"), c.getLocal("idx1")), ...c.call(opGtimesF, c.getLocal("idx2"), c.getLocal("mulFactor"), c.getLocal("idx2"))])), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))), c.if(c.call(fPrefix + "_isOne", c.getLocal("mulFactor")), [], [
			...c.call(opGtimesF, c.getLocal("px"), c.getLocal("mulFactor"), c.getLocal("px")),
			...c.setLocal("idx2", c.i32_add(c.getLocal("px"), c.i32_mul(c.getLocal("ndiv2"), c.i32_const(n8g)))),
			...c.call(opGtimesF, c.getLocal("idx2"), c.getLocal("mulFactor"), c.getLocal("idx2"))
		]));
	}
	function buildReversePermutation() {
		const f = module.addFunction(prefix + "__reversePermutation");
		f.addParam("px", "i32");
		f.addParam("bits", "i32");
		f.addLocal("n", "i32");
		f.addLocal("i", "i32");
		f.addLocal("ri", "i32");
		f.addLocal("idx1", "i32");
		f.addLocal("idx2", "i32");
		const c = f.getCodeBuilder();
		const T = c.i32_const(module.alloc(n8g));
		f.addCode(c.setLocal("n", c.i32_shl(c.i32_const(1), c.getLocal("bits"))), c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("n"))), c.setLocal("idx1", c.i32_add(c.getLocal("px"), c.i32_mul(c.getLocal("i"), c.i32_const(n8g)))), c.setLocal("ri", c.call(prefix + "__rev", c.getLocal("i"), c.getLocal("bits"))), c.setLocal("idx2", c.i32_add(c.getLocal("px"), c.i32_mul(c.getLocal("ri"), c.i32_const(n8g)))), c.if(c.i32_lt_u(c.getLocal("i"), c.getLocal("ri")), [
			...c.call(gPrefix + "_copy", c.getLocal("idx1"), T),
			...c.call(gPrefix + "_copy", c.getLocal("idx2"), c.getLocal("idx1")),
			...c.call(gPrefix + "_copy", T, c.getLocal("idx2"))
		]), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))));
	}
	function buildRev() {
		const f = module.addFunction(prefix + "__rev");
		f.addParam("x", "i32");
		f.addParam("bits", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		f.addCode(c.i32_rotl(c.i32_add(c.i32_add(c.i32_shl(c.i32_load8_u(c.i32_and(c.getLocal("x"), c.i32_const(255)), REVTABLE, 0), c.i32_const(24)), c.i32_shl(c.i32_load8_u(c.i32_and(c.i32_shr_u(c.getLocal("x"), c.i32_const(8)), c.i32_const(255)), REVTABLE, 0), c.i32_const(16))), c.i32_add(c.i32_shl(c.i32_load8_u(c.i32_and(c.i32_shr_u(c.getLocal("x"), c.i32_const(16)), c.i32_const(255)), REVTABLE, 0), c.i32_const(8)), c.i32_load8_u(c.i32_and(c.i32_shr_u(c.getLocal("x"), c.i32_const(24)), c.i32_const(255)), REVTABLE, 0))), c.getLocal("bits")));
	}
	function buildFFTJoin() {
		const f = module.addFunction(prefix + "_fftJoin");
		f.addParam("pBuff1", "i32");
		f.addParam("pBuff2", "i32");
		f.addParam("n", "i32");
		f.addParam("first", "i32");
		f.addParam("inc", "i32");
		f.addLocal("idx1", "i32");
		f.addLocal("idx2", "i32");
		f.addLocal("i", "i32");
		const c = f.getCodeBuilder();
		const W = c.i32_const(module.alloc(n8f));
		const T = c.i32_const(module.alloc(n8g));
		const U = c.i32_const(module.alloc(n8g));
		f.addCode(c.call(fPrefix + "_copy", c.getLocal("first"), W), c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("n"))), c.setLocal("idx1", c.i32_add(c.getLocal("pBuff1"), c.i32_mul(c.getLocal("i"), c.i32_const(n8g)))), c.setLocal("idx2", c.i32_add(c.getLocal("pBuff2"), c.i32_mul(c.getLocal("i"), c.i32_const(n8g)))), c.call(opGtimesF, c.getLocal("idx2"), W, T), c.call(gPrefix + "_copy", c.getLocal("idx1"), U), c.call(gPrefix + "_add", U, T, c.getLocal("idx1")), c.call(gPrefix + "_sub", U, T, c.getLocal("idx2")), c.call(fPrefix + "_mul", W, c.getLocal("inc"), W), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))));
	}
	function buildFFTJoinExt() {
		const f = module.addFunction(prefix + "_fftJoinExt");
		f.addParam("pBuff1", "i32");
		f.addParam("pBuff2", "i32");
		f.addParam("n", "i32");
		f.addParam("first", "i32");
		f.addParam("inc", "i32");
		f.addParam("totalBits", "i32");
		f.addLocal("idx1", "i32");
		f.addLocal("idx2", "i32");
		f.addLocal("i", "i32");
		f.addLocal("pShiftToM", "i32");
		const c = f.getCodeBuilder();
		const W = c.i32_const(module.alloc(n8f));
		const U = c.i32_const(module.alloc(n8g));
		f.addCode(c.setLocal("pShiftToM", c.i32_add(c.i32_const(SHIFT_TO_M), c.i32_mul(c.getLocal("totalBits"), c.i32_const(n8f)))), c.call(fPrefix + "_copy", c.getLocal("first"), W), c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("n"))), c.setLocal("idx1", c.i32_add(c.getLocal("pBuff1"), c.i32_mul(c.getLocal("i"), c.i32_const(n8g)))), c.setLocal("idx2", c.i32_add(c.getLocal("pBuff2"), c.i32_mul(c.getLocal("i"), c.i32_const(n8g)))), c.call(gPrefix + "_add", c.getLocal("idx1"), c.getLocal("idx2"), U), c.call(opGtimesF, c.getLocal("idx2"), c.getLocal("pShiftToM"), c.getLocal("idx2")), c.call(gPrefix + "_add", c.getLocal("idx1"), c.getLocal("idx2"), c.getLocal("idx2")), c.call(opGtimesF, c.getLocal("idx2"), W, c.getLocal("idx2")), c.call(gPrefix + "_copy", U, c.getLocal("idx1")), c.call(fPrefix + "_mul", W, c.getLocal("inc"), W), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))));
	}
	function buildFFTJoinExtInv() {
		const f = module.addFunction(prefix + "_fftJoinExtInv");
		f.addParam("pBuff1", "i32");
		f.addParam("pBuff2", "i32");
		f.addParam("n", "i32");
		f.addParam("first", "i32");
		f.addParam("inc", "i32");
		f.addParam("totalBits", "i32");
		f.addLocal("idx1", "i32");
		f.addLocal("idx2", "i32");
		f.addLocal("i", "i32");
		f.addLocal("pShiftToM", "i32");
		f.addLocal("pSConst", "i32");
		const c = f.getCodeBuilder();
		const W = c.i32_const(module.alloc(n8f));
		const U = c.i32_const(module.alloc(n8g));
		f.addCode(c.setLocal("pShiftToM", c.i32_add(c.i32_const(SHIFT_TO_M), c.i32_mul(c.getLocal("totalBits"), c.i32_const(n8f)))), c.setLocal("pSConst", c.i32_add(c.i32_const(SCONST), c.i32_mul(c.getLocal("totalBits"), c.i32_const(n8f)))), c.call(fPrefix + "_copy", c.getLocal("first"), W), c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("n"))), c.setLocal("idx1", c.i32_add(c.getLocal("pBuff1"), c.i32_mul(c.getLocal("i"), c.i32_const(n8g)))), c.setLocal("idx2", c.i32_add(c.getLocal("pBuff2"), c.i32_mul(c.getLocal("i"), c.i32_const(n8g)))), c.call(opGtimesF, c.getLocal("idx2"), W, U), c.call(gPrefix + "_sub", c.getLocal("idx1"), U, c.getLocal("idx2")), c.call(opGtimesF, c.getLocal("idx2"), c.getLocal("pSConst"), c.getLocal("idx2")), c.call(opGtimesF, c.getLocal("idx1"), c.getLocal("pShiftToM"), c.getLocal("idx1")), c.call(gPrefix + "_sub", U, c.getLocal("idx1"), c.getLocal("idx1")), c.call(opGtimesF, c.getLocal("idx1"), c.getLocal("pSConst"), c.getLocal("idx1")), c.call(fPrefix + "_mul", W, c.getLocal("inc"), W), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))));
	}
	function buildPrepareLagrangeEvaluation() {
		const f = module.addFunction(prefix + "_prepareLagrangeEvaluation");
		f.addParam("pBuff1", "i32");
		f.addParam("pBuff2", "i32");
		f.addParam("n", "i32");
		f.addParam("first", "i32");
		f.addParam("inc", "i32");
		f.addParam("totalBits", "i32");
		f.addLocal("idx1", "i32");
		f.addLocal("idx2", "i32");
		f.addLocal("i", "i32");
		f.addLocal("pShiftToM", "i32");
		f.addLocal("pSConst", "i32");
		const c = f.getCodeBuilder();
		const W = c.i32_const(module.alloc(n8f));
		const U = c.i32_const(module.alloc(n8g));
		f.addCode(c.setLocal("pShiftToM", c.i32_add(c.i32_const(SHIFT_TO_M), c.i32_mul(c.getLocal("totalBits"), c.i32_const(n8f)))), c.setLocal("pSConst", c.i32_add(c.i32_const(SCONST), c.i32_mul(c.getLocal("totalBits"), c.i32_const(n8f)))), c.call(fPrefix + "_copy", c.getLocal("first"), W), c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("n"))), c.setLocal("idx1", c.i32_add(c.getLocal("pBuff1"), c.i32_mul(c.getLocal("i"), c.i32_const(n8g)))), c.setLocal("idx2", c.i32_add(c.getLocal("pBuff2"), c.i32_mul(c.getLocal("i"), c.i32_const(n8g)))), c.call(opGtimesF, c.getLocal("idx1"), c.getLocal("pShiftToM"), U), c.call(gPrefix + "_sub", c.getLocal("idx2"), U, U), c.call(gPrefix + "_sub", c.getLocal("idx1"), c.getLocal("idx2"), c.getLocal("idx2")), c.call(opGtimesF, U, c.getLocal("pSConst"), c.getLocal("idx1")), c.call(opGtimesF, c.getLocal("idx2"), W, c.getLocal("idx2")), c.call(fPrefix + "_mul", W, c.getLocal("inc"), W), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))));
	}
	function buildFFTMix() {
		const f = module.addFunction(prefix + "_fftMix");
		f.addParam("pBuff", "i32");
		f.addParam("n", "i32");
		f.addParam("exp", "i32");
		f.addLocal("nGroups", "i32");
		f.addLocal("nPerGroup", "i32");
		f.addLocal("nPerGroupDiv2", "i32");
		f.addLocal("pairOffset", "i32");
		f.addLocal("idx1", "i32");
		f.addLocal("idx2", "i32");
		f.addLocal("i", "i32");
		f.addLocal("j", "i32");
		f.addLocal("pwm", "i32");
		const c = f.getCodeBuilder();
		const W = c.i32_const(module.alloc(n8f));
		const T = c.i32_const(module.alloc(n8g));
		const U = c.i32_const(module.alloc(n8g));
		f.addCode(c.setLocal("nPerGroup", c.i32_shl(c.i32_const(1), c.getLocal("exp"))), c.setLocal("nPerGroupDiv2", c.i32_shr_u(c.getLocal("nPerGroup"), c.i32_const(1))), c.setLocal("nGroups", c.i32_shr_u(c.getLocal("n"), c.getLocal("exp"))), c.setLocal("pairOffset", c.i32_mul(c.getLocal("nPerGroupDiv2"), c.i32_const(n8g))), c.setLocal("pwm", c.i32_add(c.i32_const(ROOTs), c.i32_mul(c.getLocal("exp"), c.i32_const(n8f)))), c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("nGroups"))), c.call(fPrefix + "_one", W), c.setLocal("j", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("j"), c.getLocal("nPerGroupDiv2"))), c.setLocal("idx1", c.i32_add(c.getLocal("pBuff"), c.i32_mul(c.i32_add(c.i32_mul(c.getLocal("i"), c.getLocal("nPerGroup")), c.getLocal("j")), c.i32_const(n8g)))), c.setLocal("idx2", c.i32_add(c.getLocal("idx1"), c.getLocal("pairOffset"))), c.call(opGtimesF, c.getLocal("idx2"), W, T), c.call(gPrefix + "_copy", c.getLocal("idx1"), U), c.call(gPrefix + "_add", U, T, c.getLocal("idx1")), c.call(gPrefix + "_sub", U, T, c.getLocal("idx2")), c.call(fPrefix + "_mul", W, c.getLocal("pwm"), W), c.setLocal("j", c.i32_add(c.getLocal("j"), c.i32_const(1))), c.br(0))), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))));
	}
	function buildFFTFinal() {
		const f = module.addFunction(prefix + "_fftFinal");
		f.addParam("pBuff", "i32");
		f.addParam("n", "i32");
		f.addParam("factor", "i32");
		f.addLocal("idx1", "i32");
		f.addLocal("idx2", "i32");
		f.addLocal("i", "i32");
		f.addLocal("ndiv2", "i32");
		const c = f.getCodeBuilder();
		const T = c.i32_const(module.alloc(n8g));
		f.addCode(c.setLocal("ndiv2", c.i32_shr_u(c.getLocal("n"), c.i32_const(1))), c.if(c.i32_and(c.getLocal("n"), c.i32_const(1)), c.call(opGtimesF, c.i32_add(c.getLocal("pBuff"), c.i32_mul(c.getLocal("ndiv2"), c.i32_const(n8g))), c.getLocal("factor"), c.i32_add(c.getLocal("pBuff"), c.i32_mul(c.getLocal("ndiv2"), c.i32_const(n8g))))), c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_ge_u(c.getLocal("i"), c.getLocal("ndiv2"))), c.setLocal("idx1", c.i32_add(c.getLocal("pBuff"), c.i32_mul(c.getLocal("i"), c.i32_const(n8g)))), c.setLocal("idx2", c.i32_add(c.getLocal("pBuff"), c.i32_mul(c.i32_sub(c.i32_sub(c.getLocal("n"), c.i32_const(1)), c.getLocal("i")), c.i32_const(n8g)))), c.call(opGtimesF, c.getLocal("idx2"), c.getLocal("factor"), T), c.call(opGtimesF, c.getLocal("idx1"), c.getLocal("factor"), c.getLocal("idx2")), c.call(gPrefix + "_copy", T, c.getLocal("idx1")), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))));
	}
	buildRev();
	buildReversePermutation();
	buildFinalInverse();
	buildRawFFT();
	buildLog2();
	buildFFT();
	buildIFFT();
	buildFFTJoin();
	buildFFTJoinExt();
	buildFFTJoinExtInv();
	buildFFTMix();
	buildFFTFinal();
	buildPrepareLagrangeEvaluation();
	module.exportFunction(prefix + "__reversePermutation");
	module.exportFunction(prefix + "_fft");
	module.exportFunction(prefix + "_ifft");
	module.exportFunction(prefix + "_rawfft");
	module.exportFunction(prefix + "_fftJoin");
	module.exportFunction(prefix + "_fftJoinExt");
	module.exportFunction(prefix + "_fftJoinExtInv");
	module.exportFunction(prefix + "_fftMix");
	module.exportFunction(prefix + "_fftFinal");
	module.exportFunction(prefix + "_prepareLagrangeEvaluation");
}
//#endregion
//#region src/build_pol.js
function buildPol(module, prefix, prefixField) {
	const n8 = module.modules[prefixField].n64 * 8;
	function buildZero() {
		const f = module.addFunction(prefix + "_zero");
		f.addParam("px", "i32");
		f.addParam("n", "i32");
		f.addLocal("lastp", "i32");
		f.addLocal("p", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.setLocal("p", c.getLocal("px")), c.setLocal("lastp", c.i32_add(c.getLocal("px"), c.i32_mul(c.getLocal("n"), c.i32_const(n8)))), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("p"), c.getLocal("lastp"))), c.call(prefixField + "_zero", c.getLocal("p")), c.setLocal("p", c.i32_add(c.getLocal("p"), c.i32_const(n8))), c.br(0))));
	}
	function buildConstructLC() {
		const f = module.addFunction(prefix + "_constructLC");
		f.addParam("ppolynomials", "i32");
		f.addParam("psignals", "i32");
		f.addParam("nSignals", "i32");
		f.addParam("pres", "i32");
		f.addLocal("i", "i32");
		f.addLocal("j", "i32");
		f.addLocal("pp", "i32");
		f.addLocal("ps", "i32");
		f.addLocal("pd", "i32");
		f.addLocal("ncoefs", "i32");
		const c = f.getCodeBuilder();
		const aux = c.i32_const(module.alloc(n8));
		f.addCode(c.setLocal("i", c.i32_const(0)), c.setLocal("pp", c.getLocal("ppolynomials")), c.setLocal("ps", c.getLocal("psignals")), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("nSignals"))), c.setLocal("ncoefs", c.i32_load(c.getLocal("pp"))), c.setLocal("pp", c.i32_add(c.getLocal("pp"), c.i32_const(4))), c.setLocal("j", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("j"), c.getLocal("ncoefs"))), c.setLocal("pd", c.i32_add(c.getLocal("pres"), c.i32_mul(c.i32_load(c.getLocal("pp")), c.i32_const(n8)))), c.setLocal("pp", c.i32_add(c.getLocal("pp"), c.i32_const(4))), c.call(prefixField + "_mul", c.getLocal("ps"), c.getLocal("pp"), aux), c.call(prefixField + "_add", aux, c.getLocal("pd"), c.getLocal("pd")), c.setLocal("pp", c.i32_add(c.getLocal("pp"), c.i32_const(n8))), c.setLocal("j", c.i32_add(c.getLocal("j"), c.i32_const(1))), c.br(0))), c.setLocal("ps", c.i32_add(c.getLocal("ps"), c.i32_const(n8))), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))));
	}
	buildZero();
	buildConstructLC();
	module.exportFunction(prefix + "_zero");
	module.exportFunction(prefix + "_constructLC");
	return prefix;
}
//#endregion
//#region src/build_qap.js
function buildQAP(module, prefix, prefixField) {
	const n8 = module.modules[prefixField].n64 * 8;
	function buildBuildABC() {
		const f = module.addFunction(prefix + "_buildABC");
		f.addParam("pCoefs", "i32");
		f.addParam("nCoefs", "i32");
		f.addParam("pWitness", "i32");
		f.addParam("pA", "i32");
		f.addParam("pB", "i32");
		f.addParam("pC", "i32");
		f.addParam("offsetOut", "i32");
		f.addParam("nOut", "i32");
		f.addParam("offsetWitness", "i32");
		f.addParam("nWitness", "i32");
		f.addLocal("it", "i32");
		f.addLocal("ita", "i32");
		f.addLocal("itb", "i32");
		f.addLocal("last", "i32");
		f.addLocal("m", "i32");
		f.addLocal("c", "i32");
		f.addLocal("s", "i32");
		f.addLocal("pOut", "i32");
		const c = f.getCodeBuilder();
		const aux = c.i32_const(module.alloc(n8));
		f.addCode(c.setLocal("ita", c.getLocal("pA")), c.setLocal("itb", c.getLocal("pB")), c.setLocal("last", c.i32_add(c.getLocal("pA"), c.i32_mul(c.getLocal("nOut"), c.i32_const(n8)))), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("ita"), c.getLocal("last"))), c.call(prefixField + "_zero", c.getLocal("ita")), c.call(prefixField + "_zero", c.getLocal("itb")), c.setLocal("ita", c.i32_add(c.getLocal("ita"), c.i32_const(n8))), c.setLocal("itb", c.i32_add(c.getLocal("itb"), c.i32_const(n8))), c.br(0))), c.setLocal("it", c.getLocal("pCoefs")), c.setLocal("last", c.i32_add(c.getLocal("pCoefs"), c.i32_mul(c.getLocal("nCoefs"), c.i32_const(n8 + 12)))), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("it"), c.getLocal("last"))), c.setLocal("s", c.i32_load(c.getLocal("it"), 8)), c.if(c.i32_or(c.i32_lt_u(c.getLocal("s"), c.getLocal("offsetWitness")), c.i32_ge_u(c.getLocal("s"), c.i32_add(c.getLocal("offsetWitness"), c.getLocal("nWitness")))), [...c.setLocal("it", c.i32_add(c.getLocal("it"), c.i32_const(n8 + 12))), ...c.br(1)]), c.setLocal("m", c.i32_load(c.getLocal("it"))), c.if(c.i32_eq(c.getLocal("m"), c.i32_const(0)), c.setLocal("pOut", c.getLocal("pA")), c.if(c.i32_eq(c.getLocal("m"), c.i32_const(1)), c.setLocal("pOut", c.getLocal("pB")), [...c.setLocal("it", c.i32_add(c.getLocal("it"), c.i32_const(n8 + 12))), ...c.br(1)])), c.setLocal("c", c.i32_load(c.getLocal("it"), 4)), c.if(c.i32_or(c.i32_lt_u(c.getLocal("c"), c.getLocal("offsetOut")), c.i32_ge_u(c.getLocal("c"), c.i32_add(c.getLocal("offsetOut"), c.getLocal("nOut")))), [...c.setLocal("it", c.i32_add(c.getLocal("it"), c.i32_const(n8 + 12))), ...c.br(1)]), c.setLocal("pOut", c.i32_add(c.getLocal("pOut"), c.i32_mul(c.i32_sub(c.getLocal("c"), c.getLocal("offsetOut")), c.i32_const(n8)))), c.call(prefixField + "_mul", c.i32_add(c.getLocal("pWitness"), c.i32_mul(c.i32_sub(c.getLocal("s"), c.getLocal("offsetWitness")), c.i32_const(n8))), c.i32_add(c.getLocal("it"), c.i32_const(12)), aux), c.call(prefixField + "_add", c.getLocal("pOut"), aux, c.getLocal("pOut")), c.setLocal("it", c.i32_add(c.getLocal("it"), c.i32_const(n8 + 12))), c.br(0))), c.setLocal("ita", c.getLocal("pA")), c.setLocal("itb", c.getLocal("pB")), c.setLocal("it", c.getLocal("pC")), c.setLocal("last", c.i32_add(c.getLocal("pA"), c.i32_mul(c.getLocal("nOut"), c.i32_const(n8)))), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("ita"), c.getLocal("last"))), c.call(prefixField + "_mul", c.getLocal("ita"), c.getLocal("itb"), c.getLocal("it")), c.setLocal("ita", c.i32_add(c.getLocal("ita"), c.i32_const(n8))), c.setLocal("itb", c.i32_add(c.getLocal("itb"), c.i32_const(n8))), c.setLocal("it", c.i32_add(c.getLocal("it"), c.i32_const(n8))), c.br(0))));
	}
	function buildJoinABC() {
		const f = module.addFunction(prefix + "_joinABC");
		f.addParam("pA", "i32");
		f.addParam("pB", "i32");
		f.addParam("pC", "i32");
		f.addParam("n", "i32");
		f.addParam("pP", "i32");
		f.addLocal("ita", "i32");
		f.addLocal("itb", "i32");
		f.addLocal("itc", "i32");
		f.addLocal("itp", "i32");
		f.addLocal("last", "i32");
		const c = f.getCodeBuilder();
		const aux = c.i32_const(module.alloc(n8));
		f.addCode(c.setLocal("ita", c.getLocal("pA")), c.setLocal("itb", c.getLocal("pB")), c.setLocal("itc", c.getLocal("pC")), c.setLocal("itp", c.getLocal("pP")), c.setLocal("last", c.i32_add(c.getLocal("pA"), c.i32_mul(c.getLocal("n"), c.i32_const(n8)))), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("ita"), c.getLocal("last"))), c.call(prefixField + "_mul", c.getLocal("ita"), c.getLocal("itb"), aux), c.call(prefixField + "_sub", aux, c.getLocal("itc"), c.getLocal("itp")), c.setLocal("ita", c.i32_add(c.getLocal("ita"), c.i32_const(n8))), c.setLocal("itb", c.i32_add(c.getLocal("itb"), c.i32_const(n8))), c.setLocal("itc", c.i32_add(c.getLocal("itc"), c.i32_const(n8))), c.setLocal("itp", c.i32_add(c.getLocal("itp"), c.i32_const(n8))), c.br(0))));
	}
	function buildBatchAdd() {
		const f = module.addFunction(prefix + "_batchAdd");
		f.addParam("pa", "i32");
		f.addParam("pb", "i32");
		f.addParam("n", "i32");
		f.addParam("pr", "i32");
		f.addLocal("ita", "i32");
		f.addLocal("itb", "i32");
		f.addLocal("itr", "i32");
		f.addLocal("last", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.setLocal("ita", c.getLocal("pa")), c.setLocal("itb", c.getLocal("pb")), c.setLocal("itr", c.getLocal("pr")), c.setLocal("last", c.i32_add(c.getLocal("pa"), c.i32_mul(c.getLocal("n"), c.i32_const(n8)))), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("ita"), c.getLocal("last"))), c.call(prefixField + "_add", c.getLocal("ita"), c.getLocal("itb"), c.getLocal("itr")), c.setLocal("ita", c.i32_add(c.getLocal("ita"), c.i32_const(n8))), c.setLocal("itb", c.i32_add(c.getLocal("itb"), c.i32_const(n8))), c.setLocal("itr", c.i32_add(c.getLocal("itr"), c.i32_const(n8))), c.br(0))));
	}
	buildBuildABC();
	buildJoinABC();
	buildBatchAdd();
	module.exportFunction(prefix + "_buildABC");
	module.exportFunction(prefix + "_joinABC");
	module.exportFunction(prefix + "_batchAdd");
	return prefix;
}
//#endregion
//#region src/build_applykey.js
function buildApplyKey(module, fnName, gPrefix, frPrefix, sizeGIn, sizeGOut, sizeF, opGtimesF) {
	const f = module.addFunction(fnName);
	f.addParam("pIn", "i32");
	f.addParam("n", "i32");
	f.addParam("pFirst", "i32");
	f.addParam("pInc", "i32");
	f.addParam("pOut", "i32");
	f.addLocal("pOldFree", "i32");
	f.addLocal("i", "i32");
	f.addLocal("pFrom", "i32");
	f.addLocal("pTo", "i32");
	const c = f.getCodeBuilder();
	const t = c.i32_const(module.alloc(sizeF));
	f.addCode(c.setLocal("pFrom", c.getLocal("pIn")), c.setLocal("pTo", c.getLocal("pOut")));
	f.addCode(c.call(frPrefix + "_copy", c.getLocal("pFirst"), t));
	f.addCode(c.setLocal("i", c.i32_const(0)), c.block(c.loop(c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("n"))), c.call(opGtimesF, c.getLocal("pFrom"), t, c.getLocal("pTo")), c.setLocal("pFrom", c.i32_add(c.getLocal("pFrom"), c.i32_const(sizeGIn))), c.setLocal("pTo", c.i32_add(c.getLocal("pTo"), c.i32_const(sizeGOut))), c.call(frPrefix + "_mul", t, c.getLocal("pInc"), t), c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))), c.br(0))));
	module.exportFunction(fnName);
}
//#endregion
//#region src/bn128/build_bn128.js
function buildBN128(module, _prefix) {
	const prefix = _prefix || "bn128";
	if (module.modules[prefix]) return prefix;
	const q = 21888242871839275222246405745257275088696311157297823662689037894645226208583n;
	const r = 21888242871839275222246405745257275088548364400416034343698204186575808495617n;
	const n64 = Math.floor((bitLength(q - 1n) - 1) / 64) + 1;
	const n8 = n64 * 8;
	const frsize = n8;
	const f1size = n8;
	const f2size = f1size * 2;
	const ftsize = f1size * 12;
	const pr = module.alloc(bigInt2BytesLE(r, frsize));
	const f1mPrefix = buildF1m(module, q, "f1m");
	buildF1(module, r, "fr", "frm");
	const pG1b = module.alloc(bigInt2BytesLE(toMontgomery(3n), f1size));
	const g1mPrefix = buildCurve(module, "g1m", "f1m", pG1b);
	buildFFT(module, "frm", "frm", "frm", "frm_mul");
	buildPol(module, "pol", "frm");
	buildQAP(module, "qap", "frm");
	const f2mPrefix = buildF2m(module, "f1m_neg", "f2m", "f1m");
	const pG2b = module.alloc([...bigInt2BytesLE(toMontgomery(19485874751759354771024239261021720505790618469301721065564631296452457478373n), f1size), ...bigInt2BytesLE(toMontgomery(266929791119991161246907387137283842545076965332900288569378510910307636690n), f1size)]);
	const g2mPrefix = buildCurve(module, "g2m", "f2m", pG2b);
	function buildGTimesFr(fnName, opMul) {
		const f = module.addFunction(fnName);
		f.addParam("pG", "i32");
		f.addParam("pFr", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		const AUX = c.i32_const(module.alloc(n8));
		f.addCode(c.call("frm_fromMontgomery", c.getLocal("pFr"), AUX), c.call(opMul, c.getLocal("pG"), AUX, c.i32_const(n8), c.getLocal("pr")));
		module.exportFunction(fnName);
	}
	buildGTimesFr("g1m_timesFr", "g1m_timesScalar");
	buildFFT(module, "g1m", "g1m", "frm", "g1m_timesFr");
	buildGTimesFr("g2m_timesFr", "g2m_timesScalar");
	buildFFT(module, "g2m", "g2m", "frm", "g2m_timesFr");
	buildGTimesFr("g1m_timesFrAffine", "g1m_timesScalarAffine");
	buildGTimesFr("g2m_timesFrAffine", "g2m_timesScalarAffine");
	buildApplyKey(module, "frm_batchApplyKey", "fmr", "frm", n8, n8, n8, "frm_mul");
	buildApplyKey(module, "g1m_batchApplyKey", "g1m", "frm", n8 * 3, n8 * 3, n8, "g1m_timesFr");
	buildApplyKey(module, "g1m_batchApplyKeyMixed", "g1m", "frm", n8 * 2, n8 * 3, n8, "g1m_timesFrAffine");
	buildApplyKey(module, "g2m_batchApplyKey", "g2m", "frm", n8 * 2 * 3, n8 * 3 * 2, n8, "g2m_timesFr");
	buildApplyKey(module, "g2m_batchApplyKeyMixed", "g2m", "frm", n8 * 2 * 2, n8 * 3 * 2, n8, "g2m_timesFrAffine");
	function toMontgomery(a) {
		return BigInt(a) * (1n << BigInt(f1size * 8)) % q;
	}
	const G1gen = [
		1n,
		2n,
		1n
	];
	const pG1gen = module.alloc([
		...bigInt2BytesLE(toMontgomery(G1gen[0]), f1size),
		...bigInt2BytesLE(toMontgomery(G1gen[1]), f1size),
		...bigInt2BytesLE(toMontgomery(G1gen[2]), f1size)
	]);
	const G1zero = [
		0n,
		1n,
		0n
	];
	const pG1zero = module.alloc([
		...bigInt2BytesLE(toMontgomery(G1zero[0]), f1size),
		...bigInt2BytesLE(toMontgomery(G1zero[1]), f1size),
		...bigInt2BytesLE(toMontgomery(G1zero[2]), f1size)
	]);
	const G2gen = [
		[10857046999023057135944570762232829481370756359578518086990519993285655852781n, 11559732032986387107991004021392285783925812861821192530917403151452391805634n],
		[8495653923123431417604973247489272438418190587263600148770280649306958101930n, 4082367875863433681332203403145435568316851327593401208105741076214120093531n],
		[1n, 0n]
	];
	const pG2gen = module.alloc([
		...bigInt2BytesLE(toMontgomery(G2gen[0][0]), f1size),
		...bigInt2BytesLE(toMontgomery(G2gen[0][1]), f1size),
		...bigInt2BytesLE(toMontgomery(G2gen[1][0]), f1size),
		...bigInt2BytesLE(toMontgomery(G2gen[1][1]), f1size),
		...bigInt2BytesLE(toMontgomery(G2gen[2][0]), f1size),
		...bigInt2BytesLE(toMontgomery(G2gen[2][1]), f1size)
	]);
	const G2zero = [
		[0n, 0n],
		[1n, 0n],
		[0n, 0n]
	];
	const pG2zero = module.alloc([
		...bigInt2BytesLE(toMontgomery(G2zero[0][0]), f1size),
		...bigInt2BytesLE(toMontgomery(G2zero[0][1]), f1size),
		...bigInt2BytesLE(toMontgomery(G2zero[1][0]), f1size),
		...bigInt2BytesLE(toMontgomery(G2zero[1][1]), f1size),
		...bigInt2BytesLE(toMontgomery(G2zero[2][0]), f1size),
		...bigInt2BytesLE(toMontgomery(G2zero[2][1]), f1size)
	]);
	const pOneT = module.alloc([
		...bigInt2BytesLE(toMontgomery(1), f1size),
		...bigInt2BytesLE(toMontgomery(0), f1size),
		...bigInt2BytesLE(toMontgomery(0), f1size),
		...bigInt2BytesLE(toMontgomery(0), f1size),
		...bigInt2BytesLE(toMontgomery(0), f1size),
		...bigInt2BytesLE(toMontgomery(0), f1size),
		...bigInt2BytesLE(toMontgomery(0), f1size),
		...bigInt2BytesLE(toMontgomery(0), f1size),
		...bigInt2BytesLE(toMontgomery(0), f1size),
		...bigInt2BytesLE(toMontgomery(0), f1size),
		...bigInt2BytesLE(toMontgomery(0), f1size),
		...bigInt2BytesLE(toMontgomery(0), f1size)
	]);
	const pNonResidueF6 = module.alloc([...bigInt2BytesLE(toMontgomery(9), f1size), ...bigInt2BytesLE(toMontgomery(1), f1size)]);
	const pTwoInv = module.alloc([...bigInt2BytesLE(toMontgomery(modInv(2n, q)), f1size), ...bigInt2BytesLE(0n, f1size)]);
	const pAltBn128Twist = pNonResidueF6;
	const pTwistCoefB = module.alloc([...bigInt2BytesLE(toMontgomery(19485874751759354771024239261021720505790618469301721065564631296452457478373n), f1size), ...bigInt2BytesLE(toMontgomery(266929791119991161246907387137283842545076965332900288569378510910307636690n), f1size)]);
	function build_mulNR6() {
		const f = module.addFunction(prefix + "_mulNR6");
		f.addParam("x", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.call(f2mPrefix + "_mul", c.i32_const(pNonResidueF6), c.getLocal("x"), c.getLocal("pr")));
	}
	build_mulNR6();
	const f6mPrefix = buildF3m(module, prefix + "_mulNR6", "f6m", "f2m");
	function build_mulNR12() {
		const f = module.addFunction(prefix + "_mulNR12");
		f.addParam("x", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.call(f2mPrefix + "_mul", c.i32_const(pNonResidueF6), c.i32_add(c.getLocal("x"), c.i32_const(n8 * 4)), c.getLocal("pr")), c.call(f2mPrefix + "_copy", c.getLocal("x"), c.i32_add(c.getLocal("pr"), c.i32_const(n8 * 2))), c.call(f2mPrefix + "_copy", c.i32_add(c.getLocal("x"), c.i32_const(n8 * 2)), c.i32_add(c.getLocal("pr"), c.i32_const(n8 * 4))));
	}
	build_mulNR12();
	const ftmPrefix = buildF2m(module, prefix + "_mulNR12", "ftm", f6mPrefix);
	const ateLoopBitBytes = bits(29793968203157093288n);
	const pAteLoopBitBytes = module.alloc(ateLoopBitBytes);
	const ateCoefSize = 3 * f2size;
	const ateNDblCoefs = ateLoopBitBytes.length - 1;
	const ateNCoefs = ateLoopBitBytes.reduce((acc, b) => acc + (b != 0 ? 1 : 0), 0) + ateNDblCoefs + 1;
	const prePSize = 6 * n8;
	const preQSize = 3 * n8 * 2 + ateNCoefs * ateCoefSize;
	module.modules[prefix] = {
		n64,
		pG1gen,
		pG1zero,
		pG1b,
		pG2gen,
		pG2zero,
		pG2b,
		pq: module.modules["f1m"].pq,
		pr,
		pOneT,
		prePSize,
		preQSize,
		r: r.toString(),
		q: q.toString()
	};
	const finalExpZ = 4965661367192848881n;
	function naf(n) {
		let E = n;
		const res = [];
		while (E > 0n) {
			if (isOdd(E)) {
				const z = 2 - Number(E % 4n);
				res.push(z);
				E = E - BigInt(z);
			} else res.push(0);
			E = E >> 1n;
		}
		return res;
	}
	function bits(n) {
		let E = n;
		const res = [];
		while (E > 0n) {
			if (isOdd(E)) res.push(1);
			else res.push(0);
			E = E >> 1n;
		}
		return res;
	}
	function buildPrepareG1() {
		const f = module.addFunction(prefix + "_prepareG1");
		f.addParam("pP", "i32");
		f.addParam("ppreP", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.call(g1mPrefix + "_normalize", c.getLocal("pP"), c.getLocal("ppreP")));
	}
	function buildPrepAddStep() {
		const f = module.addFunction(prefix + "_prepAddStep");
		f.addParam("pQ", "i32");
		f.addParam("pR", "i32");
		f.addParam("pCoef", "i32");
		const c = f.getCodeBuilder();
		const X2 = c.getLocal("pQ");
		const Y2 = c.i32_add(c.getLocal("pQ"), c.i32_const(f2size));
		const X1 = c.getLocal("pR");
		const Y1 = c.i32_add(c.getLocal("pR"), c.i32_const(f2size));
		const Z1 = c.i32_add(c.getLocal("pR"), c.i32_const(2 * f2size));
		const ELL_0 = c.getLocal("pCoef");
		const ELL_VW = c.i32_add(c.getLocal("pCoef"), c.i32_const(f2size));
		const ELL_VV = c.i32_add(c.getLocal("pCoef"), c.i32_const(2 * f2size));
		const D = ELL_VW;
		const E = c.i32_const(module.alloc(f2size));
		const F = c.i32_const(module.alloc(f2size));
		const G = c.i32_const(module.alloc(f2size));
		const H = c.i32_const(module.alloc(f2size));
		const I = c.i32_const(module.alloc(f2size));
		const J = c.i32_const(module.alloc(f2size));
		const AUX = c.i32_const(module.alloc(f2size));
		f.addCode(c.call(f2mPrefix + "_mul", X2, Z1, D), c.call(f2mPrefix + "_sub", X1, D, D), c.call(f2mPrefix + "_mul", Y2, Z1, E), c.call(f2mPrefix + "_sub", Y1, E, E), c.call(f2mPrefix + "_square", D, F), c.call(f2mPrefix + "_square", E, G), c.call(f2mPrefix + "_mul", D, F, H), c.call(f2mPrefix + "_mul", X1, F, I), c.call(f2mPrefix + "_add", I, I, AUX), c.call(f2mPrefix + "_mul", Z1, G, J), c.call(f2mPrefix + "_add", H, J, J), c.call(f2mPrefix + "_sub", J, AUX, J), c.call(f2mPrefix + "_mul", D, J, X1), c.call(f2mPrefix + "_mul", H, Y1, Y1), c.call(f2mPrefix + "_sub", I, J, AUX), c.call(f2mPrefix + "_mul", E, AUX, AUX), c.call(f2mPrefix + "_sub", AUX, Y1, Y1), c.call(f2mPrefix + "_mul", Z1, H, Z1), c.call(f2mPrefix + "_mul", D, Y2, AUX), c.call(f2mPrefix + "_mul", E, X2, ELL_0), c.call(f2mPrefix + "_sub", ELL_0, AUX, ELL_0), c.call(f2mPrefix + "_mul", ELL_0, c.i32_const(pAltBn128Twist), ELL_0), c.call(f2mPrefix + "_neg", E, ELL_VV));
	}
	function buildPrepDoubleStep() {
		const f = module.addFunction(prefix + "_prepDblStep");
		f.addParam("pR", "i32");
		f.addParam("pCoef", "i32");
		const c = f.getCodeBuilder();
		const X1 = c.getLocal("pR");
		const Y1 = c.i32_add(c.getLocal("pR"), c.i32_const(f2size));
		const Z1 = c.i32_add(c.getLocal("pR"), c.i32_const(2 * f2size));
		const ELL_0 = c.getLocal("pCoef");
		const ELL_VW = c.i32_add(c.getLocal("pCoef"), c.i32_const(f2size));
		const ELL_VV = c.i32_add(c.getLocal("pCoef"), c.i32_const(2 * f2size));
		const A = c.i32_const(module.alloc(f2size));
		const B = c.i32_const(module.alloc(f2size));
		const C = c.i32_const(module.alloc(f2size));
		const D = c.i32_const(module.alloc(f2size));
		const E = c.i32_const(module.alloc(f2size));
		const F = c.i32_const(module.alloc(f2size));
		const G = c.i32_const(module.alloc(f2size));
		const H = c.i32_const(module.alloc(f2size));
		const I = c.i32_const(module.alloc(f2size));
		const J = c.i32_const(module.alloc(f2size));
		const E2 = c.i32_const(module.alloc(f2size));
		const AUX = c.i32_const(module.alloc(f2size));
		f.addCode(c.call(f2mPrefix + "_mul", Y1, c.i32_const(pTwoInv), A), c.call(f2mPrefix + "_mul", X1, A, A), c.call(f2mPrefix + "_square", Y1, B), c.call(f2mPrefix + "_square", Z1, C), c.call(f2mPrefix + "_add", C, C, D), c.call(f2mPrefix + "_add", D, C, D), c.call(f2mPrefix + "_mul", c.i32_const(pTwistCoefB), D, E), c.call(f2mPrefix + "_add", E, E, F), c.call(f2mPrefix + "_add", E, F, F), c.call(f2mPrefix + "_add", B, F, G), c.call(f2mPrefix + "_mul", G, c.i32_const(pTwoInv), G), c.call(f2mPrefix + "_add", B, C, AUX), c.call(f2mPrefix + "_add", Y1, Z1, H), c.call(f2mPrefix + "_square", H, H), c.call(f2mPrefix + "_sub", H, AUX, H), c.call(f2mPrefix + "_sub", E, B, I), c.call(f2mPrefix + "_square", X1, J), c.call(f2mPrefix + "_square", E, E2), c.call(f2mPrefix + "_sub", B, F, AUX), c.call(f2mPrefix + "_mul", A, AUX, X1), c.call(f2mPrefix + "_add", E2, E2, AUX), c.call(f2mPrefix + "_add", E2, AUX, AUX), c.call(f2mPrefix + "_square", G, Y1), c.call(f2mPrefix + "_sub", Y1, AUX, Y1), c.call(f2mPrefix + "_mul", B, H, Z1), c.call(f2mPrefix + "_mul", c.i32_const(pAltBn128Twist), I, ELL_0), c.call(f2mPrefix + "_neg", H, ELL_VW), c.call(f2mPrefix + "_add", J, J, ELL_VV), c.call(f2mPrefix + "_add", J, ELL_VV, ELL_VV));
	}
	function buildMulByQ() {
		const f = module.addFunction(prefix + "_mulByQ");
		f.addParam("p1", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		const x = c.getLocal("p1");
		const y = c.i32_add(c.getLocal("p1"), c.i32_const(f2size));
		const z = c.i32_add(c.getLocal("p1"), c.i32_const(f2size * 2));
		const x3 = c.getLocal("pr");
		const y3 = c.i32_add(c.getLocal("pr"), c.i32_const(f2size));
		const z3 = c.i32_add(c.getLocal("pr"), c.i32_const(f2size * 2));
		const MulByQX = c.i32_const(module.alloc([...bigInt2BytesLE(toMontgomery("21575463638280843010398324269430826099269044274347216827212613867836435027261"), f1size), ...bigInt2BytesLE(toMontgomery("10307601595873709700152284273816112264069230130616436755625194854815875713954"), f1size)]));
		const MulByQY = c.i32_const(module.alloc([...bigInt2BytesLE(toMontgomery("2821565182194536844548159561693502659359617185244120367078079554186484126554"), f1size), ...bigInt2BytesLE(toMontgomery("3505843767911556378687030309984248845540243509899259641013678093033130930403"), f1size)]));
		f.addCode(c.call(f2mPrefix + "_conjugate", x, x3), c.call(f2mPrefix + "_mul", MulByQX, x3, x3), c.call(f2mPrefix + "_conjugate", y, y3), c.call(f2mPrefix + "_mul", MulByQY, y3, y3), c.call(f2mPrefix + "_conjugate", z, z3));
	}
	function buildPrepareG2() {
		buildMulByQ();
		const f = module.addFunction(prefix + "_prepareG2");
		f.addParam("pQ", "i32");
		f.addParam("ppreQ", "i32");
		f.addLocal("pCoef", "i32");
		f.addLocal("i", "i32");
		const c = f.getCodeBuilder();
		const QX = c.getLocal("pQ");
		const pR = module.alloc(f2size * 3);
		const R = c.i32_const(pR);
		const RX = c.i32_const(pR);
		const RY = c.i32_const(pR + f2size);
		const RZ = c.i32_const(pR + 2 * f2size);
		const cQX = c.i32_add(c.getLocal("ppreQ"), c.i32_const(0));
		const cQY = c.i32_add(c.getLocal("ppreQ"), c.i32_const(f2size));
		const pQ1 = module.alloc(f2size * 3);
		const Q1 = c.i32_const(pQ1);
		const pQ2 = module.alloc(f2size * 3);
		const Q2 = c.i32_const(pQ2);
		const Q2Y = c.i32_const(pQ2 + f2size);
		f.addCode(c.call(g2mPrefix + "_normalize", QX, cQX), c.call(f2mPrefix + "_copy", cQX, RX), c.call(f2mPrefix + "_copy", cQY, RY), c.call(f2mPrefix + "_one", RZ));
		f.addCode(c.setLocal("pCoef", c.i32_add(c.getLocal("ppreQ"), c.i32_const(f2size * 3))), c.setLocal("i", c.i32_const(ateLoopBitBytes.length - 2)), c.block(c.loop(c.call(prefix + "_prepDblStep", R, c.getLocal("pCoef")), c.setLocal("pCoef", c.i32_add(c.getLocal("pCoef"), c.i32_const(ateCoefSize))), c.if(c.i32_load8_s(c.getLocal("i"), pAteLoopBitBytes), [...c.call(prefix + "_prepAddStep", cQX, R, c.getLocal("pCoef")), ...c.setLocal("pCoef", c.i32_add(c.getLocal("pCoef"), c.i32_const(ateCoefSize)))]), c.br_if(1, c.i32_eqz(c.getLocal("i"))), c.setLocal("i", c.i32_sub(c.getLocal("i"), c.i32_const(1))), c.br(0))));
		f.addCode(c.call(prefix + "_mulByQ", cQX, Q1), c.call(prefix + "_mulByQ", Q1, Q2));
		f.addCode(c.call(f2mPrefix + "_neg", Q2Y, Q2Y), c.call(prefix + "_prepAddStep", Q1, R, c.getLocal("pCoef")), c.setLocal("pCoef", c.i32_add(c.getLocal("pCoef"), c.i32_const(ateCoefSize))), c.call(prefix + "_prepAddStep", Q2, R, c.getLocal("pCoef")), c.setLocal("pCoef", c.i32_add(c.getLocal("pCoef"), c.i32_const(ateCoefSize))));
	}
	function buildMulBy024Old() {
		const f = module.addFunction(prefix + "__mulBy024Old");
		f.addParam("pEll0", "i32");
		f.addParam("pEllVW", "i32");
		f.addParam("pEllVV", "i32");
		f.addParam("pR", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("pEll0");
		const x2 = c.getLocal("pEllVV");
		const x4 = c.getLocal("pEllVW");
		const z0 = c.getLocal("pR");
		const pAUX12 = module.alloc(ftsize);
		const AUX12 = c.i32_const(pAUX12);
		const AUX12_0 = c.i32_const(pAUX12);
		const AUX12_2 = c.i32_const(pAUX12 + f2size);
		const AUX12_4 = c.i32_const(pAUX12 + f2size * 2);
		const AUX12_6 = c.i32_const(pAUX12 + f2size * 3);
		const AUX12_8 = c.i32_const(pAUX12 + f2size * 4);
		const AUX12_10 = c.i32_const(pAUX12 + f2size * 5);
		f.addCode(c.call(f2mPrefix + "_copy", x0, AUX12_0), c.call(f2mPrefix + "_zero", AUX12_2), c.call(f2mPrefix + "_copy", x2, AUX12_4), c.call(f2mPrefix + "_zero", AUX12_6), c.call(f2mPrefix + "_copy", x4, AUX12_8), c.call(f2mPrefix + "_zero", AUX12_10), c.call(ftmPrefix + "_mul", AUX12, z0, z0));
	}
	function buildMulBy024() {
		const f = module.addFunction(prefix + "__mulBy024");
		f.addParam("pEll0", "i32");
		f.addParam("pEllVW", "i32");
		f.addParam("pEllVV", "i32");
		f.addParam("pR", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("pEll0");
		const x2 = c.getLocal("pEllVV");
		const x4 = c.getLocal("pEllVW");
		const z0 = c.getLocal("pR");
		const z1 = c.i32_add(c.getLocal("pR"), c.i32_const(2 * n8));
		const z2 = c.i32_add(c.getLocal("pR"), c.i32_const(4 * n8));
		const z3 = c.i32_add(c.getLocal("pR"), c.i32_const(6 * n8));
		const z4 = c.i32_add(c.getLocal("pR"), c.i32_const(8 * n8));
		const z5 = c.i32_add(c.getLocal("pR"), c.i32_const(10 * n8));
		const t0 = c.i32_const(module.alloc(f2size));
		const t1 = c.i32_const(module.alloc(f2size));
		const t2 = c.i32_const(module.alloc(f2size));
		const s0 = c.i32_const(module.alloc(f2size));
		const T3 = c.i32_const(module.alloc(f2size));
		const T4 = c.i32_const(module.alloc(f2size));
		const D0 = c.i32_const(module.alloc(f2size));
		const D2 = c.i32_const(module.alloc(f2size));
		const D4 = c.i32_const(module.alloc(f2size));
		const S1 = c.i32_const(module.alloc(f2size));
		const AUX = c.i32_const(module.alloc(f2size));
		f.addCode(c.call(f2mPrefix + "_mul", z0, x0, D0), c.call(f2mPrefix + "_mul", z2, x2, D2), c.call(f2mPrefix + "_mul", z4, x4, D4), c.call(f2mPrefix + "_add", z0, z4, t2), c.call(f2mPrefix + "_add", z0, z2, t1), c.call(f2mPrefix + "_add", z1, z3, s0), c.call(f2mPrefix + "_add", s0, z5, s0), c.call(f2mPrefix + "_mul", z1, x2, S1), c.call(f2mPrefix + "_add", S1, D4, T3), c.call(f2mPrefix + "_mul", c.i32_const(pNonResidueF6), T3, T4), c.call(f2mPrefix + "_add", T4, D0, z0), c.call(f2mPrefix + "_mul", z5, x4, T3), c.call(f2mPrefix + "_add", S1, T3, S1), c.call(f2mPrefix + "_add", T3, D2, T3), c.call(f2mPrefix + "_mul", c.i32_const(pNonResidueF6), T3, T4), c.call(f2mPrefix + "_mul", z1, x0, T3), c.call(f2mPrefix + "_add", S1, T3, S1), c.call(f2mPrefix + "_add", T4, T3, z1), c.call(f2mPrefix + "_add", x0, x2, t0), c.call(f2mPrefix + "_mul", t1, t0, T3), c.call(f2mPrefix + "_add", D0, D2, AUX), c.call(f2mPrefix + "_sub", T3, AUX, T3), c.call(f2mPrefix + "_mul", z3, x4, T4), c.call(f2mPrefix + "_add", S1, T4, S1), c.call(f2mPrefix + "_add", z2, z4, t0), c.call(f2mPrefix + "_add", T3, T4, z2), c.call(f2mPrefix + "_add", x2, x4, t1), c.call(f2mPrefix + "_mul", t1, t0, T3), c.call(f2mPrefix + "_add", D2, D4, AUX), c.call(f2mPrefix + "_sub", T3, AUX, T3), c.call(f2mPrefix + "_mul", c.i32_const(pNonResidueF6), T3, T4), c.call(f2mPrefix + "_mul", z3, x0, T3), c.call(f2mPrefix + "_add", S1, T3, S1), c.call(f2mPrefix + "_add", T4, T3, z3), c.call(f2mPrefix + "_mul", z5, x2, T3), c.call(f2mPrefix + "_add", S1, T3, S1), c.call(f2mPrefix + "_mul", c.i32_const(pNonResidueF6), T3, T4), c.call(f2mPrefix + "_add", x0, x4, t0), c.call(f2mPrefix + "_mul", t2, t0, T3), c.call(f2mPrefix + "_add", D0, D4, AUX), c.call(f2mPrefix + "_sub", T3, AUX, T3), c.call(f2mPrefix + "_add", T4, T3, z4), c.call(f2mPrefix + "_add", x0, x2, t0), c.call(f2mPrefix + "_add", t0, x4, t0), c.call(f2mPrefix + "_mul", s0, t0, T3), c.call(f2mPrefix + "_sub", T3, S1, z5));
	}
	function buildMillerLoop() {
		const f = module.addFunction(prefix + "_millerLoop");
		f.addParam("ppreP", "i32");
		f.addParam("ppreQ", "i32");
		f.addParam("r", "i32");
		f.addLocal("pCoef", "i32");
		f.addLocal("i", "i32");
		const c = f.getCodeBuilder();
		const preP_PX = c.getLocal("ppreP");
		const preP_PY = c.i32_add(c.getLocal("ppreP"), c.i32_const(f1size));
		const ELL_0 = c.getLocal("pCoef");
		const ELL_VW = c.i32_add(c.getLocal("pCoef"), c.i32_const(f2size));
		const ELL_VV = c.i32_add(c.getLocal("pCoef"), c.i32_const(2 * f2size));
		const pVW = module.alloc(f2size);
		const VW = c.i32_const(pVW);
		const pVV = module.alloc(f2size);
		const VV = c.i32_const(pVV);
		const F = c.getLocal("r");
		f.addCode(c.call(ftmPrefix + "_one", F), c.setLocal("pCoef", c.i32_add(c.getLocal("ppreQ"), c.i32_const(f2size * 3))), c.setLocal("i", c.i32_const(ateLoopBitBytes.length - 2)), c.block(c.loop(c.call(ftmPrefix + "_square", F, F), c.call(f2mPrefix + "_mul1", ELL_VW, preP_PY, VW), c.call(f2mPrefix + "_mul1", ELL_VV, preP_PX, VV), c.call(prefix + "__mulBy024", ELL_0, VW, VV, F), c.setLocal("pCoef", c.i32_add(c.getLocal("pCoef"), c.i32_const(ateCoefSize))), c.if(c.i32_load8_s(c.getLocal("i"), pAteLoopBitBytes), [
			...c.call(f2mPrefix + "_mul1", ELL_VW, preP_PY, VW),
			...c.call(f2mPrefix + "_mul1", ELL_VV, preP_PX, VV),
			...c.call(prefix + "__mulBy024", ELL_0, VW, VV, F),
			...c.setLocal("pCoef", c.i32_add(c.getLocal("pCoef"), c.i32_const(ateCoefSize)))
		]), c.br_if(1, c.i32_eqz(c.getLocal("i"))), c.setLocal("i", c.i32_sub(c.getLocal("i"), c.i32_const(1))), c.br(0))));
		f.addCode(c.call(f2mPrefix + "_mul1", ELL_VW, preP_PY, VW), c.call(f2mPrefix + "_mul1", ELL_VV, preP_PX, VV), c.call(prefix + "__mulBy024", ELL_0, VW, VV, F), c.setLocal("pCoef", c.i32_add(c.getLocal("pCoef"), c.i32_const(ateCoefSize))), c.call(f2mPrefix + "_mul1", ELL_VW, preP_PY, VW), c.call(f2mPrefix + "_mul1", ELL_VV, preP_PX, VV), c.call(prefix + "__mulBy024", ELL_0, VW, VV, F), c.setLocal("pCoef", c.i32_add(c.getLocal("pCoef"), c.i32_const(ateCoefSize))));
	}
	function buildFrobeniusMap(n) {
		const F12 = [[
			[1n, 0n],
			[1n, 0n],
			[1n, 0n],
			[1n, 0n],
			[1n, 0n],
			[1n, 0n],
			[1n, 0n],
			[1n, 0n],
			[1n, 0n],
			[1n, 0n],
			[1n, 0n],
			[1n, 0n]
		], [
			[1n, 0n],
			[8376118865763821496583973867626364092589906065868298776909617916018768340080n, 16469823323077808223889137241176536799009286646108169935659301613961712198316n],
			[21888242871839275220042445260109153167277707414472061641714758635765020556617n, 0n],
			[11697423496358154304825782922584725312912383441159505038794027105778954184319n, 303847389135065887422783454877609941456349188919719272345083954437860409601n],
			[21888242871839275220042445260109153167277707414472061641714758635765020556616n, 0n],
			[3321304630594332808241809054958361220322477375291206261884409189760185844239n, 5722266937896532885780051958958348231143373700109372999374820235121374419868n],
			[21888242871839275222246405745257275088696311157297823662689037894645226208582n, 0n],
			[13512124006075453725662431877630910996106405091429524885779419978626457868503n, 5418419548761466998357268504080738289687024511189653727029736280683514010267n],
			[2203960485148121921418603742825762020974279258880205651966n, 0n],
			[10190819375481120917420622822672549775783927716138318623895010788866272024264n, 21584395482704209334823622290379665147239961968378104390343953940207365798982n],
			[2203960485148121921418603742825762020974279258880205651967n, 0n],
			[18566938241244942414004596690298913868373833782006617400804628704885040364344n, 16165975933942742336466353786298926857552937457188450663314217659523851788715n]
		]];
		const F6 = [
			[
				[1n, 0n],
				[1n, 0n],
				[1n, 0n],
				[1n, 0n],
				[1n, 0n],
				[1n, 0n]
			],
			[
				[1n, 0n],
				[21575463638280843010398324269430826099269044274347216827212613867836435027261n, 10307601595873709700152284273816112264069230130616436755625194854815875713954n],
				[21888242871839275220042445260109153167277707414472061641714758635765020556616n, 0n],
				[3772000881919853776433695186713858239009073593817195771773381919316419345261n, 2236595495967245188281701248203181795121068902605861227855261137820944008926n],
				[2203960485148121921418603742825762020974279258880205651966n, 0n],
				[18429021223477853657660792034369865839114504446431234726392080002137598044644n, 9344045779998320333812420223237981029506012124075525679208581902008406485703n]
			],
			[
				[1n, 0n],
				[2581911344467009335267311115468803099551665605076196740867805258568234346338n, 19937756971775647987995932169929341994314640652964949448313374472400716661030n],
				[2203960485148121921418603742825762020974279258880205651966n, 0n],
				[5324479202449903542726783395506214481928257762400643279780343368557297135718n, 16208900380737693084919495127334387981393726419856888799917914180988844123039n],
				[21888242871839275220042445260109153167277707414472061641714758635765020556616n, 0n],
				[13981852324922362344252311234282257507216387789820983642040889267519694726527n, 7629828391165209371577384193250820201684255241773809077146787135900891633097n]
			]
		];
		const f = module.addFunction(prefix + "__frobeniusMap" + n);
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		for (let i = 0; i < 6; i++) {
			const X = i == 0 ? c.getLocal("x") : c.i32_add(c.getLocal("x"), c.i32_const(i * f2size));
			const Xc0 = X;
			const Xc1 = c.i32_add(c.getLocal("x"), c.i32_const(i * f2size + f1size));
			const R = i == 0 ? c.getLocal("r") : c.i32_add(c.getLocal("r"), c.i32_const(i * f2size));
			const Rc0 = R;
			const Rc1 = c.i32_add(c.getLocal("r"), c.i32_const(i * f2size + f1size));
			const coef = mul2(F12[Math.floor(i / 3)][n % 12], F6[i % 3][n % 6]);
			const pCoef = module.alloc([...bigInt2BytesLE(toMontgomery(coef[0]), 32), ...bigInt2BytesLE(toMontgomery(coef[1]), 32)]);
			if (n % 2 == 1) f.addCode(c.call(f1mPrefix + "_copy", Xc0, Rc0), c.call(f1mPrefix + "_neg", Xc1, Rc1), c.call(f2mPrefix + "_mul", R, c.i32_const(pCoef), R));
			else f.addCode(c.call(f2mPrefix + "_mul", X, c.i32_const(pCoef), R));
		}
		function mul2(a, b) {
			const ac0 = BigInt(a[0]);
			const ac1 = BigInt(a[1]);
			const bc0 = BigInt(b[0]);
			const bc1 = BigInt(b[1]);
			const res = [(ac0 * bc0 - ac1 * bc1) % q, (ac0 * bc1 + ac1 * bc0) % q];
			if (isNegative(res[0])) res[0] = res[0] + q;
			return res;
		}
	}
	function buildFinalExponentiationFirstChunk() {
		const f = module.addFunction(prefix + "__finalExponentiationFirstChunk");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const elt = c.getLocal("x");
		const eltC0 = elt;
		const eltC1 = c.i32_add(elt, c.i32_const(n8 * 6));
		const r = c.getLocal("r");
		const pA = module.alloc(ftsize);
		const A = c.i32_const(pA);
		const Ac0 = A;
		const Ac1 = c.i32_const(pA + n8 * 6);
		const B = c.i32_const(module.alloc(ftsize));
		const C = c.i32_const(module.alloc(ftsize));
		const D = c.i32_const(module.alloc(ftsize));
		f.addCode(c.call(f6mPrefix + "_copy", eltC0, Ac0), c.call(f6mPrefix + "_neg", eltC1, Ac1), c.call(ftmPrefix + "_inverse", elt, B), c.call(ftmPrefix + "_mul", A, B, C), c.call(prefix + "__frobeniusMap2", C, D), c.call(ftmPrefix + "_mul", C, D, r));
	}
	function buildCyclotomicSquare() {
		const f = module.addFunction(prefix + "__cyclotomicSquare");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x4 = c.i32_add(c.getLocal("x"), c.i32_const(f2size));
		const x3 = c.i32_add(c.getLocal("x"), c.i32_const(2 * f2size));
		const x2 = c.i32_add(c.getLocal("x"), c.i32_const(3 * f2size));
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(4 * f2size));
		const x5 = c.i32_add(c.getLocal("x"), c.i32_const(5 * f2size));
		const r0 = c.getLocal("r");
		const r4 = c.i32_add(c.getLocal("r"), c.i32_const(f2size));
		const r3 = c.i32_add(c.getLocal("r"), c.i32_const(2 * f2size));
		const r2 = c.i32_add(c.getLocal("r"), c.i32_const(3 * f2size));
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(4 * f2size));
		const r5 = c.i32_add(c.getLocal("r"), c.i32_const(5 * f2size));
		const t0 = c.i32_const(module.alloc(f2size));
		const t1 = c.i32_const(module.alloc(f2size));
		const t2 = c.i32_const(module.alloc(f2size));
		const t3 = c.i32_const(module.alloc(f2size));
		const t4 = c.i32_const(module.alloc(f2size));
		const t5 = c.i32_const(module.alloc(f2size));
		const tmp = c.i32_const(module.alloc(f2size));
		const AUX = c.i32_const(module.alloc(f2size));
		f.addCode(c.call(f2mPrefix + "_mul", x0, x1, tmp), c.call(f2mPrefix + "_mul", x1, c.i32_const(pNonResidueF6), t0), c.call(f2mPrefix + "_add", x0, t0, t0), c.call(f2mPrefix + "_add", x0, x1, AUX), c.call(f2mPrefix + "_mul", AUX, t0, t0), c.call(f2mPrefix + "_mul", c.i32_const(pNonResidueF6), tmp, AUX), c.call(f2mPrefix + "_add", tmp, AUX, AUX), c.call(f2mPrefix + "_sub", t0, AUX, t0), c.call(f2mPrefix + "_add", tmp, tmp, t1), c.call(f2mPrefix + "_mul", x2, x3, tmp), c.call(f2mPrefix + "_mul", x3, c.i32_const(pNonResidueF6), t2), c.call(f2mPrefix + "_add", x2, t2, t2), c.call(f2mPrefix + "_add", x2, x3, AUX), c.call(f2mPrefix + "_mul", AUX, t2, t2), c.call(f2mPrefix + "_mul", c.i32_const(pNonResidueF6), tmp, AUX), c.call(f2mPrefix + "_add", tmp, AUX, AUX), c.call(f2mPrefix + "_sub", t2, AUX, t2), c.call(f2mPrefix + "_add", tmp, tmp, t3), c.call(f2mPrefix + "_mul", x4, x5, tmp), c.call(f2mPrefix + "_mul", x5, c.i32_const(pNonResidueF6), t4), c.call(f2mPrefix + "_add", x4, t4, t4), c.call(f2mPrefix + "_add", x4, x5, AUX), c.call(f2mPrefix + "_mul", AUX, t4, t4), c.call(f2mPrefix + "_mul", c.i32_const(pNonResidueF6), tmp, AUX), c.call(f2mPrefix + "_add", tmp, AUX, AUX), c.call(f2mPrefix + "_sub", t4, AUX, t4), c.call(f2mPrefix + "_add", tmp, tmp, t5), c.call(f2mPrefix + "_sub", t0, x0, r0), c.call(f2mPrefix + "_add", r0, r0, r0), c.call(f2mPrefix + "_add", t0, r0, r0), c.call(f2mPrefix + "_add", t1, x1, r1), c.call(f2mPrefix + "_add", r1, r1, r1), c.call(f2mPrefix + "_add", t1, r1, r1), c.call(f2mPrefix + "_mul", t5, c.i32_const(pAltBn128Twist), AUX), c.call(f2mPrefix + "_add", AUX, x2, r2), c.call(f2mPrefix + "_add", r2, r2, r2), c.call(f2mPrefix + "_add", AUX, r2, r2), c.call(f2mPrefix + "_sub", t4, x3, r3), c.call(f2mPrefix + "_add", r3, r3, r3), c.call(f2mPrefix + "_add", t4, r3, r3), c.call(f2mPrefix + "_sub", t2, x4, r4), c.call(f2mPrefix + "_add", r4, r4, r4), c.call(f2mPrefix + "_add", t2, r4, r4), c.call(f2mPrefix + "_add", t3, x5, r5), c.call(f2mPrefix + "_add", r5, r5, r5), c.call(f2mPrefix + "_add", t3, r5, r5));
	}
	function buildCyclotomicExp(exponent, fnName) {
		const exponentNafBytes = naf(exponent).map((b) => b == -1 ? 255 : b);
		const pExponentNafBytes = module.alloc(exponentNafBytes);
		const f = module.addFunction(prefix + "__cyclotomicExp_" + fnName);
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		f.addLocal("bit", "i32");
		f.addLocal("i", "i32");
		const c = f.getCodeBuilder();
		const x = c.getLocal("x");
		const res = c.getLocal("r");
		const inverse = c.i32_const(module.alloc(ftsize));
		f.addCode(c.call(ftmPrefix + "_conjugate", x, inverse), c.call(ftmPrefix + "_one", res), c.if(c.teeLocal("bit", c.i32_load8_s(c.i32_const(exponentNafBytes.length - 1), pExponentNafBytes)), c.if(c.i32_eq(c.getLocal("bit"), c.i32_const(1)), c.call(ftmPrefix + "_mul", res, x, res), c.call(ftmPrefix + "_mul", res, inverse, res))), c.setLocal("i", c.i32_const(exponentNafBytes.length - 2)), c.block(c.loop(c.call(prefix + "__cyclotomicSquare", res, res), c.if(c.teeLocal("bit", c.i32_load8_s(c.getLocal("i"), pExponentNafBytes)), c.if(c.i32_eq(c.getLocal("bit"), c.i32_const(1)), c.call(ftmPrefix + "_mul", res, x, res), c.call(ftmPrefix + "_mul", res, inverse, res))), c.br_if(1, c.i32_eqz(c.getLocal("i"))), c.setLocal("i", c.i32_sub(c.getLocal("i"), c.i32_const(1))), c.br(0))));
	}
	function buildFinalExponentiationLastChunk() {
		buildCyclotomicSquare();
		buildCyclotomicExp(finalExpZ, "w0");
		const f = module.addFunction(prefix + "__finalExponentiationLastChunk");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const elt = c.getLocal("x");
		const result = c.getLocal("r");
		const A = c.i32_const(module.alloc(ftsize));
		const B = c.i32_const(module.alloc(ftsize));
		const C = c.i32_const(module.alloc(ftsize));
		const D = c.i32_const(module.alloc(ftsize));
		const E = c.i32_const(module.alloc(ftsize));
		const F = c.i32_const(module.alloc(ftsize));
		const G = c.i32_const(module.alloc(ftsize));
		const H = c.i32_const(module.alloc(ftsize));
		const I = c.i32_const(module.alloc(ftsize));
		const J = c.i32_const(module.alloc(ftsize));
		const K = c.i32_const(module.alloc(ftsize));
		const L = c.i32_const(module.alloc(ftsize));
		const M = c.i32_const(module.alloc(ftsize));
		const N = c.i32_const(module.alloc(ftsize));
		const O = c.i32_const(module.alloc(ftsize));
		const P = c.i32_const(module.alloc(ftsize));
		const Q = c.i32_const(module.alloc(ftsize));
		const R = c.i32_const(module.alloc(ftsize));
		const S = c.i32_const(module.alloc(ftsize));
		const T = c.i32_const(module.alloc(ftsize));
		const U = c.i32_const(module.alloc(ftsize));
		f.addCode(c.call(prefix + "__cyclotomicExp_w0", elt, A), c.call(ftmPrefix + "_conjugate", A, A), c.call(prefix + "__cyclotomicSquare", A, B), c.call(prefix + "__cyclotomicSquare", B, C), c.call(ftmPrefix + "_mul", C, B, D), c.call(prefix + "__cyclotomicExp_w0", D, E), c.call(ftmPrefix + "_conjugate", E, E), c.call(prefix + "__cyclotomicSquare", E, F), c.call(prefix + "__cyclotomicExp_w0", F, G), c.call(ftmPrefix + "_conjugate", G, G), c.call(ftmPrefix + "_conjugate", D, H), c.call(ftmPrefix + "_conjugate", G, I), c.call(ftmPrefix + "_mul", I, E, J), c.call(ftmPrefix + "_mul", J, H, K), c.call(ftmPrefix + "_mul", K, B, L), c.call(ftmPrefix + "_mul", K, E, M), c.call(ftmPrefix + "_mul", M, elt, N), c.call(prefix + "__frobeniusMap1", L, O), c.call(ftmPrefix + "_mul", O, N, P), c.call(prefix + "__frobeniusMap2", K, Q), c.call(ftmPrefix + "_mul", Q, P, R), c.call(ftmPrefix + "_conjugate", elt, S), c.call(ftmPrefix + "_mul", S, L, T), c.call(prefix + "__frobeniusMap3", T, U), c.call(ftmPrefix + "_mul", U, R, result));
	}
	function buildFinalExponentiation() {
		buildFinalExponentiationFirstChunk();
		buildFinalExponentiationLastChunk();
		const f = module.addFunction(prefix + "_finalExponentiation");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const elt = c.getLocal("x");
		const result = c.getLocal("r");
		const eltToFirstChunk = c.i32_const(module.alloc(ftsize));
		f.addCode(c.call(prefix + "__finalExponentiationFirstChunk", elt, eltToFirstChunk), c.call(prefix + "__finalExponentiationLastChunk", eltToFirstChunk, result));
	}
	function buildFinalExponentiationOld() {
		const f = module.addFunction(prefix + "_finalExponentiationOld");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const pExponent = module.alloc(bigInt2BytesLE(552484233613224096312617126783173147097382103762957654188882734314196910839907541213974502761540629817009608548654680343627701153829446747810907373256841551006201639677726139946029199968412598804882391702273019083653272047566316584365559776493027495458238373902875937659943504873220554161550525926302303331747463515644711876653177129578303191095900909191624817826566688241804408081892785725967931714097716709526092261278071952560171111444072049229123565057483750161460024353346284167282452756217662335528813519139808291170539072125381230815729071544861602750936964829313608137325426383735122175229541155376346436093930287402089517426973178917569713384748081827255472576937471496195752727188261435633271238710131736096299798168852925540549342330775279877006784354801422249722573783561685179618816480037695005515426162362431072245638324744480n, 352));
		const c = f.getCodeBuilder();
		f.addCode(c.call(ftmPrefix + "_exp", c.getLocal("x"), c.i32_const(pExponent), c.i32_const(352), c.getLocal("r")));
	}
	const pPreP = module.alloc(prePSize);
	const pPreQ = module.alloc(preQSize);
	function buildPairingEquation(nPairings) {
		const f = module.addFunction(prefix + "_pairingEq" + nPairings);
		for (let i = 0; i < nPairings; i++) {
			f.addParam("p_" + i, "i32");
			f.addParam("q_" + i, "i32");
		}
		f.addParam("c", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		const resT = c.i32_const(module.alloc(ftsize));
		const auxT = c.i32_const(module.alloc(ftsize));
		f.addCode(c.call(ftmPrefix + "_one", resT));
		for (let i = 0; i < nPairings; i++) {
			f.addCode(c.call(prefix + "_prepareG1", c.getLocal("p_" + i), c.i32_const(pPreP)));
			f.addCode(c.call(prefix + "_prepareG2", c.getLocal("q_" + i), c.i32_const(pPreQ)));
			f.addCode(c.call(prefix + "_millerLoop", c.i32_const(pPreP), c.i32_const(pPreQ), auxT));
			f.addCode(c.call(ftmPrefix + "_mul", resT, auxT, resT));
		}
		f.addCode(c.call(prefix + "_finalExponentiation", resT, resT));
		f.addCode(c.call(ftmPrefix + "_eq", resT, c.getLocal("c")));
	}
	function buildPairing() {
		const f = module.addFunction(prefix + "_pairing");
		f.addParam("p", "i32");
		f.addParam("q", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const resT = c.i32_const(module.alloc(ftsize));
		f.addCode(c.call(prefix + "_prepareG1", c.getLocal("p"), c.i32_const(pPreP)));
		f.addCode(c.call(prefix + "_prepareG2", c.getLocal("q"), c.i32_const(pPreQ)));
		f.addCode(c.call(prefix + "_millerLoop", c.i32_const(pPreP), c.i32_const(pPreQ), resT));
		f.addCode(c.call(prefix + "_finalExponentiation", resT, c.getLocal("r")));
	}
	buildPrepAddStep();
	buildPrepDoubleStep();
	buildPrepareG1();
	buildPrepareG2();
	buildMulBy024();
	buildMulBy024Old();
	buildMillerLoop();
	for (let i = 0; i < 10; i++) {
		buildFrobeniusMap(i);
		module.exportFunction(prefix + "__frobeniusMap" + i);
	}
	buildFinalExponentiationOld();
	buildFinalExponentiation();
	for (let i = 1; i <= 5; i++) {
		buildPairingEquation(i);
		module.exportFunction(prefix + "_pairingEq" + i);
	}
	buildPairing();
	module.exportFunction(prefix + "_pairing");
	module.exportFunction(prefix + "_prepareG1");
	module.exportFunction(prefix + "_prepareG2");
	module.exportFunction(prefix + "_millerLoop");
	module.exportFunction(prefix + "_finalExponentiation");
	module.exportFunction(prefix + "_finalExponentiationOld");
	module.exportFunction(prefix + "__mulBy024");
	module.exportFunction(prefix + "__mulBy024Old");
	module.exportFunction(prefix + "__cyclotomicSquare");
	module.exportFunction(prefix + "__cyclotomicExp_w0");
}
//#endregion
//#region src/bls12381/build_bls12381.js
function buildBLS12381(module, _prefix) {
	const prefix = _prefix || "bls12381";
	if (module.modules[prefix]) return prefix;
	const q = 4002409555221667393417789825735904156556882819939007885332058136124031650490837864442687629129015664037894272559787n;
	const r = 52435875175126190479447740508185965837690552500527637822603658699938581184513n;
	const n64q = Math.floor((bitLength(q - 1n) - 1) / 64) + 1;
	const n8q = n64q * 8;
	const f1size = n8q;
	const f2size = f1size * 2;
	const ftsize = f1size * 12;
	const n64r = Math.floor((bitLength(r - 1n) - 1) / 64) + 1;
	const n8r = n64r * 8;
	const frsize = n8r;
	const pr = module.alloc(bigInt2BytesLE(r, frsize));
	const f1mPrefix = buildF1m(module, q, "f1m", "intq");
	buildF1(module, r, "fr", "frm", "intr");
	const pG1b = module.alloc(bigInt2BytesLE(toMontgomery(4n), f1size));
	const g1mPrefix = buildCurve(module, "g1m", "f1m", pG1b);
	buildFFT(module, "frm", "frm", "frm", "frm_mul");
	buildPol(module, "pol", "frm");
	buildQAP(module, "qap", "frm");
	const f2mPrefix = buildF2m(module, "f1m_neg", "f2m", "f1m");
	const pG2b = module.alloc([...bigInt2BytesLE(toMontgomery(4n), f1size), ...bigInt2BytesLE(toMontgomery(4n), f1size)]);
	const g2mPrefix = buildCurve(module, "g2m", "f2m", pG2b);
	function buildGTimesFr(fnName, opMul) {
		const f = module.addFunction(fnName);
		f.addParam("pG", "i32");
		f.addParam("pFr", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		const AUX = c.i32_const(module.alloc(n8r));
		f.addCode(c.call("frm_fromMontgomery", c.getLocal("pFr"), AUX), c.call(opMul, c.getLocal("pG"), AUX, c.i32_const(n8r), c.getLocal("pr")));
		module.exportFunction(fnName);
	}
	buildGTimesFr("g1m_timesFr", "g1m_timesScalar");
	buildFFT(module, "g1m", "g1m", "frm", "g1m_timesFr");
	buildGTimesFr("g2m_timesFr", "g2m_timesScalar");
	buildFFT(module, "g2m", "g2m", "frm", "g2m_timesFr");
	buildGTimesFr("g1m_timesFrAffine", "g1m_timesScalarAffine");
	buildGTimesFr("g2m_timesFrAffine", "g2m_timesScalarAffine");
	buildApplyKey(module, "frm_batchApplyKey", "fmr", "frm", n8r, n8r, n8r, "frm_mul");
	buildApplyKey(module, "g1m_batchApplyKey", "g1m", "frm", n8q * 3, n8q * 3, n8r, "g1m_timesFr");
	buildApplyKey(module, "g1m_batchApplyKeyMixed", "g1m", "frm", n8q * 2, n8q * 3, n8r, "g1m_timesFrAffine");
	buildApplyKey(module, "g2m_batchApplyKey", "g2m", "frm", n8q * 2 * 3, n8q * 3 * 2, n8r, "g2m_timesFr");
	buildApplyKey(module, "g2m_batchApplyKeyMixed", "g2m", "frm", n8q * 2 * 2, n8q * 3 * 2, n8r, "g2m_timesFrAffine");
	function toMontgomery(a) {
		return BigInt(a) * (1n << BigInt(f1size * 8)) % q;
	}
	const G1gen = [
		3685416753713387016781088315183077757961620795782546409894578378688607592378376318836054947676345821548104185464507n,
		1339506544944476473020471379941921221584933875938349620426543736416511423956333506472724655353366534992391756441569n,
		1n
	];
	const pG1gen = module.alloc([
		...bigInt2BytesLE(toMontgomery(G1gen[0]), f1size),
		...bigInt2BytesLE(toMontgomery(G1gen[1]), f1size),
		...bigInt2BytesLE(toMontgomery(G1gen[2]), f1size)
	]);
	const G1zero = [
		0n,
		1n,
		0n
	];
	const pG1zero = module.alloc([
		...bigInt2BytesLE(toMontgomery(G1zero[0]), f1size),
		...bigInt2BytesLE(toMontgomery(G1zero[1]), f1size),
		...bigInt2BytesLE(toMontgomery(G1zero[2]), f1size)
	]);
	const G2gen = [
		[352701069587466618187139116011060144890029952792775240219908644239793785735715026873347600343865175952761926303160n, 3059144344244213709971259814753781636986470325476647558659373206291635324768958432433509563104347017837885763365758n],
		[1985150602287291935568054521177171638300868978215655730859378665066344726373823718423869104263333984641494340347905n, 927553665492332455747201965776037880757740193453592970025027978793976877002675564980949289727957565575433344219582n],
		[1n, 0n]
	];
	const pG2gen = module.alloc([
		...bigInt2BytesLE(toMontgomery(G2gen[0][0]), f1size),
		...bigInt2BytesLE(toMontgomery(G2gen[0][1]), f1size),
		...bigInt2BytesLE(toMontgomery(G2gen[1][0]), f1size),
		...bigInt2BytesLE(toMontgomery(G2gen[1][1]), f1size),
		...bigInt2BytesLE(toMontgomery(G2gen[2][0]), f1size),
		...bigInt2BytesLE(toMontgomery(G2gen[2][1]), f1size)
	]);
	const G2zero = [
		[0n, 0n],
		[1n, 0n],
		[0n, 0n]
	];
	const pG2zero = module.alloc([
		...bigInt2BytesLE(toMontgomery(G2zero[0][0]), f1size),
		...bigInt2BytesLE(toMontgomery(G2zero[0][1]), f1size),
		...bigInt2BytesLE(toMontgomery(G2zero[1][0]), f1size),
		...bigInt2BytesLE(toMontgomery(G2zero[1][1]), f1size),
		...bigInt2BytesLE(toMontgomery(G2zero[2][0]), f1size),
		...bigInt2BytesLE(toMontgomery(G2zero[2][1]), f1size)
	]);
	const pOneT = module.alloc([
		...bigInt2BytesLE(toMontgomery(1n), f1size),
		...bigInt2BytesLE(toMontgomery(0n), f1size),
		...bigInt2BytesLE(toMontgomery(0n), f1size),
		...bigInt2BytesLE(toMontgomery(0n), f1size),
		...bigInt2BytesLE(toMontgomery(0n), f1size),
		...bigInt2BytesLE(toMontgomery(0n), f1size),
		...bigInt2BytesLE(toMontgomery(0n), f1size),
		...bigInt2BytesLE(toMontgomery(0n), f1size),
		...bigInt2BytesLE(toMontgomery(0n), f1size),
		...bigInt2BytesLE(toMontgomery(0n), f1size),
		...bigInt2BytesLE(toMontgomery(0n), f1size),
		...bigInt2BytesLE(toMontgomery(0n), f1size)
	]);
	const pBls12381Twist = module.alloc([...bigInt2BytesLE(toMontgomery(1n), f1size), ...bigInt2BytesLE(toMontgomery(1n), f1size)]);
	function build_mulNR2() {
		const f = module.addFunction(f2mPrefix + "_mulNR");
		f.addParam("x", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		const x0c = c.i32_const(module.alloc(f1size));
		const x0 = c.getLocal("x");
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(f1size));
		const r0 = c.getLocal("pr");
		const r1 = c.i32_add(c.getLocal("pr"), c.i32_const(f1size));
		f.addCode(c.call(f1mPrefix + "_copy", x0, x0c), c.call(f1mPrefix + "_sub", x0, x1, r0), c.call(f1mPrefix + "_add", x0c, x1, r1));
	}
	build_mulNR2();
	const f6mPrefix = buildF3m(module, f2mPrefix + "_mulNR", "f6m", "f2m");
	function build_mulNR6() {
		const f = module.addFunction(f6mPrefix + "_mulNR");
		f.addParam("x", "i32");
		f.addParam("pr", "i32");
		const c = f.getCodeBuilder();
		const c0copy = c.i32_const(module.alloc(f1size * 2));
		f.addCode(c.call(f2mPrefix + "_copy", c.getLocal("x"), c0copy), c.call(f2mPrefix + "_mulNR", c.i32_add(c.getLocal("x"), c.i32_const(n8q * 4)), c.getLocal("pr")), c.call(f2mPrefix + "_copy", c.i32_add(c.getLocal("x"), c.i32_const(n8q * 2)), c.i32_add(c.getLocal("pr"), c.i32_const(n8q * 4))), c.call(f2mPrefix + "_copy", c0copy, c.i32_add(c.getLocal("pr"), c.i32_const(n8q * 2))));
	}
	build_mulNR6();
	const ftmPrefix = buildF2m(module, f6mPrefix + "_mulNR", "ftm", f6mPrefix);
	const ateLoopBitBytes = bits(15132376222941642752n);
	const pAteLoopBitBytes = module.alloc(ateLoopBitBytes);
	const ateCoefSize = 3 * f2size;
	const ateNDblCoefs = ateLoopBitBytes.length - 1;
	const ateNCoefs = ateLoopBitBytes.reduce((acc, b) => acc + (b != 0 ? 1 : 0), 0) + ateNDblCoefs + 1;
	const prePSize = 6 * n8q;
	const preQSize = 3 * n8q * 2 + ateNCoefs * ateCoefSize;
	const finalExpIsNegative = true;
	const finalExpZ = 15132376222941642752n;
	module.modules[prefix] = {
		n64q,
		n64r,
		n8q,
		n8r,
		pG1gen,
		pG1zero,
		pG1b,
		pG2gen,
		pG2zero,
		pG2b,
		pq: module.modules["f1m"].pq,
		pr,
		pOneT,
		r,
		q,
		prePSize,
		preQSize
	};
	function naf(n) {
		let E = n;
		const res = [];
		while (E > 0n) {
			if (isOdd(E)) {
				const z = 2 - Number(E % 4n);
				res.push(z);
				E = E - BigInt(z);
			} else res.push(0);
			E = E >> 1n;
		}
		return res;
	}
	function bits(n) {
		let E = n;
		const res = [];
		while (E > 0n) {
			if (isOdd(E)) res.push(1);
			else res.push(0);
			E = E >> 1n;
		}
		return res;
	}
	function buildPrepareG1() {
		const f = module.addFunction(prefix + "_prepareG1");
		f.addParam("pP", "i32");
		f.addParam("ppreP", "i32");
		const c = f.getCodeBuilder();
		f.addCode(c.call(g1mPrefix + "_normalize", c.getLocal("pP"), c.getLocal("ppreP")));
	}
	function buildPrepDoubleStep() {
		const f = module.addFunction(prefix + "_prepDblStep");
		f.addParam("R", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const Rx = c.getLocal("R");
		const Ry = c.i32_add(c.getLocal("R"), c.i32_const(2 * n8q));
		const Rz = c.i32_add(c.getLocal("R"), c.i32_const(4 * n8q));
		const t0 = c.getLocal("r");
		const t3 = c.i32_add(c.getLocal("r"), c.i32_const(2 * n8q));
		const t6 = c.i32_add(c.getLocal("r"), c.i32_const(4 * n8q));
		const zsquared = c.i32_const(module.alloc(f2size));
		const t1 = c.i32_const(module.alloc(f2size));
		const t2 = c.i32_const(module.alloc(f2size));
		const t4 = c.i32_const(module.alloc(f2size));
		const t5 = c.i32_const(module.alloc(f2size));
		f.addCode(c.call(f2mPrefix + "_square", Rx, t0), c.call(f2mPrefix + "_square", Ry, t1), c.call(f2mPrefix + "_square", t1, t2), c.call(f2mPrefix + "_add", t1, Rx, t3), c.call(f2mPrefix + "_square", t3, t3), c.call(f2mPrefix + "_sub", t3, t0, t3), c.call(f2mPrefix + "_sub", t3, t2, t3), c.call(f2mPrefix + "_add", t3, t3, t3), c.call(f2mPrefix + "_add", t0, t0, t4), c.call(f2mPrefix + "_add", t4, t0, t4), c.call(f2mPrefix + "_add", Rx, t4, t6), c.call(f2mPrefix + "_square", t4, t5), c.call(f2mPrefix + "_square", Rz, zsquared), c.call(f2mPrefix + "_sub", t5, t3, Rx), c.call(f2mPrefix + "_sub", Rx, t3, Rx), c.call(f2mPrefix + "_add", Rz, Ry, Rz), c.call(f2mPrefix + "_square", Rz, Rz), c.call(f2mPrefix + "_sub", Rz, t1, Rz), c.call(f2mPrefix + "_sub", Rz, zsquared, Rz), c.call(f2mPrefix + "_sub", t3, Rx, Ry), c.call(f2mPrefix + "_mul", Ry, t4, Ry), c.call(f2mPrefix + "_add", t2, t2, t2), c.call(f2mPrefix + "_add", t2, t2, t2), c.call(f2mPrefix + "_add", t2, t2, t2), c.call(f2mPrefix + "_sub", Ry, t2, Ry), c.call(f2mPrefix + "_mul", t4, zsquared, t3), c.call(f2mPrefix + "_add", t3, t3, t3), c.call(f2mPrefix + "_neg", t3, t3), c.call(f2mPrefix + "_square", t6, t6), c.call(f2mPrefix + "_sub", t6, t0, t6), c.call(f2mPrefix + "_sub", t6, t5, t6), c.call(f2mPrefix + "_add", t1, t1, t1), c.call(f2mPrefix + "_add", t1, t1, t1), c.call(f2mPrefix + "_sub", t6, t1, t6), c.call(f2mPrefix + "_mul", Rz, zsquared, t0), c.call(f2mPrefix + "_add", t0, t0, t0));
	}
	function buildPrepAddStep() {
		const f = module.addFunction(prefix + "_prepAddStep");
		f.addParam("R", "i32");
		f.addParam("Q", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const Rx = c.getLocal("R");
		const Ry = c.i32_add(c.getLocal("R"), c.i32_const(2 * n8q));
		const Rz = c.i32_add(c.getLocal("R"), c.i32_const(4 * n8q));
		const Qx = c.getLocal("Q");
		const Qy = c.i32_add(c.getLocal("Q"), c.i32_const(2 * n8q));
		const t10 = c.getLocal("r");
		const t1 = c.i32_add(c.getLocal("r"), c.i32_const(2 * n8q));
		const t9 = c.i32_add(c.getLocal("r"), c.i32_const(4 * n8q));
		const zsquared = c.i32_const(module.alloc(f2size));
		const ysquared = c.i32_const(module.alloc(f2size));
		const ztsquared = c.i32_const(module.alloc(f2size));
		const t0 = c.i32_const(module.alloc(f2size));
		const t2 = c.i32_const(module.alloc(f2size));
		const t3 = c.i32_const(module.alloc(f2size));
		const t4 = c.i32_const(module.alloc(f2size));
		const t5 = c.i32_const(module.alloc(f2size));
		const t6 = c.i32_const(module.alloc(f2size));
		const t7 = c.i32_const(module.alloc(f2size));
		const t8 = c.i32_const(module.alloc(f2size));
		f.addCode(c.call(f2mPrefix + "_square", Rz, zsquared), c.call(f2mPrefix + "_square", Qy, ysquared), c.call(f2mPrefix + "_mul", zsquared, Qx, t0), c.call(f2mPrefix + "_add", Qy, Rz, t1), c.call(f2mPrefix + "_square", t1, t1), c.call(f2mPrefix + "_sub", t1, ysquared, t1), c.call(f2mPrefix + "_sub", t1, zsquared, t1), c.call(f2mPrefix + "_mul", t1, zsquared, t1), c.call(f2mPrefix + "_sub", t0, Rx, t2), c.call(f2mPrefix + "_square", t2, t3), c.call(f2mPrefix + "_add", t3, t3, t4), c.call(f2mPrefix + "_add", t4, t4, t4), c.call(f2mPrefix + "_mul", t4, t2, t5), c.call(f2mPrefix + "_sub", t1, Ry, t6), c.call(f2mPrefix + "_sub", t6, Ry, t6), c.call(f2mPrefix + "_mul", t6, Qx, t9), c.call(f2mPrefix + "_mul", t4, Rx, t7), c.call(f2mPrefix + "_square", t6, Rx), c.call(f2mPrefix + "_sub", Rx, t5, Rx), c.call(f2mPrefix + "_sub", Rx, t7, Rx), c.call(f2mPrefix + "_sub", Rx, t7, Rx), c.call(f2mPrefix + "_add", Rz, t2, Rz), c.call(f2mPrefix + "_square", Rz, Rz), c.call(f2mPrefix + "_sub", Rz, zsquared, Rz), c.call(f2mPrefix + "_sub", Rz, t3, Rz), c.call(f2mPrefix + "_add", Qy, Rz, t10), c.call(f2mPrefix + "_sub", t7, Rx, t8), c.call(f2mPrefix + "_mul", t8, t6, t8), c.call(f2mPrefix + "_mul", Ry, t5, t0), c.call(f2mPrefix + "_add", t0, t0, t0), c.call(f2mPrefix + "_sub", t8, t0, Ry), c.call(f2mPrefix + "_square", t10, t10), c.call(f2mPrefix + "_sub", t10, ysquared, t10), c.call(f2mPrefix + "_square", Rz, ztsquared), c.call(f2mPrefix + "_sub", t10, ztsquared, t10), c.call(f2mPrefix + "_add", t9, t9, t9), c.call(f2mPrefix + "_sub", t9, t10, t9), c.call(f2mPrefix + "_add", Rz, Rz, t10), c.call(f2mPrefix + "_neg", t6, t6), c.call(f2mPrefix + "_add", t6, t6, t1));
	}
	function buildPrepareG2() {
		const f = module.addFunction(prefix + "_prepareG2");
		f.addParam("pQ", "i32");
		f.addParam("ppreQ", "i32");
		f.addLocal("pCoef", "i32");
		f.addLocal("i", "i32");
		const c = f.getCodeBuilder();
		const Q = c.getLocal("pQ");
		const pR = module.alloc(f2size * 3);
		const R = c.i32_const(pR);
		const base = c.getLocal("ppreQ");
		f.addCode(c.call(g2mPrefix + "_normalize", Q, base), c.if(c.call(g2mPrefix + "_isZero", base), c.ret([])), c.call(g2mPrefix + "_copy", base, R), c.setLocal("pCoef", c.i32_add(c.getLocal("ppreQ"), c.i32_const(f2size * 3))));
		f.addCode(c.setLocal("i", c.i32_const(ateLoopBitBytes.length - 2)), c.block(c.loop(c.call(prefix + "_prepDblStep", R, c.getLocal("pCoef")), c.setLocal("pCoef", c.i32_add(c.getLocal("pCoef"), c.i32_const(ateCoefSize))), c.if(c.i32_load8_s(c.getLocal("i"), pAteLoopBitBytes), [...c.call(prefix + "_prepAddStep", R, base, c.getLocal("pCoef")), ...c.setLocal("pCoef", c.i32_add(c.getLocal("pCoef"), c.i32_const(ateCoefSize)))]), c.br_if(1, c.i32_eqz(c.getLocal("i"))), c.setLocal("i", c.i32_sub(c.getLocal("i"), c.i32_const(1))), c.br(0))));
	}
	function buildF6Mul1() {
		const f = module.addFunction(f6mPrefix + "_mul1");
		f.addParam("pA", "i32");
		f.addParam("pC1", "i32");
		f.addParam("pR", "i32");
		const c = f.getCodeBuilder();
		const A_c0 = c.getLocal("pA");
		const A_c1 = c.i32_add(c.getLocal("pA"), c.i32_const(f1size * 2));
		const A_c2 = c.i32_add(c.getLocal("pA"), c.i32_const(f1size * 4));
		const c1 = c.getLocal("pC1");
		const t1 = c.getLocal("pR");
		const t2 = c.i32_add(c.getLocal("pR"), c.i32_const(f1size * 2));
		const b_b = c.i32_add(c.getLocal("pR"), c.i32_const(f1size * 4));
		const Ac0_Ac1 = c.i32_const(module.alloc(f1size * 2));
		const Ac1_Ac2 = c.i32_const(module.alloc(f1size * 2));
		f.addCode(c.call(f2mPrefix + "_add", A_c0, A_c1, Ac0_Ac1), c.call(f2mPrefix + "_add", A_c1, A_c2, Ac1_Ac2), c.call(f2mPrefix + "_mul", A_c1, c1, b_b), c.call(f2mPrefix + "_mul", Ac1_Ac2, c1, t1), c.call(f2mPrefix + "_sub", t1, b_b, t1), c.call(f2mPrefix + "_mulNR", t1, t1), c.call(f2mPrefix + "_mul", Ac0_Ac1, c1, t2), c.call(f2mPrefix + "_sub", t2, b_b, t2));
	}
	buildF6Mul1();
	function buildF6Mul01() {
		const f = module.addFunction(f6mPrefix + "_mul01");
		f.addParam("pA", "i32");
		f.addParam("pC0", "i32");
		f.addParam("pC1", "i32");
		f.addParam("pR", "i32");
		const c = f.getCodeBuilder();
		const A_c0 = c.getLocal("pA");
		const A_c1 = c.i32_add(c.getLocal("pA"), c.i32_const(f1size * 2));
		const A_c2 = c.i32_add(c.getLocal("pA"), c.i32_const(f1size * 4));
		const c0 = c.getLocal("pC0");
		const c1 = c.getLocal("pC1");
		const t1 = c.getLocal("pR");
		const t2 = c.i32_add(c.getLocal("pR"), c.i32_const(f1size * 2));
		const t3 = c.i32_add(c.getLocal("pR"), c.i32_const(f1size * 4));
		const a_a = c.i32_const(module.alloc(f1size * 2));
		const b_b = c.i32_const(module.alloc(f1size * 2));
		const Ac0_Ac1 = c.i32_const(module.alloc(f1size * 2));
		const Ac0_Ac2 = c.i32_const(module.alloc(f1size * 2));
		f.addCode(c.call(f2mPrefix + "_mul", A_c0, c0, a_a), c.call(f2mPrefix + "_mul", A_c1, c1, b_b), c.call(f2mPrefix + "_add", A_c0, A_c1, Ac0_Ac1), c.call(f2mPrefix + "_add", A_c0, A_c2, Ac0_Ac2), c.call(f2mPrefix + "_add", A_c1, A_c2, t1), c.call(f2mPrefix + "_mul", t1, c1, t1), c.call(f2mPrefix + "_sub", t1, b_b, t1), c.call(f2mPrefix + "_mulNR", t1, t1), c.call(f2mPrefix + "_add", t1, a_a, t1), c.call(f2mPrefix + "_add", c0, c1, t2), c.call(f2mPrefix + "_mul", t2, Ac0_Ac1, t2), c.call(f2mPrefix + "_sub", t2, a_a, t2), c.call(f2mPrefix + "_sub", t2, b_b, t2), c.call(f2mPrefix + "_mul", Ac0_Ac2, c0, t3), c.call(f2mPrefix + "_sub", t3, a_a, t3), c.call(f2mPrefix + "_add", t3, b_b, t3));
	}
	buildF6Mul01();
	function buildF12Mul014() {
		const f = module.addFunction(ftmPrefix + "_mul014");
		f.addParam("pA", "i32");
		f.addParam("pC0", "i32");
		f.addParam("pC1", "i32");
		f.addParam("pC4", "i32");
		f.addParam("pR", "i32");
		const c = f.getCodeBuilder();
		const A_c0 = c.getLocal("pA");
		const A_c1 = c.i32_add(c.getLocal("pA"), c.i32_const(f1size * 6));
		const c0 = c.getLocal("pC0");
		const c1 = c.getLocal("pC1");
		const c4 = c.getLocal("pC4");
		const aa = c.i32_const(module.alloc(f1size * 6));
		const bb = c.i32_const(module.alloc(f1size * 6));
		const o = c.i32_const(module.alloc(f1size * 2));
		const R_c0 = c.getLocal("pR");
		const R_c1 = c.i32_add(c.getLocal("pR"), c.i32_const(f1size * 6));
		f.addCode(c.call(f6mPrefix + "_mul01", A_c0, c0, c1, aa), c.call(f6mPrefix + "_mul1", A_c1, c4, bb), c.call(f2mPrefix + "_add", c1, c4, o), c.call(f6mPrefix + "_add", A_c1, A_c0, R_c1), c.call(f6mPrefix + "_mul01", R_c1, c0, o, R_c1), c.call(f6mPrefix + "_sub", R_c1, aa, R_c1), c.call(f6mPrefix + "_sub", R_c1, bb, R_c1), c.call(f6mPrefix + "_copy", bb, R_c0), c.call(f6mPrefix + "_mulNR", R_c0, R_c0), c.call(f6mPrefix + "_add", R_c0, aa, R_c0));
	}
	buildF12Mul014();
	function buildELL() {
		const f = module.addFunction(prefix + "_ell");
		f.addParam("pP", "i32");
		f.addParam("pCoefs", "i32");
		f.addParam("pF", "i32");
		const c = f.getCodeBuilder();
		const Px = c.getLocal("pP");
		const Py = c.i32_add(c.getLocal("pP"), c.i32_const(n8q));
		const F = c.getLocal("pF");
		const coef0_0 = c.getLocal("pCoefs");
		const coef0_1 = c.i32_add(c.getLocal("pCoefs"), c.i32_const(f1size));
		const coef1_0 = c.i32_add(c.getLocal("pCoefs"), c.i32_const(f1size * 2));
		const coef1_1 = c.i32_add(c.getLocal("pCoefs"), c.i32_const(f1size * 3));
		const coef2 = c.i32_add(c.getLocal("pCoefs"), c.i32_const(f1size * 4));
		const pc0 = module.alloc(f1size * 2);
		const c0 = c.i32_const(pc0);
		const c0_c0 = c.i32_const(pc0);
		const c0_c1 = c.i32_const(pc0 + f1size);
		const pc1 = module.alloc(f1size * 2);
		const c1 = c.i32_const(pc1);
		const c1_c0 = c.i32_const(pc1);
		const c1_c1 = c.i32_const(pc1 + f1size);
		f.addCode(c.call(f1mPrefix + "_mul", coef0_0, Py, c0_c0), c.call(f1mPrefix + "_mul", coef0_1, Py, c0_c1), c.call(f1mPrefix + "_mul", coef1_0, Px, c1_c0), c.call(f1mPrefix + "_mul", coef1_1, Px, c1_c1), c.call(ftmPrefix + "_mul014", F, coef2, c1, c0, F));
	}
	buildELL();
	function buildMillerLoop() {
		const f = module.addFunction(prefix + "_millerLoop");
		f.addParam("ppreP", "i32");
		f.addParam("ppreQ", "i32");
		f.addParam("r", "i32");
		f.addLocal("pCoef", "i32");
		f.addLocal("i", "i32");
		const c = f.getCodeBuilder();
		const preP = c.getLocal("ppreP");
		const coefs = c.getLocal("pCoef");
		const F = c.getLocal("r");
		f.addCode(c.call(ftmPrefix + "_one", F), c.if(c.call(g1mPrefix + "_isZero", preP), c.ret([])), c.if(c.call(g1mPrefix + "_isZero", c.getLocal("ppreQ")), c.ret([])), c.setLocal("pCoef", c.i32_add(c.getLocal("ppreQ"), c.i32_const(f2size * 3))), c.setLocal("i", c.i32_const(ateLoopBitBytes.length - 2)), c.block(c.loop(c.call(prefix + "_ell", preP, coefs, F), c.setLocal("pCoef", c.i32_add(c.getLocal("pCoef"), c.i32_const(ateCoefSize))), c.if(c.i32_load8_s(c.getLocal("i"), pAteLoopBitBytes), [...c.call(prefix + "_ell", preP, coefs, F), ...c.setLocal("pCoef", c.i32_add(c.getLocal("pCoef"), c.i32_const(ateCoefSize)))]), c.call(ftmPrefix + "_square", F, F), c.br_if(1, c.i32_eq(c.getLocal("i"), c.i32_const(1))), c.setLocal("i", c.i32_sub(c.getLocal("i"), c.i32_const(1))), c.br(0))), c.call(prefix + "_ell", preP, coefs, F));
		f.addCode(c.call(ftmPrefix + "_conjugate", F, F));
	}
	function buildFrobeniusMap(n) {
		const F12 = [[
			[1n, 0n],
			[1n, 0n],
			[1n, 0n],
			[1n, 0n],
			[1n, 0n],
			[1n, 0n],
			[1n, 0n],
			[1n, 0n],
			[1n, 0n],
			[1n, 0n],
			[1n, 0n],
			[1n, 0n]
		], [
			[1n, 0n],
			[3850754370037169011952147076051364057158807420970682438676050522613628423219637725072182697113062777891589506424760n, 151655185184498381465642749684540099398075398968325446656007613510403227271200139370504932015952886146304766135027n],
			[793479390729215512621379701633421447060886740281060493010456487427281649075476305620758731620351n, 0n],
			[2973677408986561043442465346520108879172042883009249989176415018091420807192182638567116318576472649347015917690530n, 1028732146235106349975324479215795277384839936929757896155643118032610843298655225875571310552543014690878354869257n],
			[793479390729215512621379701633421447060886740281060493010456487427281649075476305620758731620350n, 0n],
			[3125332594171059424908108096204648978570118281977575435832422631601824034463382777937621250592425535493320683825557n, 877076961050607968509681729531255177986764537961432449499635504522207616027455086505066378536590128544573588734230n],
			[4002409555221667393417789825735904156556882819939007885332058136124031650490837864442687629129015664037894272559786n, 0n],
			[151655185184498381465642749684540099398075398968325446656007613510403227271200139370504932015952886146304766135027n, 3850754370037169011952147076051364057158807420970682438676050522613628423219637725072182697113062777891589506424760n],
			[4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939436n, 0n],
			[1028732146235106349975324479215795277384839936929757896155643118032610843298655225875571310552543014690878354869257n, 2973677408986561043442465346520108879172042883009249989176415018091420807192182638567116318576472649347015917690530n],
			[4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939437n, 0n],
			[877076961050607968509681729531255177986764537961432449499635504522207616027455086505066378536590128544573588734230n, 3125332594171059424908108096204648978570118281977575435832422631601824034463382777937621250592425535493320683825557n]
		]];
		const F6 = [
			[
				[1n, 0n],
				[1n, 0n],
				[1n, 0n],
				[1n, 0n],
				[1n, 0n],
				[1n, 0n]
			],
			[
				[1n, 0n],
				[0n, 4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939436n],
				[793479390729215512621379701633421447060886740281060493010456487427281649075476305620758731620350n, 0n],
				[0n, 1n],
				[4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939436n, 0n],
				[0n, 793479390729215512621379701633421447060886740281060493010456487427281649075476305620758731620350n]
			],
			[
				[1n, 0n],
				[4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939437n, 0n],
				[4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939436n, 0n],
				[4002409555221667393417789825735904156556882819939007885332058136124031650490837864442687629129015664037894272559786n, 0n],
				[793479390729215512621379701633421447060886740281060493010456487427281649075476305620758731620350n, 0n],
				[793479390729215512621379701633421447060886740281060493010456487427281649075476305620758731620351n, 0n]
			]
		];
		const f = module.addFunction(ftmPrefix + "_frobeniusMap" + n);
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		for (let i = 0; i < 6; i++) {
			const X = i == 0 ? c.getLocal("x") : c.i32_add(c.getLocal("x"), c.i32_const(i * f2size));
			const Xc0 = X;
			const Xc1 = c.i32_add(c.getLocal("x"), c.i32_const(i * f2size + f1size));
			const R = i == 0 ? c.getLocal("r") : c.i32_add(c.getLocal("r"), c.i32_const(i * f2size));
			const Rc0 = R;
			const Rc1 = c.i32_add(c.getLocal("r"), c.i32_const(i * f2size + f1size));
			const coef = mul2(F12[Math.floor(i / 3)][n % 12], F6[i % 3][n % 6]);
			const pCoef = module.alloc([...bigInt2BytesLE(toMontgomery(coef[0]), n8q), ...bigInt2BytesLE(toMontgomery(coef[1]), n8q)]);
			if (n % 2 == 1) f.addCode(c.call(f1mPrefix + "_copy", Xc0, Rc0), c.call(f1mPrefix + "_neg", Xc1, Rc1), c.call(f2mPrefix + "_mul", R, c.i32_const(pCoef), R));
			else f.addCode(c.call(f2mPrefix + "_mul", X, c.i32_const(pCoef), R));
		}
		function mul2(a, b) {
			const ac0 = a[0];
			const ac1 = a[1];
			const bc0 = b[0];
			const bc1 = b[1];
			const res = [(ac0 * bc0 - ac1 * bc1) % q, (ac0 * bc1 + ac1 * bc0) % q];
			if (isNegative(res[0])) res[0] = res[0] + q;
			return res;
		}
	}
	function buildCyclotomicSquare() {
		const f = module.addFunction(prefix + "__cyclotomicSquare");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const x0 = c.getLocal("x");
		const x4 = c.i32_add(c.getLocal("x"), c.i32_const(f2size));
		const x3 = c.i32_add(c.getLocal("x"), c.i32_const(2 * f2size));
		const x2 = c.i32_add(c.getLocal("x"), c.i32_const(3 * f2size));
		const x1 = c.i32_add(c.getLocal("x"), c.i32_const(4 * f2size));
		const x5 = c.i32_add(c.getLocal("x"), c.i32_const(5 * f2size));
		const r0 = c.getLocal("r");
		const r4 = c.i32_add(c.getLocal("r"), c.i32_const(f2size));
		const r3 = c.i32_add(c.getLocal("r"), c.i32_const(2 * f2size));
		const r2 = c.i32_add(c.getLocal("r"), c.i32_const(3 * f2size));
		const r1 = c.i32_add(c.getLocal("r"), c.i32_const(4 * f2size));
		const r5 = c.i32_add(c.getLocal("r"), c.i32_const(5 * f2size));
		const t0 = c.i32_const(module.alloc(f2size));
		const t1 = c.i32_const(module.alloc(f2size));
		const t2 = c.i32_const(module.alloc(f2size));
		const t3 = c.i32_const(module.alloc(f2size));
		const t4 = c.i32_const(module.alloc(f2size));
		const t5 = c.i32_const(module.alloc(f2size));
		const tmp = c.i32_const(module.alloc(f2size));
		const AUX = c.i32_const(module.alloc(f2size));
		f.addCode(c.call(f2mPrefix + "_mul", x0, x1, tmp), c.call(f2mPrefix + "_mulNR", x1, t0), c.call(f2mPrefix + "_add", x0, t0, t0), c.call(f2mPrefix + "_add", x0, x1, AUX), c.call(f2mPrefix + "_mul", AUX, t0, t0), c.call(f2mPrefix + "_mulNR", tmp, AUX), c.call(f2mPrefix + "_add", tmp, AUX, AUX), c.call(f2mPrefix + "_sub", t0, AUX, t0), c.call(f2mPrefix + "_add", tmp, tmp, t1), c.call(f2mPrefix + "_mul", x2, x3, tmp), c.call(f2mPrefix + "_mulNR", x3, t2), c.call(f2mPrefix + "_add", x2, t2, t2), c.call(f2mPrefix + "_add", x2, x3, AUX), c.call(f2mPrefix + "_mul", AUX, t2, t2), c.call(f2mPrefix + "_mulNR", tmp, AUX), c.call(f2mPrefix + "_add", tmp, AUX, AUX), c.call(f2mPrefix + "_sub", t2, AUX, t2), c.call(f2mPrefix + "_add", tmp, tmp, t3), c.call(f2mPrefix + "_mul", x4, x5, tmp), c.call(f2mPrefix + "_mulNR", x5, t4), c.call(f2mPrefix + "_add", x4, t4, t4), c.call(f2mPrefix + "_add", x4, x5, AUX), c.call(f2mPrefix + "_mul", AUX, t4, t4), c.call(f2mPrefix + "_mulNR", tmp, AUX), c.call(f2mPrefix + "_add", tmp, AUX, AUX), c.call(f2mPrefix + "_sub", t4, AUX, t4), c.call(f2mPrefix + "_add", tmp, tmp, t5), c.call(f2mPrefix + "_sub", t0, x0, r0), c.call(f2mPrefix + "_add", r0, r0, r0), c.call(f2mPrefix + "_add", t0, r0, r0), c.call(f2mPrefix + "_add", t1, x1, r1), c.call(f2mPrefix + "_add", r1, r1, r1), c.call(f2mPrefix + "_add", t1, r1, r1), c.call(f2mPrefix + "_mul", t5, c.i32_const(pBls12381Twist), AUX), c.call(f2mPrefix + "_add", AUX, x2, r2), c.call(f2mPrefix + "_add", r2, r2, r2), c.call(f2mPrefix + "_add", AUX, r2, r2), c.call(f2mPrefix + "_sub", t4, x3, r3), c.call(f2mPrefix + "_add", r3, r3, r3), c.call(f2mPrefix + "_add", t4, r3, r3), c.call(f2mPrefix + "_sub", t2, x4, r4), c.call(f2mPrefix + "_add", r4, r4, r4), c.call(f2mPrefix + "_add", t2, r4, r4), c.call(f2mPrefix + "_add", t3, x5, r5), c.call(f2mPrefix + "_add", r5, r5, r5), c.call(f2mPrefix + "_add", t3, r5, r5));
	}
	function buildCyclotomicExp(exponent, isExpNegative, fnName) {
		const exponentNafBytes = naf(exponent).map((b) => b == -1 ? 255 : b);
		const pExponentNafBytes = module.alloc(exponentNafBytes);
		const f = module.addFunction(prefix + "__cyclotomicExp_" + fnName);
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		f.addLocal("bit", "i32");
		f.addLocal("i", "i32");
		const c = f.getCodeBuilder();
		const x = c.getLocal("x");
		const res = c.getLocal("r");
		const inverse = c.i32_const(module.alloc(ftsize));
		f.addCode(c.call(ftmPrefix + "_conjugate", x, inverse), c.call(ftmPrefix + "_one", res), c.if(c.teeLocal("bit", c.i32_load8_s(c.i32_const(exponentNafBytes.length - 1), pExponentNafBytes)), c.if(c.i32_eq(c.getLocal("bit"), c.i32_const(1)), c.call(ftmPrefix + "_mul", res, x, res), c.call(ftmPrefix + "_mul", res, inverse, res))), c.setLocal("i", c.i32_const(exponentNafBytes.length - 2)), c.block(c.loop(c.call(prefix + "__cyclotomicSquare", res, res), c.if(c.teeLocal("bit", c.i32_load8_s(c.getLocal("i"), pExponentNafBytes)), c.if(c.i32_eq(c.getLocal("bit"), c.i32_const(1)), c.call(ftmPrefix + "_mul", res, x, res), c.call(ftmPrefix + "_mul", res, inverse, res))), c.br_if(1, c.i32_eqz(c.getLocal("i"))), c.setLocal("i", c.i32_sub(c.getLocal("i"), c.i32_const(1))), c.br(0))));
		if (isExpNegative) f.addCode(c.call(ftmPrefix + "_conjugate", res, res));
	}
	function buildFinalExponentiation() {
		buildCyclotomicSquare();
		buildCyclotomicExp(finalExpZ, finalExpIsNegative, "w0");
		const f = module.addFunction(prefix + "_finalExponentiation");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const elt = c.getLocal("x");
		const res = c.getLocal("r");
		const t0 = c.i32_const(module.alloc(ftsize));
		const t1 = c.i32_const(module.alloc(ftsize));
		const t2 = c.i32_const(module.alloc(ftsize));
		const t3 = c.i32_const(module.alloc(ftsize));
		const t4 = c.i32_const(module.alloc(ftsize));
		const t5 = c.i32_const(module.alloc(ftsize));
		const t6 = c.i32_const(module.alloc(ftsize));
		f.addCode(c.call(ftmPrefix + "_frobeniusMap6", elt, t0), c.call(ftmPrefix + "_inverse", elt, t1), c.call(ftmPrefix + "_mul", t0, t1, t2), c.call(ftmPrefix + "_copy", t2, t1), c.call(ftmPrefix + "_frobeniusMap2", t2, t2), c.call(ftmPrefix + "_mul", t2, t1, t2), c.call(prefix + "__cyclotomicSquare", t2, t1), c.call(ftmPrefix + "_conjugate", t1, t1), c.call(prefix + "__cyclotomicExp_w0", t2, t3), c.call(prefix + "__cyclotomicSquare", t3, t4), c.call(ftmPrefix + "_mul", t1, t3, t5), c.call(prefix + "__cyclotomicExp_w0", t5, t1), c.call(prefix + "__cyclotomicExp_w0", t1, t0), c.call(prefix + "__cyclotomicExp_w0", t0, t6), c.call(ftmPrefix + "_mul", t6, t4, t6), c.call(prefix + "__cyclotomicExp_w0", t6, t4), c.call(ftmPrefix + "_conjugate", t5, t5), c.call(ftmPrefix + "_mul", t4, t5, t4), c.call(ftmPrefix + "_mul", t4, t2, t4), c.call(ftmPrefix + "_conjugate", t2, t5), c.call(ftmPrefix + "_mul", t1, t2, t1), c.call(ftmPrefix + "_frobeniusMap3", t1, t1), c.call(ftmPrefix + "_mul", t6, t5, t6), c.call(ftmPrefix + "_frobeniusMap1", t6, t6), c.call(ftmPrefix + "_mul", t3, t0, t3), c.call(ftmPrefix + "_frobeniusMap2", t3, t3), c.call(ftmPrefix + "_mul", t3, t1, t3), c.call(ftmPrefix + "_mul", t3, t6, t3), c.call(ftmPrefix + "_mul", t3, t4, res));
	}
	function buildFinalExponentiationOld() {
		const f = module.addFunction(prefix + "_finalExponentiationOld");
		f.addParam("x", "i32");
		f.addParam("r", "i32");
		const pExponent = module.alloc(bigInt2BytesLE(322277361516934140462891564586510139908379969514828494218366688025288661041104682794998680497580008899973249814104447692778988208376779573819485263026159588510513834876303014016798809919343532899164848730280942609956670917565618115867287399623286813270357901731510188149934363360381614501334086825442271920079363289954510565375378443704372994881406797882676971082200626541916413184642520269678897559532260949334760604962086348898118982248842634379637598665468817769075878555493752214492790122785850202957575200176084204422751485957336465472324810982833638490904279282696134323072515220044451592646885410572234451732790590013479358343841220074174848221722017083597872017638514103174122784843925578370430843522959600095676285723737049438346544753168912974976791528535276317256904336520179281145394686565050419250614107803233314658825463117900250701199181529205942363159325765991819433914303908860460720581408201373164047773794825411011922305820065611121544561808414055302212057471395719432072209245600258134364584636810093520285711072578721435517884103526483832733289802426157301542744476740008494780363354305116978805620671467071400711358839553375340724899735460480144599782014906586543813292157922220645089192130209334926661588737007768565838519456601560804957985667880395221049249803753582637708560n, 544));
		const c = f.getCodeBuilder();
		f.addCode(c.call(ftmPrefix + "_exp", c.getLocal("x"), c.i32_const(pExponent), c.i32_const(544), c.getLocal("r")));
	}
	const pPreP = module.alloc(prePSize);
	const pPreQ = module.alloc(preQSize);
	function buildPairingEquation(nPairings) {
		const f = module.addFunction(prefix + "_pairingEq" + nPairings);
		for (let i = 0; i < nPairings; i++) {
			f.addParam("p_" + i, "i32");
			f.addParam("q_" + i, "i32");
		}
		f.addParam("c", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		const resT = c.i32_const(module.alloc(ftsize));
		const auxT = c.i32_const(module.alloc(ftsize));
		f.addCode(c.call(ftmPrefix + "_one", resT));
		for (let i = 0; i < nPairings; i++) {
			f.addCode(c.call(prefix + "_prepareG1", c.getLocal("p_" + i), c.i32_const(pPreP)));
			f.addCode(c.call(prefix + "_prepareG2", c.getLocal("q_" + i), c.i32_const(pPreQ)));
			f.addCode(c.if(c.i32_eqz(c.call(g1mPrefix + "_inGroupAffine", c.i32_const(pPreP))), c.ret(c.i32_const(0))), c.if(c.i32_eqz(c.call(g2mPrefix + "_inGroupAffine", c.i32_const(pPreQ))), c.ret(c.i32_const(0))));
			f.addCode(c.call(prefix + "_millerLoop", c.i32_const(pPreP), c.i32_const(pPreQ), auxT));
			f.addCode(c.call(ftmPrefix + "_mul", resT, auxT, resT));
		}
		f.addCode(c.call(prefix + "_finalExponentiation", resT, resT));
		f.addCode(c.call(ftmPrefix + "_eq", resT, c.getLocal("c")));
	}
	function buildPairing() {
		const f = module.addFunction(prefix + "_pairing");
		f.addParam("p", "i32");
		f.addParam("q", "i32");
		f.addParam("r", "i32");
		const c = f.getCodeBuilder();
		const resT = c.i32_const(module.alloc(ftsize));
		f.addCode(c.call(prefix + "_prepareG1", c.getLocal("p"), c.i32_const(pPreP)));
		f.addCode(c.call(prefix + "_prepareG2", c.getLocal("q"), c.i32_const(pPreQ)));
		f.addCode(c.call(prefix + "_millerLoop", c.i32_const(pPreP), c.i32_const(pPreQ), resT));
		f.addCode(c.call(prefix + "_finalExponentiation", resT, c.getLocal("r")));
	}
	function buildInGroupG2() {
		const f = module.addFunction(g2mPrefix + "_inGroupAffine");
		f.addParam("p", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		const WINV = [2001204777610833696708894912867952078278441409969503942666029068062015825245418932221343814564507832018947136279894n, 2001204777610833696708894912867952078278441409969503942666029068062015825245418932221343814564507832018947136279893n];
		const FROB2X = 4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939436n;
		const FROB3Y = [2973677408986561043442465346520108879172042883009249989176415018091420807192182638567116318576472649347015917690530n, 2973677408986561043442465346520108879172042883009249989176415018091420807192182638567116318576472649347015917690530n];
		const wInv = c.i32_const(module.alloc([...bigInt2BytesLE(toMontgomery(WINV[0]), n8q), ...bigInt2BytesLE(toMontgomery(WINV[1]), n8q)]));
		const frob2X = c.i32_const(module.alloc(bigInt2BytesLE(toMontgomery(FROB2X), n8q)));
		const frob3Y = c.i32_const(module.alloc([...bigInt2BytesLE(toMontgomery(FROB3Y[0]), n8q), ...bigInt2BytesLE(toMontgomery(FROB3Y[1]), n8q)]));
		const z = c.i32_const(module.alloc(bigInt2BytesLE(finalExpZ, 8)));
		const px = c.getLocal("p");
		const py = c.i32_add(c.getLocal("p"), c.i32_const(f2size));
		const aux = c.i32_const(module.alloc(f1size));
		const x_winv = c.i32_const(module.alloc(f2size));
		const y_winv = c.i32_const(module.alloc(f2size));
		const pf2 = module.alloc(f2size * 2);
		const f2 = c.i32_const(pf2);
		const f2x = c.i32_const(pf2);
		const f2x_c1 = c.i32_const(pf2);
		const f2x_c2 = c.i32_const(pf2 + f1size);
		const f2y = c.i32_const(pf2 + f2size);
		const f2y_c1 = c.i32_const(pf2 + f2size);
		const f2y_c2 = c.i32_const(pf2 + f2size + f1size);
		const pf3 = module.alloc(f2size * 3);
		const f3 = c.i32_const(pf3);
		const f3x = c.i32_const(pf3);
		const f3x_c1 = c.i32_const(pf3);
		const f3x_c2 = c.i32_const(pf3 + f1size);
		const f3y = c.i32_const(pf3 + f2size);
		const f3y_c1 = c.i32_const(pf3 + f2size);
		const f3y_c2 = c.i32_const(pf3 + f2size + f1size);
		const f3z = c.i32_const(pf3 + f2size * 2);
		f.addCode(c.if(c.call(g2mPrefix + "_isZeroAffine", c.getLocal("p")), c.ret(c.i32_const(1))), c.if(c.i32_eqz(c.call(g2mPrefix + "_inCurveAffine", c.getLocal("p"))), c.ret(c.i32_const(0))), c.call(f2mPrefix + "_mul", px, wInv, x_winv), c.call(f2mPrefix + "_mul", py, wInv, y_winv), c.call(f2mPrefix + "_mul1", x_winv, frob2X, f2x), c.call(f2mPrefix + "_neg", y_winv, f2y), c.call(f2mPrefix + "_neg", x_winv, f3x), c.call(f2mPrefix + "_mul", y_winv, frob3Y, f3y), c.call(f1mPrefix + "_sub", f2x_c1, f2x_c2, aux), c.call(f1mPrefix + "_add", f2x_c1, f2x_c2, f2x_c2), c.call(f1mPrefix + "_copy", aux, f2x_c1), c.call(f1mPrefix + "_sub", f2y_c1, f2y_c2, aux), c.call(f1mPrefix + "_add", f2y_c1, f2y_c2, f2y_c2), c.call(f1mPrefix + "_copy", aux, f2y_c1), c.call(f1mPrefix + "_add", f3x_c1, f3x_c2, aux), c.call(f1mPrefix + "_sub", f3x_c1, f3x_c2, f3x_c2), c.call(f1mPrefix + "_copy", aux, f3x_c1), c.call(f1mPrefix + "_sub", f3y_c2, f3y_c1, aux), c.call(f1mPrefix + "_add", f3y_c1, f3y_c2, f3y_c2), c.call(f1mPrefix + "_copy", aux, f3y_c1), c.call(f2mPrefix + "_one", f3z), c.call(g2mPrefix + "_timesScalar", f3, z, c.i32_const(8), f3), c.call(g2mPrefix + "_addMixed", f3, f2, f3), c.ret(c.call(g2mPrefix + "_eqMixed", f3, c.getLocal("p"))));
		const fInGroup = module.addFunction(g2mPrefix + "_inGroup");
		fInGroup.addParam("pIn", "i32");
		fInGroup.setReturnType("i32");
		const c2 = fInGroup.getCodeBuilder();
		const aux2 = c2.i32_const(module.alloc(f2size * 2));
		fInGroup.addCode(c2.call(g2mPrefix + "_toAffine", c2.getLocal("pIn"), aux2), c2.ret(c2.call(g2mPrefix + "_inGroupAffine", aux2)));
	}
	function buildInGroupG1() {
		const f = module.addFunction(g1mPrefix + "_inGroupAffine");
		f.addParam("p", "i32");
		f.setReturnType("i32");
		const c = f.getCodeBuilder();
		const BETA = 4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939436n;
		const BETA2 = 793479390729215512621379701633421447060886740281060493010456487427281649075476305620758731620350n;
		const Z2M1D3 = (finalExpZ * finalExpZ - 1n) / 3n;
		const beta = c.i32_const(module.alloc(bigInt2BytesLE(toMontgomery(BETA), n8q)));
		const beta2 = c.i32_const(module.alloc(bigInt2BytesLE(toMontgomery(BETA2), n8q)));
		const z2m1d3 = c.i32_const(module.alloc(bigInt2BytesLE(Z2M1D3, 16)));
		const px = c.getLocal("p");
		const py = c.i32_add(c.getLocal("p"), c.i32_const(f1size));
		const psp = module.alloc(f1size * 3);
		const sp = c.i32_const(psp);
		const spx = c.i32_const(psp);
		const spy = c.i32_const(psp + f1size);
		const ps2p = module.alloc(f1size * 2);
		const s2p = c.i32_const(ps2p);
		const s2px = c.i32_const(ps2p);
		const s2py = c.i32_const(ps2p + f1size);
		f.addCode(c.if(c.call(g1mPrefix + "_isZeroAffine", c.getLocal("p")), c.ret(c.i32_const(1))), c.if(c.i32_eqz(c.call(g1mPrefix + "_inCurveAffine", c.getLocal("p"))), c.ret(c.i32_const(0))), c.call(f1mPrefix + "_mul", px, beta, spx), c.call(f1mPrefix + "_copy", py, spy), c.call(f1mPrefix + "_mul", px, beta2, s2px), c.call(f1mPrefix + "_copy", py, s2py), c.call(g1mPrefix + "_doubleAffine", sp, sp), c.call(g1mPrefix + "_subMixed", sp, c.getLocal("p"), sp), c.call(g1mPrefix + "_subMixed", sp, s2p, sp), c.call(g1mPrefix + "_timesScalar", sp, z2m1d3, c.i32_const(16), sp), c.ret(c.call(g1mPrefix + "_eqMixed", sp, s2p)));
		const fInGroup = module.addFunction(g1mPrefix + "_inGroup");
		fInGroup.addParam("pIn", "i32");
		fInGroup.setReturnType("i32");
		const c2 = fInGroup.getCodeBuilder();
		const aux2 = c2.i32_const(module.alloc(f1size * 2));
		fInGroup.addCode(c2.call(g1mPrefix + "_toAffine", c2.getLocal("pIn"), aux2), c2.ret(c2.call(g1mPrefix + "_inGroupAffine", aux2)));
	}
	for (let i = 0; i < 10; i++) {
		buildFrobeniusMap(i);
		module.exportFunction(ftmPrefix + "_frobeniusMap" + i);
	}
	buildInGroupG1();
	buildInGroupG2();
	buildPrepAddStep();
	buildPrepDoubleStep();
	buildPrepareG1();
	buildPrepareG2();
	buildMillerLoop();
	buildFinalExponentiationOld();
	buildFinalExponentiation();
	for (let i = 1; i <= 5; i++) {
		buildPairingEquation(i);
		module.exportFunction(prefix + "_pairingEq" + i);
	}
	buildPairing();
	module.exportFunction(prefix + "_pairing");
	module.exportFunction(prefix + "_prepareG1");
	module.exportFunction(prefix + "_prepareG2");
	module.exportFunction(prefix + "_millerLoop");
	module.exportFunction(prefix + "_finalExponentiation");
	module.exportFunction(prefix + "_finalExponentiationOld");
	module.exportFunction(prefix + "__cyclotomicSquare");
	module.exportFunction(prefix + "__cyclotomicExp_w0");
	module.exportFunction(f6mPrefix + "_mul1");
	module.exportFunction(f6mPrefix + "_mul01");
	module.exportFunction(ftmPrefix + "_mul014");
	module.exportFunction(g1mPrefix + "_inGroupAffine");
	module.exportFunction(g1mPrefix + "_inGroup");
	module.exportFunction(g2mPrefix + "_inGroupAffine");
	module.exportFunction(g2mPrefix + "_inGroup");
}
//#endregion
Object.defineProperty(exports, "bn128_wasm_gzip", {
	enumerable: true,
	get: function() {
		return bn128_wasm_gzip_exports;
	}
});
exports.buildBls12381 = buildBLS12381;
exports.buildBn128 = buildBN128;
exports.buildF1m = buildF1m;
