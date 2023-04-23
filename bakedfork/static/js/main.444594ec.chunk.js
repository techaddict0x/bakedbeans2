(this.webpackJsonpnew = this.webpackJsonpnew || []).push([
	[0], {
		175: function(e) {
			e.exports = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]')
		},
		189: function(e, t, n) {},
		190: function(e, t, n) {},
		46: function(e) {
			e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"adr","type":"address"},{"indexed":false,"internalType":"uint256","name":"bnbToEat","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"beansBeforeFee","type":"uint256"}],"name":"EmitAte","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"adr","type":"address"},{"indexed":true,"internalType":"address","name":"ref","type":"address"},{"indexed":false,"internalType":"uint256","name":"beansFrom","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"beansTo","type":"uint256"}],"name":"EmitBaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"adr","type":"address"},{"indexed":true,"internalType":"address","name":"ref","type":"address"},{"indexed":false,"internalType":"uint256","name":"bnbamount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"beansFrom","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"beansTo","type":"uint256"}],"name":"EmitBoughtBeans","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"BUSD","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"bakerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"bool","name":"setAsBlacklisted","type":"bool"}],"name":"blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"bnbRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"bnbTvl","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"buyBeans","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"dailyReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eat","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"hasInvested","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"maxPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"maxPayoutReached","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"maxTvlReached","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"secondsSinceLastEat","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalBakers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"user","outputs":[{"components":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"uint256","name":"beans","type":"uint256"},{"internalType":"uint256","name":"bakedAt","type":"uint256"},{"internalType":"uint256","name":"ateAt","type":"uint256"},{"internalType":"address","name":"upline","type":"address"},{"internalType":"bool","name":"hasReferred","type":"bool"},{"internalType":"address[]","name":"referrals","type":"address[]"},{"internalType":"address[]","name":"bonusEligibleReferrals","type":"address[]"},{"internalType":"uint256","name":"firstDeposit","type":"uint256"},{"internalType":"uint256","name":"totalDeposit","type":"uint256"},{"internalType":"uint256","name":"totalPayout","type":"uint256"},{"internalType":"bool","name":"blacklisted","type":"bool"}],"internalType":"struct GrilledBUSD.Baker","name":"","type":"tuple"}],"stateMutability":"view","type":"function"}]')
		},
		531: function(e, t) {},
		540: function(e, t) {},
		541: function(e, t, n) {},
		542: function(e, t, n) {
			"use strict";
			n.r(t);
			var a, s, r = n(8),
				i = n.n(r),
				c = n(174),
				l = n.n(c),
				u = (n(189), n(190), n(13)),
				o = "static/media/bnb.106058a1.png",
				d = "static/media/ape3.a594fade.png",
				p = n(2),
				b = n(11),
				y = n(46),
				j = n(175),
				f = n(12),
				m = (n(191), n(4)),
				x = i.a.createContext();
			"undefined" !== typeof window && (a = window.ethereum);
			var h = "0x52334b5D5Bce1D14492B46753b166578fF5bf5D7",
				O = function() {
					var e = new f.a.providers.Web3Provider(a);
					e.getSigner();
					return new f.a.Contract(h, y, e)
				},
				v = function(e) {
					var t = e.children,
						n = Object(r.useState)(!1),
						i = Object(u.a)(n, 2),
						c = i[0],
						l = i[1],
						o = window.location.search,
						d = new URLSearchParams(o);
					Object(r.useEffect)((function() {
						window.ethereum && F()
					}), []), Object(r.useEffect)((function() {
						window.ethereum && O()
					}), [h]), window.ethereum && window.ethereum.on("accountsChanged", (function(e) {
						C(e[0]);
						var t = e[0];
						console.log(t), U(t), W(t), _(t), Q(t), le(t), ae(t), z(t), O(), Te(t)
					}));
					var v = Object(r.useState)(null),
						w = Object(u.a)(v, 2),
						g = w[0],
						A = w[1],
						T = Object(r.useState)(null),
						k = Object(u.a)(T, 2),
						B = k[0],
						M = k[1],
						S = Object(r.useState)(),
						N = Object(u.a)(S, 2),
						E = N[0],
						C = N[1],
						R = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e() {
								var t, n, s, r = arguments;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (t = r.length > 0 && void 0 !== r[0] ? r[0] : a, e.prev = 1, t) {
												e.next = 4;
												break
											}
											return e.abrupt("return", alert("Please install metamask "));
										case 4:
											return e.next = 6, t.request({
												method: "eth_requestAccounts"
											});
										case 6:
											n = e.sent, C(n[0]), s = n[0], U(s), W(s), _(s), Q(s), le(s), ae(s), z(s), Te(s), e.next = 23;
											break;
										case 19:
											throw e.prev = 19, e.t0 = e.catch(1), console.error(e.t0), new Error("No ethereum object.");
										case 23:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[1, 19]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(),
						D = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e() {
								var t = arguments;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											t.length > 0 && void 0 !== t[0] ? t[0] : a, C(null);
										case 2:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(),
						F = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e() {
								var t, n, r, i, c, l = arguments;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (t = l.length > 0 && void 0 !== l[0] ? l[0] : a, e.prev = 1, t) {
												e.next = 4;
												break
											}
											return e.abrupt("return", alert("Please install metamask "));
										case 4:
											return e.next = 6, t.request({
												method: "eth_accounts"
											});
										case 6:
											if (!(n = e.sent).length) {
												e.next = 25;
												break
											}
											return C(n[0]), r = n[0], U(r), W(r), _(r), Q(r), le(r), ae(r), z(r), Te(r), i = O(), s = d.get("ref") || "0x0000000000000000000000000000000000000000", e.next = 22, i.hasInvested(s);
										case 22:
											c = e.sent, console.log(c), !1 === c && (s = "0x0000000000000000000000000000000000000000");
										case 25:
											e.next = 31;
											break;
										case 27:
											throw e.prev = 27, e.t0 = e.catch(1), console.error(e.t0), new Error("No ethereum object.");
										case 31:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[1, 27]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}(),
						G = Object(r.useState)(null),
						J = Object(u.a)(G, 2),
						L = J[0],
						P = J[1],
						U = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e(t) {
								var n, s, r, i;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return n = new f.a.providers.Web3Provider(a), e.next = 3, n.getBalance(t);
										case 3:
											s = e.sent, r = f.a.utils.formatEther(s), i = (Math.round(100 * r) / 100).toFixed(2), P(i), console.log(i);
										case 8:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						I = Object(r.useState)(null),
						X = Object(u.a)(I, 2),
						Z = X[0],
						q = X[1],
						Q = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e(t) {
								var n, a, r, i, c;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return n = O(), e.next = 3, n.contractBalance();
										case 3:
											return a = e.sent, e.next = 6, n.hasInvested(s);
										case 6:
											r = e.sent, console.log(r), !1 === r && (s = "0x0000000000000000000000000000000000000000"), i = f.a.utils.formatEther(a), c = (Math.round(100 * i) / 100).toFixed(2), q(c), console.log(c);
										case 13:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						V = Object(r.useState)(null),
						H = Object(u.a)(V, 2),
						K = H[0],
						Y = H[1],
						z = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e(t) {
								var n, a, s, r;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return console.log(t), n = O(), e.next = 4, n.user(t);
										case 4:
											a = e.sent, s = a.beans, r = s.toNumber(), Y(r), console.log(r);
										case 9:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						W = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e(t) {
								var n, a, s;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return n = O(), console.log(n), e.next = 4, n.bnbTvl(t);
										case 4:
											a = e.sent, s = f.a.utils.formatEther(a), A(s), console.log(s);
										case 8:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						_ = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e(t) {
								var n, a, s, r;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return n = O(), e.next = 3, n.bnbRewards(t);
										case 3:
											a = e.sent, s = f.a.utils.formatEther(a), r = (Math.round(1e6 * s) / 1e6).toFixed(6), M(r), console.log(r);
										case 8:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						$ = Object(r.useState)(null),
						ee = Object(u.a)($, 2),
						te = ee[0],
						ne = ee[1],
						ae = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e(t) {
								var n, a, s, r;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return n = O(), e.next = 3, n.dailyReward(t);
										case 3:
											a = e.sent, s = f.a.utils.formatEther(a), ne(r = 1e14 * s), console.log(r);
										case 8:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						se = Object(r.useState)(null),
						re = Object(u.a)(se, 2),
						ie = re[0],
						ce = re[1],
						le = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e(t) {
								var n, a, s;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return n = O(), e.next = 3, n.user(t);
										case 3:
											a = e.sent, s = a.referrals.length, ce(s);
										case 6:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						ue = Object(r.useState)(null),
						oe = Object(u.a)(ue, 2),
						de = oe[0],
						pe = oe[1],
						be = Object(r.useState)(null),
						ye = Object(u.a)(be, 2),
						je = ye[0],
						fe = ye[1],
						me = Object(r.useState)(null),
						xe = Object(u.a)(me, 2),
						he = xe[0],
						Oe = xe[1],
						ve = Object(r.useState)(null),
						we = Object(u.a)(ve, 2),
						ge = we[0],
						Ae = we[1],
						Te = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e(t) {
								var n, a, s, r, i, c, l;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return n = O(), e.next = 3, n.secondsSinceLastEat(t);
										case 3:
											a = e.sent, s = a.toNumber(), r = parseInt(s, 10), i = Math.floor(r / 86400), r -= 3600 * i * 24, c = Math.floor(r / 3600), r -= 3600 * c, l = Math.floor(r / 60), r -= 60 * l, console.log(i + " days, " + c + " Hrs, " + l + " Minutes, " + r + " Seconds"), 1 === i || 0 === i ? fe(90) : 2 === i ? fe(80) : 3 === i ? fe(70) : 4 === i ? fe(60) : 5 === i ? fe(50) : 6 === i ? fe(40) : 7 === i ? fe(30) : 8 === i ? fe(20) : 9 === i ? fe(10) : (10 === i || i > 10) && fe(5), pe(i), Oe(c), Ae(l);
										case 17:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						ke = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e(t, n) {
								var r, i, c, u, o, d, b, m;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (t.preventDefault(), r = t.target.bnbval.value, 1, !(r >= 10 && r <= 1e5)) {
												e.next = 28;
												break
											}
											return i = new f.a.providers.Web3Provider(a), c = i.getSigner(), u = new f.a.Contract(h, y, c), o = new f.a.Contract("0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", j, c), console.log("sending " + t.target.bnbval.value + " to the contract"), d = f.a.utils.parseEther(t.target.bnbval.value), e.next = 12, o.approve(h, d);
										case 12:
											return b = e.sent, l(!0), console.log(b), e.next = 17, b.wait();
										case 17:
											return l(!1), e.next = 20, u.buyBeans(s, d);
										case 20:
											return m = e.sent, l(!0), console.log(m), e.next = 25, m.wait();
										case 25:
											l(!1), e.next = 29;
											break;
										case 28:
											alert("Enter buy amount between 10 and 100k BUSD");
										case 29:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t, n) {
								return e.apply(this, arguments)
							}
						}(),
						Be = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e(t) {
								var n, s, r, i, c;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return t.preventDefault(), n = new f.a.providers.Web3Provider(a), s = n.getSigner(), r = new f.a.Contract(h, y, s), e.next = 6, r.bake();
										case 6:
											return i = e.sent, l(!0), e.next = 10, i.wait();
										case 10:
											c = e.sent, console.log(c), l(!1);
										case 13:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}(),
						Me = function() {
							var e = Object(b.a)(Object(p.a)().mark((function e(t) {
								var n, s, r, i;
								return Object(p.a)().wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return t.preventDefault(), n = new f.a.providers.Web3Provider(a), s = n.getSigner(), r = new f.a.Contract(h, y, s), e.next = 6, r.eat();
										case 6:
											return i = e.sent, l(!0), console.log(i), e.next = 11, i.wait();
										case 11:
											l(!1);
										case 12:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function(t) {
								return e.apply(this, arguments)
							}
						}();
					return Object(m.jsx)(x.Provider, {
						value: {
							connectWallet: R,
							currentAccount: E,
							wbalance: L,
							myape: g,
							mybanana: B,
							seHireApes: Be,
							sellbanana: Me,
							buyapes: ke,
							isloading: c,
							disconnect: D,
							cabalance: Z,
							referrals: ie,
							dailyr: te,
							beans: K,
							tax: je,
							day: de,
							hr: he,
							min: ge
						},
						children: t
					})
				},
				w = "p-4 h-15  w-screen flex justify-between items-center ",
				g = "flex w-1/4 items-center justify-start",
				A = "flex w-1/4 justify-end items-center",
				T = "items-justify bg-[#E88D67] rounded-2xl   font-bold cursor-pointer",
				k = "items-center bg-[#25DB1E] rounded-2xl   font-bold cursor-pointer ",
				B = "p-2",
				M = "items-center justify-center w-10 h-10",
				S = " border border-[#051007] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#FFFFFF]",
				N = function() {
					var e = Object(r.useContext)(x),
						t = e.connectWallet,
						n = e.currentAccount,
						a = e.disconnect,
						s = Object(r.useState)(),
						i = Object(u.a)(s, 2),
						c = i[0],
						l = i[1];
					Object(r.useEffect)((function() {
						n && l("".concat(n.slice(0, 4), "...").concat(n.slice(38)))
					}), [n]);
					var p = Object(r.useState)("swap"),
						b = Object(u.a)(p, 2);
					b[0], b[1];
					return Object(m.jsx)("div", {
						className: "wrap",
						children: Object(m.jsxs)("div", {
							className: w,
							children: [Object(m.jsx)("div", {
								className: g,
								children: Object(m.jsx)("img", {
									src: d,
									alt: "uniswap",
									height: 50,
									width: 50,
									class: "rounded-md rounded-xl"
								})
							}), Object(m.jsxs)("div", {
								className: A,
								children: [Object(m.jsx)("div", {
									className: M,
									children: Object(m.jsx)("img", {
										src: o,
										alt: "eth logo"
									})
								}), n ? Object(m.jsx)("div", {
									onClick: function() {
										return a()
									},
									className: "".concat(k, " ").concat(B),
									children: Object(m.jsx)("div", {
										className: "".concat(S, " ").concat(B),
										children: c
									})
								}) : Object(m.jsx)("div", {
									onClick: function() {
										return t()
									},
									className: "".concat(T, " ").concat(B),
									children: Object(m.jsx)("div", {
										children: Object(m.jsx)("h4", {
											children: "Connect"
										})
									})
								})]
							})]
						})
					})
				},
				E = n.p + "static/media/tg.9baadc5d.png",
				C = (n.p, n.p, "p-2 w-screen "),
				R = "flex-1 flex justify-center items-center",
				D = "flex bg-[#191B1F] rounded-3xl",
				F = "px-1 py-2 m-1/2 flex items-center cursor-pointer rounded-3xl",
				G = function() {
					return Object(m.jsx)("div", {
						className: "wra",
						children: Object(m.jsx)("div", {
							className: C,
							children: Object(m.jsx)("div", {
								className: R,
								children: Object(m.jsxs)("div", {
									className: D,
									children: [Object(m.jsx)("div", {
										className: F
									}), Object(m.jsx)("div", {
										className: F,
										children: Object(m.jsx)("a", {
											href: "https://t.me/dollarbeans",
											target: "_blank",
											rel: "noopener noreferrer",
											children: Object(m.jsx)("img", {
												src: E,
												alt: "uniswap",
												height: 40,
												width: 40,
												class: "rounded-md rounded-xl"
											})
										})
									}), Object(m.jsx)("div", {
										className: F
									}), Object(m.jsx)("div", {
										className: F,
										children: Object(m.jsx)("a", {
											href: "https://bscscan.com/address/0x52334b5D5Bce1D14492B46753b166578fF5bf5D7",
											target: "_blank",
											rel: "noopener noreferrer",
											children: Object(m.jsx)("img", {
												src: "data:image/png;base64,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",
												alt: "uniswap",
												height: 40,
												width: 40,
												class: "rounded-md rounded-xl"
											})
										})
									}), Object(m.jsx)("div", {
										className: F,
										children: Object(m.jsx)("a", {
											href: "https://dollarbeans.money/Dollar%20Beans%20Whitepaper.pdf",
											target: "_blank",
											rel: "noopener noreferrer",
											children: Object(m.jsx)("img", {
												src: "static/media/whitepaper.png",
												alt: "uniswap",
												height: 40,
												width: 40,
												class: "rounded-md rounded-xl"
											})
										})
									}), Object(m.jsx)("div", {
										className: F,
										children: Object(m.jsx)("a", {
											href: "https://the-stamp.com/2023/01/dollar-beans/",
											target: "_blank",
											rel: "noopener noreferrer",
											children: Object(m.jsx)("img", {
												src: "static/media/stamp.jpg",
												alt: "uniswap",
												height: 40,
												width: 40,
												class: "rounded-md rounded-xl"
											})
										})
									})]
								})
							})
						})
					})
				},
				J = n(32),
				L = "static/media/1.png",
				P = "bg-[#34344A]  rounded-2xl p-6 text-2xl  border border-[#34344A] hover:border-[#41444F]  flex justify-between",
				U = "bg-transparent placeholder:text-[#B2B9D2] outline-none  w-full text-2xl",
				I = "bg-[#34344A] my-3 rounded-2xl p-6 text-l text-orange-600 border border-[#34344A] hover:border-[#41444F]  flex justify-between",
				X = function() {
					var e, t, n, a, s = Object(r.useContext)(x),
						i = (s.wbalance, s.myape),
						c = s.mybanana,
						l = s.seHireApes,
						o = s.sellbanana,
						d = s.buyapes,
						j = s.currentAccount,
						h = (s.cabalance, s.referrals),
						O = (s.dailyr, s.beans),
						v = s.day,
						w = s.hr,
						g = s.min,
						A = (s.tax, window.location.search),
						T = new URLSearchParams(A).get("ref") || "0x0000000000000000000000000000000000000000",
						k = "",
						B = (k.concat(T), k.concat(j)),
						M = "0x52334b5D5Bce1D14492B46753b166578fF5bf5D7",
						S = Object(r.useState)(null),
						N = Object(u.a)(S, 2),
						E = N[0],
						C = N[1];

					function R() {
						return (R = Object(b.a)(Object(p.a)().mark((function e() {
							var t, n, a, s, r;
							return Object(p.a)().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return t = new f.a.providers.JsonRpcProvider("https://bsc-dataseed.binance.org"), n = new f.a.Contract(M, y, t), e.next = 4, n.contractBalance();
									case 4:
										a = e.sent, s = f.a.utils.formatEther(a), r = (Math.round(100 * s) / 100).toFixed(2), C(r);
									case 8:
									case "end":
										return e.stop()
								}
							}), e)
						})))).apply(this, arguments)
					}
					return Object(r.useEffect)((function() {
						! function() {
							R.apply(this, arguments)
						}()
					}), []), Object(m.jsx)("div", {
						children: Object(m.jsxs)("div", {
							className: "whole",
							children: [Object(m.jsx)("div", {
								class: "h-100 container py-5 ",
								children: Object(m.jsx)("div", {
									class: "row d-flex justify-content-center align-items-center h-100 ",
									children: Object(m.jsx)("div", {
										class: "col-12 col-md-8 col-lg-6 col-xl-5 ",
										children: Object(m.jsx)("div", (t = {
											class: "text-white "
										}, Object(J.a)(t, "class", "top"), Object(J.a)(t, "children", Object(m.jsxs)("div", {
											class: "card-body p-5 text-center",
											children: [Object(m.jsxs)("div", {
												class: "mb-md-2   md-4 pb-5  text-center ",
												children: [Object(m.jsx)("img", {
													src: L,
													alt: "mid",
													height: 70,
													width: 350,
													class: "rounded-md rounded-xl mx-auto d-block"
												}), Object(m.jsx)("p", {
													children: Object(m.jsx)("h4", {
														class: "fw-bold",
														children: "Dollar Beans is a locked BUSD static rewards pool returning up to 6.5% daily"
													})
												}), Object(m.jsxs)("div", {
													class: "feature-item mb-5 mb-lg-0",
													children: [Object(m.jsx)("div", {
														class: "feature-icon mb-4"
													}), Object(m.jsx)("ul", {
														class: "w-hours list-unstyled",
														children: Object(m.jsxs)("li", {
															class: "d-flex justify-content-between",
															children: ["Contract Balance ", Object(m.jsxs)("span", {
																children: [E, " BUSD"]
															})]
														})
													})]
												}), Object(m.jsxs)("div", {
													class: "feature-item mb-5 mb-lg-0 ",
													children: [Object(m.jsx)("div", {
														class: "feature-icon mb-4"
													}), Object(m.jsx)("ul", {
														class: "w-hours list-unstyled",
														children: Object(m.jsxs)("li", {
															class: "d-flex justify-content-between",
															children: ["Your BUSD invested ", Object(m.jsxs)("span", {
																children: [i, " BUSD"]
															})]
														})
													})]
												}), Object(m.jsxs)("div", {
													class: "feature-item mb-5 mb-lg-0  ",
													children: [Object(m.jsx)("div", {
														class: "feature-icon mb-4"
													}), Object(m.jsx)("ul", {
														class: "w-hours list-unstyled",
														children: Object(m.jsxs)("li", {
															class: "d-flex justify-content-between",
															children: ["Your Beans ", Object(m.jsx)("span", {
																children: O
															})]
														})
													})]
												}), Object(m.jsxs)("form", {
													onSubmit: d,
													children: [Object(m.jsxs)("div", {
														className: P,
														children: [Object(m.jsx)("input", {
															id: "bnbval",
															type: "text",
															className: U,
															placeholder: "0.0",
															pattern: "^[0-9]*[.,]?[0-9]*$"
														}), Object(m.jsx)("span", {
															class: "coin",
															children: "BUSD"
														})]
													}), Object(m.jsxs)("div", {
														class: "feature-item  ",
														children: [Object(m.jsx)("div", {
															class: "feature-icon "
														}), Object(m.jsx)("ul", {
															class: "w-hours list-unstyled",
															children: Object(m.jsxs)("li", {
																class: "d-flex justify-content-between",
																children: ["Min - 10 BUSD", Object(m.jsx)("span", {
																	children: "Max - 100k BUSD"
																})]
															})
														})]
													}), Object(m.jsx)("div", {
														style: {
															display: "flex",
															flexDirection: "column"
														},
														children: Object(m.jsx)("button", {
															type: "submit",
															class: "but",
															children: Object(m.jsx)("h4", {
																children: "Buy Beans"
															})
														})
													})]
												})]
											}), Object(m.jsx)("div", {
												class: "divider  mb-4 py-1  "
											}), Object(m.jsxs)("div", {
												children: [Object(m.jsxs)("div", {
													class: "feature-item mb-5 mb-lg-0  ",
													children: [Object(m.jsx)("div", {
														class: "feature-icon mb-4"
													}), Object(m.jsx)("ul", {
														class: "w-hours list-unstyled",
														children: Object(m.jsxs)("li", {
															class: "d-flex justify-content-between ",
															children: ["Your Bean Rewards ", Object(m.jsxs)("span", {
																children: [c, " BUSD"]
															})]
														})
													})]
												}), Object(m.jsxs)("div", {
													class: "row  ",
													children: [Object(m.jsx)("div", {
														class: "col-md-6 mb-4",
														children: Object(m.jsx)("div", {
															class: "form-outline",
															children: Object(m.jsx)("button", (e = {
																class: "rehire",
																onClick: l
															}, Object(J.a)(e, "class", "but"), Object(J.a)(e, "type", "submit"), Object(J.a)(e, "children", "Rebake Beans"), e))
														})
													}), Object(m.jsx)("div", {
														class: "col-md-6 mb-4",
														children: Object(m.jsx)("div", {
															class: "form-outline",
															children: Object(m.jsx)("button", {
																onClick: o,
																class: "but1",
																type: "submit",
																children: "Eat Beans"
															})
														})
													})]
												}), Object(m.jsxs)("div", {
													class: "feature-item mb-5 mb-lg-0  ",
													children: [Object(m.jsx)("div", {
														class: "feature-icon mb-4"
													}), Object(m.jsx)("ul", {
														class: "w-hours list-unstyled",
														children: Object(m.jsxs)("li", {
															class: "d-flex justify-content-between ",
															children: ["Time passed since last eat", " ", Object(m.jsxs)("span", {
																children: [v, "d ", w, "hr ", g, "min", Object(m.jsx)("br", {})]
															})]
														})
													})]
												})]
											})]
										})), t))
									})
								})
							}), Object(m.jsx)("div", {
								class: "h-100 container py-5 ",
								children: Object(m.jsx)("div", {
									class: "row d-flex justify-content-center align-items-center h-100",
									children: Object(m.jsx)("div", {
										class: "col-12 col-md-8 col-lg-6 col-xl-5",
										children: Object(m.jsx)("div", (n = {
											class: "card bg-light text-white border border-info border border-5"
										}, Object(J.a)(n, "class", "top"), Object(J.a)(n, "children", Object(m.jsx)("div", {
											class: "card-body p-5 text-left",
											children: Object(m.jsxs)("div", {
												class: "mb-md-1 mt-2 md-4 pb-5 ",
												children: [Object(m.jsx)("span", {
													class: "text-left-yellow-50",
													children: "Details"
												}), Object(m.jsx)("div", {
													class: "divider  mb-4 py-1 "
												}), Object(m.jsxs)("div", {
													class: "feature-item mb-5 mb-lg-0  ",
													children: [Object(m.jsx)("div", {
														class: "feature-icon mb-4"
													}), Object(m.jsx)("ul", {
														class: "w-hours list-unstyled",
														children: Object(m.jsxs)("li", {
															class: "d-flex justify-content-between",
															children: ["Daily Returns upto* ", Object(m.jsx)("span", {
																children: "3.5 - 6.5%"
															})]
														})
													})]
												}), Object(m.jsxs)("div", {
													class: "feature-item mb-5 mb-lg-0  ",
													children: [Object(m.jsx)("div", {
														class: "feature-icon mb-4"
													}), Object(m.jsx)("ul", {
														class: "w-hours list-unstyled",
														children: Object(m.jsxs)("li", {
															class: "d-flex justify-content-between",
															children: ["APR up to ", Object(m.jsx)("span", {
																children: " 1278% - 2373%"
															})]
														})
													})]
												}), Object(m.jsxs)("div", {
													class: "feature-item mb-5 mb-lg-0  ",
													children: [Object(m.jsx)("div", {
														class: "feature-icon mb-4"
													}), Object(m.jsx)("ul", {
														class: "w-hours list-unstyled",
														children: Object(m.jsxs)("li", {
															class: "d-flex justify-content-between",
															children: ["Fees", Object(m.jsxs)("span", {
																children: ["\xa0 \xa0 1% Deposit", Object(m.jsx)("br", {}), " 5% Withdraw"]
															})]
														})
													})]
												}), Object(m.jsx)("div", {
													class: "mt-5",
													children: Object(m.jsx)("p", {
														children: "Dollar Beans is a decentralized application (dApp) that allows users to invest in a rewards pool using BUSD. The dApp has three main functions: Buy Beans (Invest), Rebake Beans (Compound), and Eat Beans (Withdraw). There is a tax on early withdrawals, with the amount depending on how long the BUSD has been in the pool (the longer it has been, the lower the tax). Referral codes can be used to receive a 5% bonus on deposits made by people you refer. There are also 'Beantastic' referrals, which give higher daily returns depending on the number you have. The minimum investment is 10 BUSD and the maximum is 100,000 BUSD. There is a 1% deposit fee and a 5% withdrawal fee. The contract is fully decentralized, audited, and cannot be changed. Check the whitepaper for more details."
													})
												})]
											})
										})), n))
									})
								})
							}), Object(m.jsx)("div", {
								class: "h-100 container py-5",
								children: Object(m.jsx)("div", {
									class: "row d-flex justify-content-center align-items-center h-100",
									children: Object(m.jsx)("div", {
										class: "col-12 col-md-8 col-lg-6 col-xl-5",
										children: Object(m.jsx)("div", (a = {
											class: "card bg-light  border border-info border-5 rounded-pill "
										}, Object(J.a)(a, "class", "top"), Object(J.a)(a, "children", Object(m.jsx)("div", {
											class: "card-body p-5 text-center",
											children: Object(m.jsxs)("div", {
												class: "mb-md-5 mt-md-4 pb-5",
												children: [Object(m.jsx)("div", {
													class: "input-group ",
													children: Object(m.jsx)("input", {
														type: "text",
														class: "form-control",
														"aria-label": "Username",
														"aria-describedby": "basic-addon1",
														value: B
													})
												}), Object(m.jsxs)("div", {
													className: I,
													children: ["Referrals", Object(m.jsx)("span", {
														class: "coin1",
														children: h
													})]
												}), Object(m.jsx)("span", {
													class: "",
													children: "Earn 5% of the downline BUSD deposit."
												})]
											})
										})), a))
									})
								})
							})]
						})
					})
				},
				Z = (n(541), " text-white  flex flex-col justify-between ");
			var q = function() {
				return Object(m.jsxs)("div", {
					className: Z,
					children: [Object(m.jsx)(N, {}), Object(m.jsx)(X, {}), Object(m.jsx)(G, {})]
				})
			};
			l.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(v, {
				children: Object(m.jsx)(i.a.StrictMode, {
					children: Object(m.jsx)(q, {})
				})
			}))
		}
	},
	[
		[542, 1, 2]
	]
]);
//# sourceMappingURL=main.444594ec.chunk.js.map